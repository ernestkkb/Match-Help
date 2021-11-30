package com.match.demo.controllers;

import com.match.demo.post.Post;
import com.match.demo.post.PostRepository;
import com.match.demo.user.User;
import com.match.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@RestController
@RequestMapping("api/v1")
public class Controller {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @PostMapping(path = "/addUser")
    public @ResponseBody String addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email, @RequestParam String username, @RequestParam String password){
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        user.setUsername(username);
        user.setPassword(passwordEncoder().encode(user.getPassword()));
        userRepository.save(user);
        return "Successful, user added!";
    }

    @PostMapping(path = "/addPost")
    public @ResponseBody String addNewPost (@RequestParam String caption, @RequestParam String photoURL, @RequestParam String avatarURL, @RequestParam String profileURL, @RequestParam String username, @RequestParam String deadline){
        Post post = new Post();
        post.setCaption(caption);
        post.setAvatarURL(avatarURL);
        post.setProfileURL(profileURL);
        post.setPhotoURL(photoURL);
        post.setUsername(username);
        post.setDeadline(LocalDate.parse(deadline, DateTimeFormatter.ofPattern("dd-MM-yyyy")));

        postRepository.save(post);
        return "Successful, post added!";
    }
    @GetMapping(path="/getAllUsers")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/getAllPosts")
    public @ResponseBody Iterable<Post> getAllPosts() {
        // This returns a JSON or XML with the users
        return postRepository.findAll();
    }
}
