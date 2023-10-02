import React from "react";
import Block from "../Block";
import BlockTitle from "./BlockTitle";
import "../../Css/List.css"

function ExperienceBlock(props: { className?: string }) {
    return (
        <Block className={props.className}  internalClassName="pb-4">
            <>
            <BlockTitle title="Experience"/>

                <h4 className="text-success">IT</h4>
                <p>Currently no comercial experience,
                </p>
                     <strong className="text-success h5">Some skills acquired <br/> while working on projects</strong>
                    <ul className="ps-0 ms-0" style={{ listStylePosition: "inside"} as React.CSSProperties}>

                        {["OOP programming", "Working with frameworks (f.eg. Entity Framework)", "Low-level programming (x86-64 asm)", "Using API's (f.eg. NewsApi)", "Automation (Selenium, BeautifulSoup)", "Creating UI's (f.eg. Tkinter)" ].map((element)=> (
                            <li key={element} className="p-0 m-0" style={{listStyleType:"none"}}>
                              <p className="ps-2 pe-2 p-0 m-0">{element}</p>
                            </li>
                        ))}

                      </ul>
                {/*<h4 className="text-success">Other</h4>*/}
                {/*<div className="row p-3 pb-4">*/}
                {/*    <span className="col border-success rounded" style={{ borderRight: "inset 1px"} as React.CSSProperties}/>*/}
                {/*    <span className="col-9 text-start ps-0">*/}
                {/*      <ul className="ps-0 ms-0" style={{ listStylePosition: "inside"} as React.CSSProperties}>*/}
                {/*          <li className=" experienceList">*/}
                {/*              <strong className="text-success h5">Cook's helper</strong>*/}
                {/*              <br/>*/}
                {/*              <p className="ps-2">Pasta house | 2020-2022</p>*/}

                {/*          </li>*/}
                {/*      </ul>*/}
                {/*    </span>*/}
                {/*</div>*/}
            </>

        </Block>
    );
}

export default ExperienceBlock;
