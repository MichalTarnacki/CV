import React from "react";
import Block from "../Block";
import BlockTitle from "./BlockTitle";

const ContactBlock =  React.forwardRef((props: { className:string, onClick:React.MouseEventHandler<HTMLElement>}, ref: React.Ref<HTMLInputElement>) => (
      <Block  ref={ref} className={props.className + " contact"}  internalClassName="pb-2">
      <div>
          <BlockTitle title="Contact" />
          <h4 className="text-success m-2">Phone</h4>
          *********
          <h4 className="text-success m-2">Mail</h4>
          ************
          <h4 className="text-success m-2">Contact form</h4>
          <div className="btn btn-primary mx-auto mb-3 mt-3 m-2 btn-lg btn-floating bg-success shadow d-flex " role="button" onClick={props.onClick}>
              <i className="fa-regular fa-regular fa-lg mx-auto my-auto fa-message"></i>
          </div>
      </div>
      </Block>
  ))






export default ContactBlock;
