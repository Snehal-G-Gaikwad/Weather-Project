import React from "react";
import "./ContactUS.css";
const ContactUS = () => {
  const style = {
    color: "black",
  };
  return (
    <div className="text-center">
      <h1 className="display-2 m-5 p-2">Contact with US</h1>
      <h1>
        Email me at{" "}
        <a href="mailto:snehalgaikwad47054@gmail.com">
          snehalgaikwad47054@gmail.com
        </a>
      </h1>
      <h1>Phone: +91/1234567890</h1>
      <p>Ch. Sambhajinagar, Maharashtra</p>
    </div>
  );
};

export default ContactUS;
