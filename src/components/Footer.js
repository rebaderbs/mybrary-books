import { React } from "react";

function Footer () {
    return (
        <footer class="d-flex flex-wrap justify-content-end align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <span class="mb-3 mb-md-0 text-body-secondary">© Derbak Designs</span>
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                <img class="logo" src="books.png" alt="Mybrary Books" width="75" height="75" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;