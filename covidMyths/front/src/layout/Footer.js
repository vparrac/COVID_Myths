import React from "react";
// import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <hr></hr>
        <h4>Covid-19 Symtoms <br></br>
        Icons made by {" "}
        <href to="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </href>{" "}
        from{" "}
        <href to="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </href></h4>
      </div>
    </div>
  );
};

// Footer.propTypes = {

// };

export default Footer;