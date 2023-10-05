import React, { useEffect, useState } from "react";
import "./home.css";
// import {FaSearch} from "react-icons/fa";

function Menu() {
  const [showPdf, setShowPdf] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewPdf = (pdfPath) => {
    setSelectedPdf(pdfPath);
    setShowPdf(true);
  };

  const handleClosePdf = () => {
    setSelectedPdf(null);
    setShowPdf(false);
  };

  const NotesData = [
    {
      subject: "btech notes for ece",
      photu: require("../PDF's/ECE.png"),
      heading: "ECE",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "Btech notes cse",
      photu: require("../PDF's/Sep_01.png"),
      heading: "CSE",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes DBMS",
      photu: require("../PDF's/DBMS.jpg"),
      heading: "DBMS",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes networking",
      photu: require("../PDF's/networking.jpg"),
      heading: "Networking",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes Operating System",
      photu: require("../PDF's/operating-system.jpg"),
      heading: "Operating System",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes Cloud Computing",
      photu: require("../PDF's/cloud.png"),
      heading: "Cloud Computing",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes java",
      photu: require("../PDF's/Java-Logo.jpg"),
      heading: "Java",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes c++",
      photu: require("../PDF's/CC--.png"),
      heading: "C++",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },
    {
      subject: "bca notes software engineering",
      photu: require("../PDF's/SE.png"),
      heading: "Software Engineering",
      pdf: require("../PDF's/Amit Resume.pdf"),
    },

    ];

  const filteredNotes = NotesData.filter(note =>
    note.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder= "🔍Search subjects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="notes">
        {filteredNotes.map((note, index) => (
          <div className="card" key={index}>
            <img src={note.photu} alt={`Subject ${index}`} className="card-img" />
            <h2 className="card-heading">{note.heading}</h2>
            <button className="view-btn" onClick={() => handleViewPdf(note.pdf)}>View Notes</button>
          </div>
        ))}

        {showPdf && (
          <div className="pdf-container">
            <button className="close-btn" onClick={handleClosePdf}>
              Close
            </button>
            <iframe src={selectedPdf} title="PDF Viewer" className="pdf-frame"></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default Menu;
