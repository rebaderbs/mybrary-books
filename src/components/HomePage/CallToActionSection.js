import { React } from "react";
// import { Button } from "react-bootstrap";
import { VStack, Button, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";



function CallToActionSection () {

    return (
      <VStack spacing={8} p={16}>
        <div className="px-4 py-5 my-5 text-center">
        {/* <h1 class="display-5 fw-bold text-body-emphasis">Centered hero</h1> */}
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">This is the call to action section</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Button colorScheme='black' variant='outline'>
          <Link style={{textDecoration:"none"}} color="primary.light" href="/signup" className="nav-link">Sign Up</Link>
          </Button>
          <Button colorScheme='black' variant='outline'>
          <Link style={{textDecoration:"none"}} color="primary.light" href="/login" className="nav-link">Login</Link>
          </Button>
          </div>
        </div>
      </div>
      </VStack>
    );
}

export default CallToActionSection;