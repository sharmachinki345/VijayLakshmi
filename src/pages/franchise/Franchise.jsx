import React from 'react'
import { assets } from '../../assets/assets'
const Franchise = () => {
  return (
    <div className='main'>
      <p className=" text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-bold mb-3 mx-2 text-center">Franchise</p>
      {/* <p className='mx-2 text-center'>You’re curious about Services? — we’re ready to answer any and all questions.</p> */}
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
            <div className="input1">
              <label htmlFor="phone">Last Educational Qualification *</label>
              <input type="text" placeholder="" id="leq" name="leq" required />
            </div>
            <div className="input1">
              <label htmlFor="phone">Centre Locality Name *</label>
              <input type="text" placeholder="" id="cln" name="cln" required />
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
              <label htmlFor="address">Full Address:</label>
              <textarea id="address" name="address" required></textarea>
            </div>
            <div className="input1">
              <label htmlFor="message">Message/Comment:</label>
              <textarea id="message" name="message" required></textarea>
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
  )
}

export default Franchise