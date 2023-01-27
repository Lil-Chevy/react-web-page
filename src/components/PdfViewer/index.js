import React from "react";
import "./pdfViewer.css";
import ResumePhotoOne from "../../assets/resumePhotos/pageOneResume.png";
import ResumePhotoTwo from "../../assets/resumePhotos/pageTwoResume.png";

function PdfViewer() {
  return (
    <section className="resume-section">
      <div className="resume-cards">
        <img src={ResumePhotoOne} alt="resume page one" className="resumeOne" />
      </div>
      <div className="resume-cards">
        <img src={ResumePhotoTwo} alt="resume page two" className="resumeTwo" />
      </div>
      <p></p>
    </section>
  );
}

export default PdfViewer;
