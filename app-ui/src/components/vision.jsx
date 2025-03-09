import React from "react";
import boyStudy from './img/boyStudy.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

const VisionPage = () => {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h2 className="display-4 text-primary text-center mb-5">
                        <span style ={{marginTop: "10%", color: "#FFB433"}} className="fw-bold">Our Vision Statement:</span>
                    </h2>
                    <div className="h-100 d-flex justify-content-center align-items-center">
                        <img
                            src={boyStudy}
                            alt="Vision"
                            className="img-fluid rounded"
                            style={{objectFit: "cover", height: "100%", marginRight: "10%", marginTop: "5%"}}
                        />
                    </div>
                </div>
                <div className="col-md-6" style={{padding: "0 1%"}}>
                    <div className="d-flex flex-column justify-content-center h-100">
                        <h2 className="display-4 mb-4" style={{fontSize: "2rem", color: "#98D2C0", fontWeight: "bold"}}>
                            A Future Where No Child is Left Behind
                        </h2>
                        <p className="lead mb-4">
                            We envision a world <strong>where every child, regardless of geography or
                            economic status, has equal access to technology and the knowledge
                            to use it</strong>. At the TiC Foundation, we are not just teaching children
                            how to use computers—we are opening doors to innovation,
                            entrepreneurship, and global opportunities.
                        </p>
                        <p className="lead mb-4">
                            We dream of classrooms filled with laptops instead of limitations,
                            coding instead of chalkboards, and possibilities instead of poverty.
                            Our goal is to create a movement—one that transforms education in
                            underserved communities and ensures that no child grows up without
                            the skills needed to thrive in the digital era.
                        </p>
                        <p className="lead mb-4">
                            With your support, we can make this vision a reality.
                        </p>
                        <button className="btn btn-lg btn-primary" style={{width: "200px", marginLeft: "20%"}}>Donate
                            Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionPage;