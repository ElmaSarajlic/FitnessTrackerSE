package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.User;
import ba.edu.ibu.fitnesstracker.core.model.enums.UserType;

import java.util.Date;

public class UserDTO {
    private String id;
    private String firstName;
    private String lastName;
    private UserType userType;
    private String email;
    private Date creationDate;

    public UserDTO(User user) {
        this.id = user.getId();
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.userType = user.getUserType();
        this.email = user.getEmail();
        this.creationDate = user.getCreationDate();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public UserType getUserType() {
        return userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
