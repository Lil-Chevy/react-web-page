import React from "react";
import "./resume.css";
import DownloadDoc from "../../assets/resumeDownload/JackNowaczewskiResume.pdf";

function Resume() {
  return (
    <section>
      <div>Please feel free to review and download my resume! </div>
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
