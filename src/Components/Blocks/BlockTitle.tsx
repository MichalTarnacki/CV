import React from "react";
import ArrowSeparator from "../ArrowSeparator";

function BlockTitle(props:{className?: string, title?:string}) {
  return (
     <h2 className="text-success p-3">
       {props.title}
       <ArrowSeparator></ArrowSeparator>
     </h2>
  );
}

export default BlockTitle;
