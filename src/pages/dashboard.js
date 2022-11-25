//import Item from "antd/es/list/Item";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar.js";
import Modal from "./modal.js";
import data from "../Data/data.js";


function Dashboard() {
  const [search, setSearch] = useState("");

  const [formDetails, setFormDetails] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
  });
  
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);

  const onChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const Validation = (formDetails) => {
    let errors = {};
    let errValues = Object.keys(formDetails);
    console.log(errValues);

    errValues.map((val) => {
      if (formDetails[val] === "") {
        errors[val] = "*This field is required";
        setShow(false);
      } else {
        setShow(true);
      }
      return errors;
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(formDetails));

    setList((item) => [...item, formDetails]);
    console.log("data", list);
  };

  const clear = (e) => {
    e.preventDefault();
    setFormDetails({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      mobile: "",
      address: "",
      city: "",
      state: "",
      
    });
  };
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // let navigate = useNavigate();
  // // // const navi2 = () => {
  // // //   navigate("/dashboard");
  // // };
  return (
    <div className="d-flex ">
      <Sidebar />

      <div className=" bg-dark container-fluid text-light d-flex flex-column ">
        <div className="d-flex ">
          <div className="d-flex w-50 mt-3">
            <h3>Dashboard page</h3>
          </div>

        
           <Modal
             formDetails={formDetails} 
             onChange={onChange}
             errors={errors}
             handleSubmit={handleSubmit}
             clear={clear}
           
           />
           
         


          <div className="d-flex mt-3 w-50 justify-content-end">
           
            <form className="d-flex " role="search">
              <input
                className="form-control h3 ms-2 me-2"
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              
            </form>
          </div>
        </div>
        <div className="d-flex flex-column text-center">
          <div className="bg-dark  text-center">
            <p className="text-light h5 ms-4 text-start">User Information</p>
            <div className="nav-item dropdown d-inline-flex float-end me-5 ">
              <a href="/search"
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Search by
              </a>
              <ul className="dropdown-menu">
                <li>
                  
                   {/* <input type="Search" name= "City" placeholder="City">
                   onChange={(e) => setsearch(e.target.value)}
                   {data
                    .filter((item) => {
                      return search.toLocaleLowerCase() === ""
                        ? item
                        : (item.City.toLocaleLowerCase().includes(search))}
                    )
                    .map((item) => ({item,City}))}
                    </input> */}
                      
                  
                </li>
                <li>
                  
                  <input type="text" name= "State" placeholder="State"
                  onChange={(e) => setSearch(e.target.value)}/>
                  
                </li>
              </ul>
            </div>
          </div>
          <table className="table text-light">
            <thead>
              <tr>
                <th scope="col">First Name </th>
                <th scope="col">Last Name </th>
                {/* <th scope="col">User Name </th> */}
                <th scope="col">Mail ID</th>
                <th scope="col">Mobile Number</th>
                {/* <th scope="col">Address</th> */}
                <th scope="col">City</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : (item.User_Name.toLocaleLowerCase().includes(search));
                })
                .map((item) => (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.User_Name}</td>
                    <td>{item.Mail_ID}</td>
                    <td>{item.Mobile_Number}</td>
                    <td>{item.City}</td>
                    <td>{item.State}</td>
                  </tr>
                ))}

                {/* {list
                .filter((item) => {
                  return search.toLocaleLowerCase() === ""
                    ? item
                    : (item.firstName.toLocaleLowerCase().includes(search),
                      item.mobile.toLocaleLowerCase().includes(search),
                      item.email.toLocaleLowerCase().includes(search));
                }).map((data)=>(
                   <tr>
                   <th scope="row">{data.firstName}</th>
                   <td>{data.lastName}</td>
                   <td>{data.username}</td>
                   <td>{data.email}</td>
                   <td>{data.mobile}</td>
                   <td>{data.address}</td>
                   <td>{data.city}</td>
                   <td>{data.state}</td>
                 </tr>
                ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
