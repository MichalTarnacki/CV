import React, {useEffect, useRef, useState} from "react";

import { useInView } from 'react-intersection-observer';

function ProgressBar(props:{className?:string, percentage:number}) {

    const myRef = useRef<HTMLDivElement>(null);
    const { ref: seenRef, inView: seen } = useInView();
    const [{width, speed}, setWidth] = useState({width:0,speed: 10})

    useEffect(()=>{
    if(width < props.percentage && seen ) {
            setTimeout(() => {
                myRef.current!.style.width = width + 1 + '%';
                setWidth({width: width + 1, speed: (Math.random()*0.3+0.85)*speed})
            }, speed)

        }
    },[props.percentage, speed, width, seen])

    return (
          <div ref={seenRef} className={props.className + " progress"}>
            <div ref={myRef} className="bg-success" role="progressbar"></div>
          </div>
    );
}

export default ProgressBar;
