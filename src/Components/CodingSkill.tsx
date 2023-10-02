import React from "react";
import ProgressBar from "./Blocks/ProgressBar";

function CodingSkill(props:{className?: string, language:string, level:string, extra?:string}) {
    return (
        <div className="p-3 pt-1 pb-1">
            <div className="d-flex justify-content-between">
                <p className="mb-2 text-success">{props.language}</p>
                <p className="mb-2">{props.level}%</p>
            </div>
            <ProgressBar percentage={parseFloat(props.level)}/>
            <div className="justify-content-between mb-3">
                <p className="mt-2 m-0 p-0">{props.extra}</p>
            </div>
        </div>
    );
}

export default CodingSkill;
