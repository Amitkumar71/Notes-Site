import React, { useEffect, useState } from "react";
import "./home.css";
import NotesData from "../Notes/NotesData";
import pdfFile from "../PDF's/Amit Resume.pdf";

function Menu() {
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewPdf = () => {
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setShowPdf(false);
  };

  return (
    <>
      <div className="notes">
        {NotesData.map((note, index) => (
          <div className="card" key={index}>
            <img src={note.photu.images} alt="photu" className="card-img" />
            <h2 className="card-heading">{note.heading}</h2>
            <button onClick={handleViewPdf}>View Notes</button>
          </div>
        ))}

        {showPdf && (
          <div className="pdf-container">
            <button className="close-btn" onClick={handleClosePdf}>
              Close
            </button>
            <iframe src={pdfFile} title="PDF Viewer" className="pdf-frame"></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
