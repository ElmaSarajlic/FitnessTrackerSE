package ba.edu.ibu.fitnesstracker.rest.dto;

import lombok.Builder;

@Builder
public class PasswordRequestDTO {
    private String oldPassword;
    private String newPassword;

    public String getOldPassword() {
        return oldPassword;
    }

    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }

    public String getNewPassword() {
        return newPassword;
    }

    public PasswordRequestDTO(String oldPassword, String newPassword) {
        this.oldPassword = oldPassword;
        this.newPassword = newPassword;
    }

    public PasswordRequestDTO() {
    }

    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
