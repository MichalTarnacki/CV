import React, {useEffect, useRef, useState} from "react";
import ReactCardFlip from 'react-card-flip';
import "../../Css/General.css"
import {useInView} from "react-intersection-observer";



//Posible width problem, only height is measured
function FlipImage(props:{className?: string, src:string, title:string, year?:string, descr?:string, href:string, alt?:string}) {

    const myRef =  useRef<HTMLImageElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const [isFlipped, setFlip] = useState(false);
    const [height, setHeight] = useState(0);
    const [userInteracted, setInteraction] = useState(false);

    const{ ref: imgRef, inView: seen } = useInView({
        threshold:0.1,
    })


     useEffect(() => {
         const height = myRef.current?.height;
         const resize =() => {
            if(height)
                setHeight(height)
        }
         window.addEventListener("resize", resize);
         let handle: NodeJS.Timeout | null;
         if(!userInteracted && seen) {
            handle = setTimeout(()=>setFlip(!isFlipped), Math.random() * 7000 + 1000)
        }

        return () => {
            window.removeEventListener("resize", resize)
            if (handle != null)
                clearTimeout(handle)
        }
    }, [isFlipped, userInteracted, height, seen]);

      return (
          <div ref={imgRef} className="opacityAnimation" style={{opacity: !seen ? "0%": "100%"}}>
          <div
              className={props.className + " m-2 flipImage"} ref={divRef}
              onMouseOut={() => {divRef.current!.style.transform = "scale(1)"; divRef.current!.style.opacity = "100%"}}
              onMouseOver={() => {divRef.current!.style.transform = "scale(1.05)"; divRef.current!.style.opacity = "100%"
          }}>
              <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal" >
                  <img ref={myRef} className="w-100 rounded-6"
                       onLoad={()=>{setHeight( myRef.current!.height)}}
                       onClick={()=>{
                       setFlip(!isFlipped); setInteraction(!userInteracted)}} src={props.src} alt={props.alt}/>

               <div className="bg-dark shadow d-flex rounded-6" onClick={()=>{setInteraction(!userInteracted); setFlip(!isFlipped); }} style={{"height":height } as React.CSSProperties} >
                  <div className="my-auto mx-auto p-2">
                      <h4>
                          <strong className="text-success">{props.title}</strong>
                      </h4>
                      {props.year}
                      <h5>{props.descr}</h5>
                      <a href={props.href} target="_blank" rel="noreferrer">
                        <i className="bi fa-lg bi-arrow-up-right-circle-fill" style={{ "color":"#0B0"}}></i>
                      </a>
                  </div>
               </div>
              </ReactCardFlip>
          </div>
              </div>
    )
}

export default FlipImage;
