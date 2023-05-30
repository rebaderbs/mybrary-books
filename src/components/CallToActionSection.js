import { React } from "react";
import { Button } from "react-bootstrap";

function CallToActionSection () {
    return (
        <div class="px-4 py-5 my-5 text-center">
        {/* <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1> */}
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">This is the call to action section</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Button>Sign Up</Button>
            <Button>Login</Button>
          </div>
        </div>
      </div>
    );
}

export default CallToActionSection;