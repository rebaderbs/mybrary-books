package io.derbakdesigns.mybrarybooks.models.dto;



import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegisterFormDTO extends LoginFormDTO{

    @NotNull
    @NotBlank(message = "Last name is required")
    private String lastName;

    @NotNull
    @NotBlank(message = "First name is required")
    private String firstName;

    @NotNull
    @NotBlank(message = "Please verify your password")
    private String verifyPassword;

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getVerifyPassword() {
        return verifyPassword;
    }

    public void setVerifyPassword(String verifyPassword) {
        this.verifyPassword = verifyPassword;
    }
}
