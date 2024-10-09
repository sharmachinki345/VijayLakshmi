import React, { useState } from "react";
import "./Contact.css"; // Create and import your CSS file for custom styles
import { assets } from "../../assets/assets";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const [inputs, setinputs] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

  };
  return (
    <div className="main" style={{backgroundColor:"#ffccb3"}}>
      <p className=" text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold mb-3 mx-2 text-center pt-4">
        Let's Connect, Collaborate
      </p>
      <p className="mx-2 text-center mb-5">
        You’re curious about Services? — we’re ready to answer any and all
        questions.
      </p>
      <div className="bg-slate-200" id="cmain1">
        {/* FORM starts here */}
        <div className="form1 lg:px-8">
          {/* <h1 id="thirdtext">Tell us how we can help</h1> */}
          <form onSubmit={handleSubmit}>
            <div className="input1">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={inputs.Name}
                onChange={(e) => {
                  setinputs({ ...inputs, Name: e.target.value });
                }}
                required
              />
            </div>
            <div className="input1">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={inputs.Email}
                onChange={(e) => {
                  setinputs({ ...inputs, Email: e.target.value });
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
                value={inputs.Phone}
                onChange={(e) => {
                  setinputs({ ...inputs, Phone: e.target.value });
                }}
                required
              />
            </div>

            <div className="input1">
              <label htmlFor="message">Message/Comment:</label>
              <textarea
                id="message"
                value={inputs.Message}
                onChange={(e) => {
                  setinputs({ ...inputs, Message: e.target.value });
                }}
                required
              ></textarea>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
        {/* image starts here */}
        <div className="contact flex flex-col justify-center items-center">
          <img id="image" src={assets.contactus} alt="" />
        </div>
      </div>
      {/* =====form ends here===== */}

      {/* =====location start here===== */}
      <div className="bg-[#FFF6E0] w-full py-12">
        <p className=" text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold mb-3 mx-2 text-center">
          Check out our Dig
        </p>
        <p className="mx-2 text-center">
          Home is where your wifi connects automatically. Here’s where ours
          does. <br /> Give us a call—or better yet—drop into our headquarters
          to say hi in person.
        </p>
        <div className="border-4 border-[#000000fd] w-[80%] h-[80%] mx-auto my-8 rounded-2xl overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=gate+No.+1328+%2C+Anusuya+Park%2C+Kamalbag+Society%2C++Wagholi%2C+Pune-412207&t=&z=13&ie=UTF8&iwloc=&output=embed"
             width="100%"
            height="450"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-[80%] mx-auto flex flex-col sm:flex-row gap-12 justify-between">
          <div className="card1">
            <h1 className="text-[#2F2F2F] text-3xl md:text-3xl lg:text-4xl  font-semibold">
              Pune
            </h1>
            <p className="text-xl my-2">
              Gate No. 1328 ,
              <br /> Anusuya Park, Kamalbag Society,
              <br />
              Wagholi, Pune-412207
            </p>
          </div>
          <div className="card1">
            <p className="text-[#2F2F2F] text-xl ">
              <BiSolidPhoneCall className="text-3xl md:text-3xl lg:text-4xl  font-semibold inline" />{" "}
              9850899633 / 9049688770
            </p>
            <p className="text-[#2F2F2F] text-xl my-2">
              <MdEmail className="text-3xl md:text-3xl lg:text-4xl  font-semibold inline" />{" "}
              vijaylaxmi.grup1@gmail.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
