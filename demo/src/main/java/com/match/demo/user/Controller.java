package com.match.demo.user;

import com.match.demo.post.Post;
import com.match.demo.post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;

@RestController
@RequestMapping("api/v1")
public class Controller {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @PostMapping(path = "/addUser")
    public @ResponseBody String addNewUser(@RequestParam String firstName, @RequestParam String lastName, @RequestParam String email){
        User user = new User();
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setEmail(email);
        userRepository.save(user);
        return "Successful, user added!";
    }

    @PostMapping(path = "/addPost")
    public @ResponseBody String addNewPost (@RequestParam String caption, @RequestParam String photoURL, @RequestParam String avatarURL, @RequestParam String profileURL, @RequestParam String deadline){
        Post post = new Post();
        post.setCaption(caption);
        post.setAvatarURL(avatarURL);
        post.setProfileURL(profileURL);
        post.setPhotoURL(photoURL);
        SimpleDateFormat formatter1 = new SimpleDateFormat("dd/MM/yyyy");

        try{
            post.setDeadline(formatter1.parse(deadline));
        }catch(Exception e){

        }

        postRepository.save(post);
        return "Successful, post added!";
    }
    @GetMapping(path="/getAllUsers")
    public @ResponseBody Iterable<User> getAllUsers() {
        // This returns a JSON or XML with the users
        return userRepository.findAll();
    }

    @GetMapping(path="/getAllPosts")
    public @ResponseBody Iterable<Post> getAllPosts() {
        // This returns a JSON or XML with the users
        return postRepository.findAll();
    }
}
