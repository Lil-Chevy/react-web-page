import React from "react";
import "./resume.css";
import DownloadDoc from "../../assets/resumeDownload/JackNowaczewskiResume.pdf";
import PdfViewer from "../PdfViewer";

function Resume() {
  return (
    <section className="resumes-section">
      <div>Please feel free to review and download my resume! </div>
      {/* PDF Viewer component */}
      <div>
        <PdfViewer />
      </div>
      {/* Download button for resume */}
      <button className="resume-button">
        <a
          className="resume-button"
          href={DownloadDoc}
          download="JackNowaczewskiResume.pdf"
        >
          Download My Resume
        </a>
      </button>
    </section>
  );
}

export default Resume;
