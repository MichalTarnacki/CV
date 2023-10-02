import React from "react";
import ProgressBar from "./Blocks/ProgressBar";

  function LanguageSkill(props: { className?:string; language: string; level: string; percentage:string }) {
    return (
        <div className={props.className}>
          <div className="d-flex justify-content-between">
            <p className="mb-2 mt-0 text-success">{props.language}</p>
            <p className="mb-2 mt-0">{props.level}</p>
          </div>
          <ProgressBar percentage={parseFloat(props.percentage)}/>
        </div>
    );
  }
export default LanguageSkill;
