import React from "react";
import Photo from "../assets/photo2.jpg";
import SName from "./SName";
import SJobs from "./SJobs";

function ID(props: { className?: string }) {
    return (<div className={props.className}>
                <div className="p-2">
                    <img className="w-100 rounded-top-2   img-fluid hover-shadow" src={Photo} alt="Author's face"/>
                </div>
                  <SName name="Michał" surname="Tarnacki" className="mt-2"/>
                  <SJobs jobs={[ "Hello!",
                      "Welcome to my website",
                      "I am CS student",
                      "and my plan was to create",
                      "a bit more interactive CV.",
                      "And this is a result",
                      "Thank you for coming",
                      "and have a nice day!"
                  ]} className="mt-2"/>
                    <hr className="hr hr-blurry mt-2" style={{ "color": "white" } as React.CSSProperties} />
        </div>
    );
}

export default ID;
