import React from "react";
import { useInView } from 'react-intersection-observer';

function Block(props: { children: React.ReactElement<any, string | React.JSXElementConstructor<HTMLElement>>; className?: string, internalClassName?:string }, ref:React.Ref<HTMLDivElement>) {

    const{ ref: blockRef, inView: seen } = useInView({
        threshold:0.1,
    })

    return (
        <div ref={ref} className={props.className + " p-1 " }>
            <div ref={blockRef} className={props.internalClassName + ` bg-dark shadow h-100 w-100 d-flex flex-column rounded-6 opacityAnimation`} style={{opacity: !seen ? "0%": "100%"}} >{props.children}</div>
         </div>
  );
}

export default React.forwardRef(Block);
