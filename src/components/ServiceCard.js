import React from "react";

const ServiceCard = ({ title, description }) => (
  <div className="p-4 border rounded shadow hover:shadow-lg">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
