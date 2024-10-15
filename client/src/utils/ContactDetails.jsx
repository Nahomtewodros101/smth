import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactDetails = () => {
  return (
    <section>
      <h1 className="font-bold text-5xl mx-[7rem]">Get in Touch</h1>
      <div className="bg-white rounded-xl shadow-lg p-3 m-3  max-w-lg w-full">
        <p className="text-gray-700 mb-4">
          With Todays Technology Getting-in-touch Has Never Been Easier... So
          Please Do Reach Us.
        </p>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-gray-600 mr-2 "
          />
          <span className="text-gray-600">Address: Addis Ababa: Ethiopia</span>
        </div>

        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faPhone} className="text-gray-600 mr-2 " />
          <span className="text-gray-600">Telephone: +2511-234-5678</span>
        </div>

        <div className="flex items-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 mr-2 " />
          <span className="text-gray-600">Email: support@chefche.com</span>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
