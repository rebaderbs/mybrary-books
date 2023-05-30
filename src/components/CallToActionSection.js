import { React } from "react";
import { Button } from "react-bootstrap";

function CallToActionSection () {
    return (
        <div class="container-fluid text-center">
            <p class="lead">This is the call to action section</p>
            <Button>Sign Up</Button>
            <Button>Login</Button>

        </div>
    );
}

export default CallToActionSection;