import React from "react";
import girlStudy from './img/girlStudy.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

const MissionPage = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="display-4 text-primary text-center mb-5">
                        <span style={{marginTop: "5%", color: "#FFB433"}} className="fw-bold">Mission Statement:</span>
                    </h2>
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <img
                            src={girlStudy}
                            alt="Mission"
                            className="img-fluid rounded"
                            style={{objectFit: "cover", height: "120%", marginRight: "10%", marginTop: "5%"}}
                        />
                    </div>
                </div>
                <div className="col-md-6" style={{padding: "0 1%"}}>
                    <div className="d-flex flex-column justify-content-center h-100" style={{padding: "0 5%"}}>
                        <h2 className="display-4 mb-4" style={{fontSize: "2rem", color: "#98D2C0", fontWeight: "bold"}}>
                            Empowering Young Minds, Transforming Futures
                        </h2>
                        <p className="lead mb-4">
                            At the TiC Foundation, we believe that education is power—and in today’s world,
                            digital literacy is the key to unlocking endless opportunities.
                            Our mission is to break down barriers and ensure that every child,
                            regardless of their background or location, has access to quality computer education.
                        </p>
                        <p className="lead mb-4">
                            We go beyond simply introducing computers into classrooms—we ignite curiosity, inspire innovation,
                            and equip children with real-world digital skills that will shape their futures.
                            Through hands-on learning, mentorship, and community-driven initiatives,
                            we are building a world where every child has the tools to dream, create, and thrive in the digital age.
                        </p>
                        <p className="lead mb-4">
                            Join us in empowering the next generation—because when we invest in young minds,
                            we invest in a brighter, more connected future.
                        </p>
                        <p className="lead mb-4">
                            Together, we can bridge the digital divide.
                        </p>
                        <button className="btn btn-lg btn-primary" style={{width: "200px", marginLeft: "20%"}}>Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionPage;