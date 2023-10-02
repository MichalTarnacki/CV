import React, {forwardRef, useEffect, useState} from "react";
import ContactFormBlock from "./Blocks/ContactFormBlock";

function ContactBlockOverlay(props: { className?: string, buttonAction: React.MouseEventHandler<HTMLElement>, showForm:boolean}, ref:React.Ref<HTMLDivElement>) {
  const [showing, setShowing] = useState(false);
  useEffect(()=>{
     props.showForm ? setShowing(true): setShowing(false)
  }, [props.showForm, showing])
  return (
      <div className={props.className + " fixed-top m-auto contactForm z-3 h-100 w-100 p-3 m-0 d-flex flex-column bg-secondary bg-opacity-75"} style={{overflowY:"scroll", "visibility": props.showForm ? "visible": "hidden", "opacity": showing ? "100%": "0%"} as React.CSSProperties} ref={ref}>
        <div className="mt-auto mb-auto container-xxl z-3">
            <div onClick={props.buttonAction} className="btn btn-primary mx-auto m-1 btn-lg btn-floating  shadow d-flex bg-opacity-50 bg-light " role="button" >
                <i  className="fa-solid fa-xmark text-success fa-lg mx-auto my-auto"></i>
            </div>
            <ContactFormBlock className="col-lg-7 col-xl-4 col-sm-8 col-12 mx-auto my-auto"/>
        </div>
      </div>
  );
}

export default forwardRef(ContactBlockOverlay);
