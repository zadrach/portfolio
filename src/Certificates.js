import React from "react";
import { Document, Page } from "react-pdf";

const Certificates = () => {
  const certificatesData = [
    {
      name: "Certificate 2",
      pdfLink: "./uploads/IntroNetworks.pdf",
    },
    {
      name: "Certificate 2",
      pdfLink: "/IntroNetworks.pdf", // Assuming the PDF is in the public directory
    },
    // Add more certificate objects as needed
  ];

  return (
    <div>
      <h2>Certificates</h2>
      {certificatesData.map((certificate, index) => (
        <div key={index}>
          <h3>{certificate.name}</h3>
          <a href={certificate.pdfLink} target="_blank" rel="noopener noreferrer">
            View Certificate
          </a>
          <div>
            <Document file={certificate.pdfLink}>
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certificates;
