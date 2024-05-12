package com.example.api.domain.user;

public record UserRegistrationDTO(String firstName, String lastName, String email, String password, String avatar) {
}
