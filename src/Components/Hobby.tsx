import React from "react";
function Hobby(props: { className?: string, logo:string, title:string, footers:string[] }) {
  return(
   <li className={props.className + " d-flex-row text-success"} style={{listStyleType: "none"} as React.CSSProperties}>
      <div className="text-center">
          <i className={`bi fa-md ${props.logo} text-white p-0 m-0`}></i>
          <p className="fs-6 ">{props.title}</p>
        {props.footers.map((item)=>
            <footer className="blockquote-footer fs-6" key={item}>{item}</footer>)
        }

      </div>
  </li>
  );
}

export default Hobby;
