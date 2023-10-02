import React from "react";
import Block from "../Block";
import BlockTitle from "./BlockTitle";
function ContactFormBlock(props: { className?: string, onClick?:React.MouseEventHandler<HTMLElement>}) {
    return (
        <Block className={props.className + " text-success"}>

        <div onClick={props.onClick}>
            <BlockTitle title="Contact form"/>
            <h5 className="mt-2">Name</h5>
            <input className="mb-2 m-auto rounded-6 w-75 p-1 ps-2 pe-2 " readOnly={true} defaultValue="Willie"></input>
            <h5 className="mt-2">Email</h5>
            <input className="mb-2 m-auto rounded-6 w-75 p-1 ps-2 pe-2" readOnly={true} defaultValue="willie@trombone.com" ></input>
            <h5 className="mt-2">Subject</h5>
            <input className="mb-2 m-auto rounded-6 w-75 p-1 ps-2 pe-2 " readOnly={true} defaultValue="Something unfinished"></input>
            <h5 className="mt-2">Message</h5>
            <textarea rows={5} className="m-auto w-75 rounded-6 p-1 ps-2 pe-2" readOnly={true} defaultValue="Dear Guest,
            This form does not work currently, as there is no backend. Please contact via Linkedin.
            Sincerely Willie" ></textarea>
            <a className="btn btn-primary mx-auto mb-3 m-2 btn-lg btn-floating bg-success shadow d-flex " href="https://www.linkedin.com/in/michaltarnacki/" role="button" target="_blank" rel="noreferrer">
              <i className="fa-regular fa-paper-plane fa-lg mx-auto my-auto"></i>
            </a>

        </div>
        </Block>
    );
}

export default ContactFormBlock;
