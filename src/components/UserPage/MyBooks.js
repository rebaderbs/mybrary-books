import React from "react";
import UserHeader from "./UserHeader";
import { Card } from "react-bootstrap";

function MyBooks() {
    return (
        <>
        <UserHeader />
        <div className="container-flex">
            <Card        display="grid" 
       gridTemplateColumns="repeat(2,minmax(0,1fr))" 
       gridGap={8} >
            <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-primary">Remove</a>
                </div>
            </Card>
            <div className="card col-3">
                <img src="..." className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-primary">Remove</a>
                </div>
            </div>
            <div className="card col-3">
                <img src="..." className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-primary">Remove</a>
                </div>
            </div>
            <div className="card col-3">
                <img src="..." className="card-img-top" alt="..." />

                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View</a>
                    <a href="#" className="btn btn-primary">Remove</a>
                </div>
            </div>
            </div>
        </>
    );
}

export default MyBooks;