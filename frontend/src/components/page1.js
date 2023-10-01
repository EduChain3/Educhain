import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import ReactStars from "react-rating-stars-component";
import "../CSS/coursePage.css";
const Page1 = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://backend-nft.onrender.com/api/classroom/all/classes")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
    console.log(record);
  };
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {/* <h3 className="text-center mt-5" style={{ fontFamily: "cursive" }}>
          Available Courses
        </h3> */}
      <div>
        <div className="text-center mt-5">
          <div
            className=""
            style={{
  
              fontWeight: "bolder",
              color: "black",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="p-2 heading">Available Courses</h3>
          </div>
        </div>
        <br />
        <br />

        {record.map((output, index) => 
        <div className="card ">
          <img
            className="card-img"
            // src="https://img-c.udemycdn.com/course/480x270/4872100_35d1_3.jpg"
            src={output.Image}
            alt="course 1"
          ></img>
          <div className="course-details">
            
          <div className="">
            <h4 className="card-heading">
            {output.Title}
              {/* Spring 6 & Spring Boot 3 for Beginners (Includes 5 Projects) */}

            </h4>
            <p className="course-desc">
              Spring Framework Core 6, Spring Boot 3, Spring Security 6, REST
              API, Spring MVC, Spring WebFlux, JPA, Thymeleaf, Docker
            </p>
            <p className="course-author">By Jack Bosma</p>
           
              <span className="other-detail">Updated September 2023</span>
              <span className="other-detail">34.5 Hrs</span>
              <span className="other-detail">Beginner</span>
            </div>
            <div id="price"> {output.Price} ETH</div>
            <a
                        href="#"
                        className="btn"
                        onClick={() => {
                          navigate(`/${output._id}/buy`);
                        }}
                      >
                        Register
                      </a>
          </div>
        </div>
     )}
        {/* <div class="row mb-4 mt-5 ">
          {record.map((output, index) => (
            <div style={{ marginLeft: "90px" }}>
              {console.log(output)}
              <div className="col mb-4">
                <div class="card" style={{ width: "15rem" }}>
                  <img
                    src={output.Image}
                    class="card-img-top"
                    alt="course image"
                    style={{ borderBottom: "2px solid black" }}
                  />
                  <div class="card-body">
                    <h5 class="card-title">{output.Title}</h5>
                    <p class="card-text">
                      {output.Details.length > 50
                        ? `${output.Details.slice(0, 50)}...`
                        : output.Details}
                    </p>
                    <p class="card-text">
                      <b> Creator: </b> Jack Bosma
                    </p>
                    <p className="card-text">
                      <b> Hours: </b>2
                    </p>
                    <p className="card-text">
                      <b> Rating: </b>4.2
                    </p>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => {
                          navigate(`/${output._id}/buy`);
                        }}
                      >
                        Register
                      </a>
                      <p
                        style={{
                          color: "#A0D8B3",
                          fontWeight: "bold",
                          marginRight: "10px",
                          marginLeft: "15px",
                          marginTop: "0",
                          marginBottom: "0",
                        }}
                      >
                        Price: {output.Price} eth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};
export default Page1;
