package ba.edu.ibu.fitnesstracker.rest.dto;

import lombok.Builder;

@Builder
public class LoginDTO {
    private String jwt;

    public LoginDTO() {
    }

    public LoginDTO(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
