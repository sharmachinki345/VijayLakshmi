import React from 'react';
import './Contact.css'; // Create and import your CSS file for custom styles
import { assets } from '../../assets/assets';
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='main'>
      <p className=" text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold mb-3 mx-2 text-center">We’d love to hear from you</p>
      <p className='mx-2 text-center'>You’re curious about Services? — we’re ready to answer any and all questions.</p>
      <div className="cmain " id="cmain1">
        {/* FORM starts here */}
        <div className="form1 lg:px-8">
          {/* <h1 id="thirdtext">Tell us how we can help</h1> */}
          <form action="#">
            <div className="input1">
              <label htmlFor="name">Name:</label>
              <input type="text"  id="name" name="name" required />
            </div>
            <div className="input1">
              <label htmlFor="email">Email:</label>
              <input type="email"  id="email" name="email" required />
            </div>
            <div className="input1">
              <label htmlFor="phone">Mobile Number:</label>
              <input type="text" placeholder="" id="phone" name="phone" required />
            </div>
            {/* <label htmlFor="location">Location:</label> */}
            {/* Add a new label for the select menu */}
            {/* <select id="location" name="location">
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option> */}
              {/* Add more options as needed */}
            {/* </select> */}
            <div className="input1">
              <label htmlFor="message">Message/Comment:</label>
              <textarea id="message" name="message" required></textarea>
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
      <div className='bg-[#FFF6E0] w-full py-12'>
      <p className=" text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold mb-3 mx-2 text-center">Check out our Dig</p>
      <p className='mx-2 text-center'>Home is where your wifi connects automatically. Here’s where ours does. <br /> Give us a call—or better yet—drop into our headquarters to say hi in person.</p>
      <div className='border-4 border-[#000DFF80] w-[80%] h-[80%] mx-auto my-8 rounded-2xl overflow-hidden'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.2826366410845!2d88.42874067515284!3d22.64324837944148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f9e94957211%3A0x7aa05d6667840de0!2sSeven%20Senses%20Integration%20Centre!5e0!3m2!1sen!2sin!4v1726475422835!5m2!1sen!2sin" width="100%" height="450" style={{border: "0px",}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className='w-[80%] mx-auto flex flex-col sm:flex-row gap-12 justify-between'>
        <div className="card1">
          <h1 className='text-[#2F2F2F] text-3xl md:text-3xl lg:text-4xl  font-semibold'>Kolkata</h1>
          <p className='text-xl my-2'>2 No. Motilal Colony,<br /> Majumdar Para,<br />
          Near 1 No. Airport,<br /> Kolkata - 79</p>
        </div>
        <div className="card1">
          <p className='text-[#2F2F2F] text-xl '><BiSolidPhoneCall className='text-3xl md:text-3xl lg:text-4xl  font-semibold inline' /> 6291774981 / 8961404458</p>
          <p className='text-[#2F2F2F] text-xl my-2'><MdEmail className='text-3xl md:text-3xl lg:text-4xl  font-semibold inline' /> xyz@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
