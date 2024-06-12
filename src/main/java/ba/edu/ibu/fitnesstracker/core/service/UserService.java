package ba.edu.ibu.fitnesstracker.core.service;

import ba.edu.ibu.fitnesstracker.core.api.mailsender.MailSender;
import ba.edu.ibu.fitnesstracker.core.repository.UserRepository;
import ba.edu.ibu.fitnesstracker.rest.dto.UserDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.UserRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ba.edu.ibu.fitnesstracker.core.model.User;
import ba.edu.ibu.fitnesstracker.core.exceptions.repository.ResourceNotFoundException;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    private MailSender mailgunSender;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getUsers() {
        List<User> users = userRepository.findAll();

        return users
                .stream()
                .map(UserDTO::new)
                .collect(toList());
    }

    public UserDTO getUserById(String id) {
        Optional<User> user = userRepository.findById(id);

        if (user.isEmpty()) {
            throw new ResourceNotFoundException("User with the given ID does not exist.");
        }

        return new UserDTO(user.get());
    }

    public UserDTO addUser(UserRequestDTO payload) {
        User user = userRepository.save(payload.toEntity());
        return new UserDTO(user);
    }

    public UserDTO updateUser(String id, UserRequestDTO payload) {
        Optional<User> existingUserOpt = userRepository.findById(id);

        if (existingUserOpt.isEmpty()) {
            throw new ResourceNotFoundException("User with the given ID does not exist.");
        }

        User existingUser = existingUserOpt.get();

        // update only fields that are present in the payload (in this case name)
        if (payload.getFirstName() != null) {
            existingUser.setFirstName(payload.getFirstName());
        }
        if (payload.getLastName() != null) {
            existingUser.setLastName(payload.getLastName());
        }

        // save the updated user
        User updatedUser = userRepository.save(existingUser);
        return new UserDTO(updatedUser);
    }

    public void deleteUser(String id) {
        Optional<User> user = userRepository.findById(id);
        user.ifPresent(userRepository::delete);
    }

    public String sendEmailToAllUsers(String message) {
        List<User> users = userRepository.findAll();
        return mailgunSender.send(users, message);
    }

    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String email) {
                return userRepository.findByEmail(email)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }
}
