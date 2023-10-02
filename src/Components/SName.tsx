
import React from "react";
import '../Css/Sname.css'

function SName(props: { className?:string; name?: string; surname?: string }) {
  return (
      <div className={props.className + " sname"}>
                    <h3 className="text-success text-nowrap">
                        <span>
                            {props.name}
                        </span>
                        {" "}
                        <span>
                            {props.surname}
                        </span>
                    </h3>
                </div>
  );
}

export default SName;
