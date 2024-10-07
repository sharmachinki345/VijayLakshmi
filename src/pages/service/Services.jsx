import React from "react";
import { assets } from "../../assets/assets";

const Services = () => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "end",
    padding: "20px",

    backgroundColor: "transparent",
  };

  const numberStyle = {
    fontSize: "300px",

    color: "#0000004D",
    fontWeight: "800",
    position: "absolute",

    top: "-10%",
  };

  const titleStyle = {
    fontSize: "1.6rem",
    textAlign: "center",
    color: "#2F2F2F",
    fontWeight: "bold",
    padding: "1rem 0",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#2F2F2F",
    textAlign: "center",
    fontWeight: "600",
  };

  const services = [
    {
      id: "01",
      numberImg: assets.numberimg1,
      title: "Crane On Rent",
      description:
        "Our crane rental services offer reliable and efficient lifting solutions for construction and industrial projects. With flexible rental options and certified operators, we ensure safe and timely execution to meet your specific needs.",
      image: assets.Service1,
    },
    {
      id: "02",
      numberImg: assets.numberimg2,
      title: "Close Container Towing Service",
      description:
        "Our close container towing service provides safe, reliable transportation with timely delivery. With experienced drivers and well-maintained equipment, we ensure hassle-free logistics for your containers.",
      image: assets.Service2,
    },
    {
      id: "03",
      numberImg: assets.numberimg3,
      title: "Mini Cranes on Hire",
      description:
        "Our mini cranes on hire offer compact, versatile lifting solutions for tight spaces and precise operations. Ideal for both construction and industrial projects, they provide efficiency without compromising on safety.",
      image: assets.Service3,
    },
    {
      id: "04",
      numberImg: assets.numberimg4,
      title: "Bucket Cranes on Hire",
      description:
        "Our bucket cranes on hire provide safe and efficient access for elevated tasks like maintenance, repairs, and construction. With flexible rental options, they ensure reliability and precision for hard-to-reach areas.", image: assets.Service4,
    },
    {
      id: "05",
      numberImg: assets.numberimg5,
      title: "Mobile Crane on Hire",
      description:
        "Our mobile cranes on hire offer flexible, powerful lifting solutions for various projects, from construction to industrial tasks. With easy mobility and expert operators, we ensure safe and efficient operations at any site.",
      image: assets.Service5,
    },
    {
      id: "06",
      numberImg: assets.numberimg6,
      title: "Material Lifting Cranes",
      description:
        "Our material lifting cranes provide reliable solutions for transporting heavy loads with ease and precision. Designed for efficiency, they are ideal for construction sites and industrial applications, ensuring safety and productivity.", image: assets.Service6,
    },
    {
      id: "07",
      numberImg: assets.numberimg7,
      title: "Flatbed Towing Services",
      description:
        "Our flatbed towing services offer secure and efficient transportation for vehicles of all sizes, ensuring they are safely loaded and delivered. With experienced operators and reliable equipment, we guarantee prompt service to meet your towing needs.",
      image: assets.Service7,
    },
    {
      id: "08",
      numberImg: assets.numberimg8,
      title: "Sky lift Cranes on Hire",
      description:
        "Our sky lift cranes on hire provide safe and efficient access to elevated work areas, perfect for construction and maintenance tasks. With user-friendly controls and reliable performance, they ensure productivity while prioritizing safety.", image: assets.Service8,
    },
    {
      id: "09",
      numberImg: assets.numberimg9,
      title: "Towing Services",
      description:
        "Our towing services deliver prompt and reliable assistance for vehicles in need, ensuring safe transport to your desired location. With experienced drivers and well-equipped trucks, we prioritize your peace of mind during every tow.",
      image: assets.Service9,
    },
    {
      id: "10",
      numberImg: assets.numberimg10,
      title: "Manlift Cranes on Hire",
      description:
        "Our manlift cranes on hire offer safe and efficient access for workers in elevated positions, ideal for construction and maintenance projects. With easy maneuverability and robust safety features, they enhance productivity while ensuring worker safety.", image: assets.Service10,
    },
  ];
  return (
    <div className="flex flex-col items-center py-16 min-h-screen bg-[#FFF6E0] md:px-10 lg:px-20">
      <h1 className="text-[#2F2F2F] text-3xl md:text-4xl lg:text-5xl  font-semibold ">
        Services
      </h1>
      {services.map((service, index) => (
        <>
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 my-8  w-full"
          >
            <img
              src={service.image}
              className={`w-auto h-[290px] md:h-[420px] mx-auto ${index % 2 && "md:col-start-2 md:col-end-3"
                }`}
              alt=""
            />
            <div
              style={cardStyle}
              className={`mx-auto relative px-0 ${index % 2 &&
                "md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2"
                }`}
            >
              {/* <h1 style={numberStyle} className="sm:text-[200px]">{service.id}</h1> */}
              <img src={service.numberImg} alt="" />
              <div className="">
                <div style={titleStyle}>{service.title}</div>
                <p style={descriptionStyle}>{service.description}</p>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Services;
