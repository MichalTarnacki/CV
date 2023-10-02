import React, {useState} from "react";

function ContactButtons(props: { className?: string, onClick:React.MouseEventHandler<HTMLElement> }) {
    const [text, setText] = useState("Download CV")
    return (<div className={props.className}>
                <div className="justify-content-center mb-3">

                    <a  className="btn btn-primary mx-1 btn-lg btn-floating bg-success shadow"
                      href="https://github.com/MichalTarnacki"
                      role="button"
                    target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a  className="btn btn-primary mx-1 btn-lg btn-floating bg-success shadow"
                      href="https://www.linkedin.com/in/michaltarnacki/"
                      role="button"
                    target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="justify-content-center text-center">
                    <div onClick={()=>setText("CV in progress")} className="col-6 p-3 bg-dark text-white border-top text-nowrap btn "  style={{borderTopLeftRadius: "0", borderTopRightRadius: "0",borderBottomLeftRadius: ".75rem",borderBottomRightRadius: "0" } as React.CSSProperties}>
                        {text}
                    </div>
                    <div onClick={props.onClick} className="col-6 p-3 bg-dark border-start border-top text-white text-nowrap btn " style={{ borderTopLeftRadius: "0",borderTopRightRadius: "0",borderBottomLeftRadius: "0",borderBottomRightRadius: ".75rem" } as React.CSSProperties}>
                        Contact Me
                    </div>
                </div>
            </div>
    );
}

export default ContactButtons;
