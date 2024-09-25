import React, { useState } from "react";
import { assets } from "../../assets/assets";
const Franchise = () => {
  const [inputsFranchise, setinputsFranchise] = useState({
    Name: "",
    Email: "",
    Phone: "",
    LastEdu: "",
    CentLocal: "",
    Address: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputsFranchise);
  };

  return (
    <div className="main">
      <p className=" text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold mb-3 mx-2 text-center">
        Franchise
      </p>
      {/* <p className='mx-2 text-center'>You’re curious about Services? — we’re ready to answer any and all questions.</p> */}
      <div className="cmain " id="cmain1">
        {/* FORM starts here */}
        <div className="form1 lg:px-8">
          {/* <h1 id="thirdtext">Tell us how we can help</h1> */}
          <form onSubmit={handleSubmit}>
            <div className="input1">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={inputsFranchise.Name}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    Name: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="input1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={inputsFranchise.Email}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    Email: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="input1">
              <label htmlFor="phone">Mobile Number:</label>
              <input
                type="text"
                placeholder=""
                id="phone"
                value={inputsFranchise.Phone}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    Phone: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="input1">
              <label htmlFor="phone">Last Educational Qualification *</label>
              <input
                type="text"
                placeholder=""
                id="leq"
                value={inputsFranchise.LastEdu}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    LastEdu: e.target.value,
                  });
                }}
                required
              />
            </div>
            <div className="input1">
              <label htmlFor="phone">Centre Locality Name *</label>
              <input
                type="text"
                placeholder=""
                id="cln"
                value={inputsFranchise.CentLocal}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    CentLocal: e.target.value,
                  });
                }}
                required
              />
            </div>

            <div className="input1">
              <label htmlFor="address">Full Address:</label>
              <textarea
                id="address"
                value={inputsFranchise.Address}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    Address: e.target.value,
                  });
                }}
                required
              ></textarea>
            </div>
            <div className="input1">
              <label htmlFor="message">Message/Comment:</label>
              <textarea
                id="message"
                value={inputsFranchise.Message}
                onChange={(e) => {
                  setinputsFranchise({
                    ...inputsFranchise,
                    Message: e.target.value,
                  });
                }}
                required
              ></textarea>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
        {/* image starts here */}
        <div className="contact flex flex-col justify-center items-center">
          <img id="image" src={assets.franchiseImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Franchise;
