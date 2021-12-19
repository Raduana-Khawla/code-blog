import React from "react";
import resume from "../../../Images/Final-Resume.pdf";

const FileDownloader = () => {
  return (
    <>
      <div>
        <h2>File Download</h2>
        <a href={resume} download>
          Download
        </a>
      </div>
      <div>
        <a
          href="https://docs.google.com/document/d/10KflHFb9sLU9bEEIX1qEKo8q_toE-ajUVDbchvOBmBI/edit?usp=sharing"
          download
        >
          Download
        </a>
      </div>
    </>
  );
};
export default FileDownloader;
