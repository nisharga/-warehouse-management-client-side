import React from "react";
import "./Services.css";
import SingleService from "./SingleService/SingleService";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "dharmachakra",
      heading: "Software Development",
      post: " ADVANCE PCB PROGRAMMING TECHNOLOGY: It's advanced pcb programming technology ensures noiseless operation of Fan, Tv, Computer, Scanner, Normal Printer",
    },
    {
      id: 2,
      icon: "tasks",
      heading: "Porject Management",
      post: " HV-Battery Project Management · Full supply chain of HV-Battery Development · Potential customer value · Our expertise in detail · Further qualifications ",
    },
    {
      id: 3,
      icon: "recycle",
      heading: "Software Update",
      post: " Singweb ips machine must need every year update. User must be call our customer care. 120ah two battery u can u if u have 12amp IPS ",
    },
    {
      id: 4,
      icon: "headset",
      heading: "24/7 Support",
      post: "24 hours 7 days you can find us on +8801774655873. Web email for 1 day resposnse. Live chat instant replay ",
    },
  ];
  return (
    <section className="we-offer-area text-center bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="site-heading text-center">
              <h2 className="ServiceTitle">
                What we <span>Offer</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row our-offer-items less-carousel">
          {services.map((data) => (
            <SingleService key={data.id} data={data}></SingleService>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
