import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    { title: "Tax Filing", description: "Hassle-free tax filing solutions." },
    { title: "GST Compliance", description: "Complete GST services and support." },
    { title: "Auditing", description: "Comprehensive audit reports." },
    { title: "Advisory", description: "Tailored business consultancy." },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-primary">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
