import React from "react";
import Carousel from "../components/Carousel";
import "../styles/home.css";
import GrabCarousel from "../components/GrabCarousel";
// import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <div className="mx-auto text-center">
      {/* <h2 className="text-4xl font-bold mb-4">Welcome to CA Consultant</h2> */}
      <Carousel />
      {/* <p className="text-lg mb-6">
        Your trusted partner for financial solutions and compliance services.
      </p>
      <Link
        to="/services"
        className="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        Explore Services
      </Link> */}
    </div>

    {/* services section */}
    <div className="container mx-auto px-4 py-8 services d-flex mx-auto mt-4 mb-4 justify-content-center align-items-center flex-wrap">
      <div className="single-service-one">
        <div className="single-service">
          <div className="service-image">
            <img src="/images/s1.jpg" alt="service" />
          </div>
          <div className="service-content">
            <h3>
              <a href="">Company Registration Services</a>
            </h3>
            <p className="text-justify">
              MKDA is a one-stop-firm for all your company registration services
              in Bangalore. Our straightforward process makes it easy to get
              your business up and running as quickly as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="single-service-one">
        <div className="single-service">
          <div className="service-image">
            <img src="/images/s2.png" alt="service" />
          </div>
          <div className="service-content">
            <h3>
              <a href="#">Compliance and Legal Services</a>
            </h3>
            <p className="text-justify">
              Compliance and legal services are an important part of doing
              business. We at MKDA help YOU with everything from developing
              compliance policies to auditing your business processes to making
              sure you're staying on top of all the latest regulations.
            </p>
          </div>
        </div>
      </div>
      <div className="single-service-one">
        <div className="single-service">
          <div className="service-image">
            <img src="/images/s3.jpg" alt="service" />
          </div>
          <div className="service-content">
            <h3>
              <a href="#">Outsourcing CFO Services </a>
            </h3>
            <p className="text-justify">
              Are you looking to reduce costs and maintain a high level of
              quality control? You can
              <b>
                <a href="https://camanojkumar.com/outsource-accounting-services-bangalore.php">
                  {" "}
                  outsource your accounting{" "}
                </a>
              </b>
              .and finance needs to top-notch professionals at MKDA. Our
              services help your business grow and succeed while keeping your
              finances in order.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Values section */}
    <div className="about-one-area">
      <div className="container about-div mx-auto">
        <div>
          <div className="about-image">
            <img src="/images/value-01.png" alt="about" />
          </div>
        </div>
        <div>
          <div className="about-content-center">
            <div className="about-content">
              <h2>Value Proposition</h2>
              <ul className="text-justify" style={{ listStyle: "disc" }}>
                <li>
                  <p className="text-justify">
                    Our young and professional team understands the present-day
                    requirements and provides the expertise required in each
                    area.
                  </p>
                </li>
                <li>
                  <p className="text-justify">
                    We have a dedicated team for each area of services,
                    delivering quality and timely service.{" "}
                  </p>
                </li>
                <li>
                  <p className="text-justify">
                    Our service delivery model is based on client value addition
                    and client satisfaction.
                  </p>
                </li>
                <li>
                  <p className="text-justify">
                    We provide various statutory compliance services under one
                    umbrella, making them cost-effective for our clients.
                  </p>
                </li>
                <li>
                  <p className="text-justify">
                    We adopt the latest technology in service delivery to ensure
                    quality service.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* industry section */}
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6">Industries We Deal With</h2>
      <GrabCarousel />
    </div>
  </div>
);

export default Home;
