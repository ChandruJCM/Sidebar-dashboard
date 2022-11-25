import React, { useState } from "react";
import { Button, Modal } from "antd";
//import { useForm } from "react-hook-form";

const Modalpop = ({formDetails,errors,onChange,handleSubmit,clear}) => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        className="btn btn-success mt-3 "
        onClick={() => setOpen(true)}
      >
        Create Employee
      </Button>
      <Modal
        title="Enter Employee Details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={850}
      >
        <div className="m-auto p-2 bg-dark d-flex  text-dark">
          
            <div className="col-6 w-50 pe-1 text-light d-flex flex-column">
                <label className="pt-3">First Name :</label>
          <input className="mt-2 w-100 "
                  type={"text"}
                  name="firstName"
                  value={formDetails.firstName}
                  onChange={onChange}
                  placeholder="First Name"
                />
                <p className="text-danger">{errors.lastName}</p>
                <label>Last Name :</label>
                <input
                  className="mt-2 w-100"
                  type={"text"}
                  name="lastName"
                  value={formDetails.lastName}
                  onChange={onChange}
                  placeholder="Last Name"
                />
                 <p className="text-danger">{errors.user}</p>
                <label>User Name :</label>
                <input
                  className="mt-2 w-100 "
                  type={"text"}
                  value={formDetails.user}
                  name="username"
                  onChange={onChange}
                  placeholder="Enter User Name"
                />
                 <p className="text-danger">{errors.email}</p>
                <label>Email :</label>
                <input
                  className="mt-2 w-100 "
                  type={"text"}
                  value={formDetails.email}
                  name="email"
                  onChange={onChange}
                  placeholder="Enter Email"
                />
                </div>
                <div className="col-6 mb-3 text-light d-flex flex-column">
                <p className="text-danger">{errors.mobile}</p>
                <label>Mobile Number :</label>
                <input
                  className="mt-2 w-100 "
                  type={"Number"}
                  value={formDetails.mobile}
                  name="mobile"
                  onChange={onChange}
                  placeholder="Enter Mobile Number"
                />
                <p className="text-danger">{errors.address}</p>
                <label>Address :</label>
                <input
                  className="mt-2 w-100 "
                  type={"text"}
                  value={formDetails.address}
                  name="address"
                  onChange={onChange}
                  placeholder="Enter Address"
                />
                <p className="text-danger">{errors.city}</p>
                <label>City :</label>
                <input
                  className="mt-2 w-100 "
                  type={"text"}
                  value={formDetails.city}
                  name="city"
                  onChange={onChange}
                  placeholder="Enter City"
                />
                <p className="text-danger">{errors.state}</p>
                <label>State :</label>
                <input
                  className="mt-2 w-100 "
                  type={"Text"}
                  value={formDetails.state}
                  name="state"
                  onChange={onChange}
                  placeholder="Enter State"
                />
               </div>
            </div>
            <div className="mt-2">
                <Button className="submit pb-1 btn btn-primary" onClick={()=>handleSubmit()}>
                  Submit
                </Button>
                <Button className="reset" onClick={clear}>
                  Reset
                </Button>
                </div>
      </Modal>
    </>
  );
};

export default Modalpop;
