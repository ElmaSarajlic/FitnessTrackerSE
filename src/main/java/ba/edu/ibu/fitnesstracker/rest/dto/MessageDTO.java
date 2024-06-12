package ba.edu.ibu.fitnesstracker.rest.dto;

import lombok.Builder;

@Builder
public class MessageDTO {
    private String message;

    public MessageDTO() {}


    public MessageDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}

