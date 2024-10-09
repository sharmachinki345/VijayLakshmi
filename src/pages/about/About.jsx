import React from "react";
import { assets } from "../../assets/assets";
import Director from "../../components/Director";
import Vision from "../../components/Vision";
import Mission from "../../components/Mission";

const About = () => {
  return (
    <>
      {/* <Director></Director> */}
      <section className="flex flex-col items-center py-16 min-h-screen bg-[#f7aa68] md:px-10 lg:px-20">
        <h1 className="text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-semibold ">
          About Us
        </h1>
        <div className="grid md:grid-cols-2  my-10 gap-8">
          <div className="flex flex-col justify-between text-[#2F2F2F] px-3 font-medium text-justify">
            <p>
              Vijaylaxmi Roadlinks is formed by Mr. Kishan Laxman Navale with the Intention to provide
              all travel solutions in corporate level as well as mass transport.
              With their continual efforts vijaylaxmi Roadlinks has become Maharashtra's
              foremost provider of corporate level Travel and Transport service provider.


            </p>
            <p>
              We have may of Pune's leading corporate and BPO's as our clients.
              In the past 10 years we have transformed the travel / transport process using
              technology to create leading edge approach, virtually removing paper from our internal
              operations, optimum utilization of kms and controlling per fit cost, delivering services of
              acceptable quality.
            </p>
            <p>
              We are recognized for tailoring our technology and systems and process to match
              our client's needs. We always work as an extended arm of our client's admin team with total
              transparency.
              This in turn helps our customers to relax and use their resources and time to many
              other important jobs.
            </p>
          </div>
          <div className="px-6">
            <div className="bg-white rounded-3xl overflow-hidden object-contain">
              <img src={assets.appointment_img} className="" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <Vision></Vision>
      <Mission></Mission> */}
    </>
  );
};

export default About;
