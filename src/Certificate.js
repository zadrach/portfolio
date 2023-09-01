import React from 'react';
import './styles/Certificate.css'; // Import your CSS file

function Certificate() {
  return (
    <div className="background-certificate">
      <div className="certificates-container">
        <div className="ceertificates">
          <div className="certificates-wrapper">
            <div className="certificate">
              <img className="cert-image" src={process.env.PUBLIC_URL + '/uploads/Cyber.jpg'} alt="" />
              <p className="cert-name">Cyber Security</p>
            </div>
            <div className="certificate">
              <img className="cert-image" src={process.env.PUBLIC_URL + '/uploads/EnterNet.jpg'} alt="" />
              <p className="cert-name">React</p>
            </div>
            <div className="certificate">
              <img className="cert-image" src={process.env.PUBLIC_URL + '/uploads/DevNet.jpg'} alt="" />
              <p className="cert-name">CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
