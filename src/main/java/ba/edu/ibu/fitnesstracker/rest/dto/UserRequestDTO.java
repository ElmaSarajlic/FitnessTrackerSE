package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.User;
import ba.edu.ibu.fitnesstracker.core.model.enums.UserType;
import lombok.Builder;

import java.util.Date;

@Builder
public class UserRequestDTO {
    private UserType userType;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    public UserRequestDTO() { }

    public UserRequestDTO(UserType userType, String firstName, String lastName, String email, String password) {
        this.userType = userType;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public UserRequestDTO(User user) {
        this.userType = user.getUserType();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.password = user.getPassword();
    }

    public User toEntity() {
        return User.builder()
                .userType(userType)
                .firstName(firstName)
                .lastName(lastName)
                .email(email)
                .password(password)
                .creationDate(new Date())
                .build();
    }

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
