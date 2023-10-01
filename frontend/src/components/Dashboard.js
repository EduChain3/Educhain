  import { useEffect, useState } from "react";

  const Dashboard = () => {
    const [record, setRecord] = useState([]);

    const getData = () => {
      fetch("http://localhost:8000/api/student/0x96c05D6f34b8C4AE9C26adcD5Da2566617700A60")
        .then((resposne) => resposne.json())
        .then((res) => setRecord(res));
    };

    useEffect(() => {
      getData();
    });

    return (
      <div class="col main pt-5">
        <div class="row mt-3">
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h5 class="mt-3 mb-3 text-dark">
              Check More Records of Employees
            </h5>
            <div class="table-responsive">
              <table class="table table-striped">
                <table class="table table-striped">
                  <thead class="thead-light">
                    <tr>
                      <th style={{ backgroundColor: "#85b1d2" }}>No</th>
                      <th style={{ backgroundColor: "#85b1d2" }}>Courses/Events</th>
                      <th style={{ backgroundColor: "#85b1d2" }}>Organisation</th>
                      <th style={{ backgroundColor: "#85b1d2" }}>Start date</th>
                      <th style={{ backgroundColor: "#85b1d2" }}>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record.map((output, index) => (
                      <tr
                        key={output.id}
                        style={{
                          backgroundColor:
                            index % 2 === 0 ? "#c2d8e8" : "#aecbe1",
                        }}
                      >
                        <td>{output.JoinCode}</td>
                        <td>{output.Title}</td>
                        {/* <td>{output.email}</td> */}
                        {/* <td>{output.username}</td>
                        <td>{output.address.street}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </table>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-6">
            <div
              class="card  text-white h-95 "
              style={{
                height: "250px",
                marginLeft: "20px",
                marginTop: "54px",
                backgroundColor: "#498abc",
              }}
            >
              <div class="card-body ">
                <div class="rotate">
                  <i class="fa-solid fa-book-open-reader fa-2x"></i>
                </div>
                <h6 class="text-uppercase" style={{ marginTop: "20px" }}>
                  Total courses registered
                </h6>
                <h1 class="display-6">{record.length}</h1>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 col-sm-6">
            <div
              class="card text-white  "
              style={{
                height: "250px",
                marginLeft: "20px",
                marginTop: "54px",
                backgroundColor: "#498abc",
              }}
            >
              <div class="card-body ">
                <div class="rotate">
                  <i class="fa-regular fa-calendar-days fa-2x"></i>
                </div>
                <h6 class="text-uppercase" style={{ marginTop: "20px" }}>
                  Total events registered
                </h6>
                <h1 class="display-6">{record.length}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* </div> */}
        <hr />
      </div>
    );
  };

  export default Dashboard;
