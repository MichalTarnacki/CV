import React, {useEffect, useRef, useState} from "react";
import "../Css/SJobs.css"

function SJobs (props:{className?:string, jobs:string[]}) {
    const [[isDeleting, loopNum, txt], setState] = useState([false,0,""])
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(true)
    
    
    useEffect(()=>{
        
        const checkIfVisible = () => {
            setTimeout(()=>{
                const isVisible = getComputedStyle(document.getElementsByClassName("profileBlock")![0]).opacity === "1"
                if(isVisible !== visible)
                    setVisible(isVisible)
            }, 1000)

        }
        
        
        window.addEventListener("scroll", checkIfVisible)
        window.addEventListener("load", checkIfVisible)
        

        if(visible) {
            var text = isDeleting ? props.jobs[loopNum].substring(0, txt.length - 1): props.jobs[loopNum].substring(0, txt.length + 1)
            if (!isDeleting && txt === props.jobs[loopNum])
                setTimeout(() => {
                    setState([true, loopNum, text])
                }, 1500)
            else if (isDeleting && txt === '')
                setTimeout(() => {
                    setState([false, (loopNum + 1) % props.jobs.length, text])
                }, 500)
            else if (isDeleting)
                setTimeout(() => {
                    setState([isDeleting, loopNum, text])
                }, 100 - 30 * Math.random())
            else
                setTimeout(() => {
                    setState([isDeleting, loopNum, text])
                }, 200 - 75 * Math.random())
        }
        return () => {window.removeEventListener("scroll", checkIfVisible); window.removeEventListener("load", checkIfVisible)}
        }, [loopNum, txt, isDeleting, props.jobs, ref, visible])


     return (
          <div ref={ref} className={"sjobs typewrite h4 p-3"}>
              <span className="wrap">{txt}</span>
          </div>
    );
}


export default SJobs;
