package com.bezkoder.spring.jwt.mongodb.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.bezkoder.spring.jwt.mongodb.models.Constituency;
import com.bezkoder.spring.jwt.mongodb.repository.ConstituencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.bezkoder.spring.jwt.mongodb.models.ERole;
import com.bezkoder.spring.jwt.mongodb.models.Role;
import com.bezkoder.spring.jwt.mongodb.models.User;
import com.bezkoder.spring.jwt.mongodb.payload.request.LoginRequest;
import com.bezkoder.spring.jwt.mongodb.payload.request.SignupRequest;
import com.bezkoder.spring.jwt.mongodb.payload.response.JwtResponse;
import com.bezkoder.spring.jwt.mongodb.payload.response.MessageResponse;
import com.bezkoder.spring.jwt.mongodb.repository.RoleRepository;
import com.bezkoder.spring.jwt.mongodb.repository.UserRepository;
import com.bezkoder.spring.jwt.mongodb.security.jwt.JwtUtils;
import com.bezkoder.spring.jwt.mongodb.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

//	added
	@Autowired
	private ConstituencyRepository constituencyRepository;


	@GetMapping("/validateUser")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity validateUser(@RequestHeader("Authorization") String token){
		return ResponseEntity.ok("Admin");
	}

	@GetMapping("/validateOfficer")
	@PreAuthorize("hasRole('ROLE_PRESIDING')")
	public ResponseEntity validateOfficer(@RequestHeader("Authorization") String token){
		return ResponseEntity.ok("Presiding Officer");
	}

	@PutMapping("aftervote/{voterid}")
	public ResponseEntity<?> aftervote(@PathVariable("voterid") String voterid){
		if(voterid == null){
			return ResponseEntity.internalServerError().body("No Voter found!!");
		}
		User user = userRepository.findByVoterid(voterid).get();
		if(user != null){
			user.setIsVoted(true);
			userRepository.save(user);
			return ResponseEntity.ok("Voted");
		}
		return ResponseEntity.internalServerError().body("No Voter Found");
	}
	@PostMapping("/voterLogin")
	public ResponseEntity<?> voterLogin(@Valid @RequestBody LoginRequest loginRequest){
		if(loginRequest == null){
			return ResponseEntity.internalServerError().body("Fill details");
		}
		User user = userRepository.findByVoterid(loginRequest.getVoterid()).get();
		if(user != null){
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getVoterid(), loginRequest.getPassword()));

			if(authentication.isAuthenticated()) {
				if (user.getIsVoted() == true) {
					return ResponseEntity.internalServerError().body("Already Voted");
				}
				else {
					return ResponseEntity.ok(user.getConstituency().getConstituencyname());
				}
			}
			else {
				return ResponseEntity.internalServerError().body("Bad Credentials");
			}

		}
		else{
			return ResponseEntity.internalServerError().body("Bad Credentials!!");
		}
	}
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		if(loginRequest == null){
			return ResponseEntity.internalServerError().body("Fill details");
		}
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getVoterid(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> {

					System.out.println(item.getAuthority());
					return item.getAuthority();
				})
				.collect(Collectors.toList());
		System.out.println(userDetails.getAuthorities());
		return ResponseEntity.ok(new JwtResponse(jwt,
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (userRepository.existsByVoterid(signUpRequest.getVoterid())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: voter id is already taken!"));
		}

		if (userRepository.existsByAdharid(signUpRequest.getAdharid())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: adhar id is already taken!"));
		}

		if (userRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		Constituency con = constituencyRepository.findConstituencyByConstituencyname(signUpRequest.getConstituency());
		if(con == null){
			return ResponseEntity.internalServerError().body("Constituency is not found");
		}
		// Create new user's account
		User user = new User(signUpRequest.getVoterid(),signUpRequest.getAdharid(),
							 signUpRequest.getEmail(),signUpRequest.getName(),con,
							 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRoles();
		Set<Role> roles = new HashSet<>();
		user.setIsVoted(false);
		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;

					case "presiding":
						Role presiding = roleRepository.findByName(ERole.ROLE_PRESIDING)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(presiding);
						break;

				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}

	@GetMapping("/getAllVoter")
	public ResponseEntity<?> getAllVoter(){
		List<User> users = userRepository.findUsersByRoles(roleRepository.findByName(ERole.ROLE_USER));
		System.out.println(users.size());
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	@DeleteMapping("/deleteUser/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable("id") String id){
		if(id == null){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("No Voter Found");
		}
		userRepository.deleteById(id);
		return ResponseEntity.ok("Voter Deleted Successfully");
	}
}
