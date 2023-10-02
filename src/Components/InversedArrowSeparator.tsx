import React from "react";

function ArrowSeparator(props:{className?:string}) {
  return (
        <div className={props.className + " row p-3 text-success h2"}>
            <div className="col"><hr style={{ "height": "2px", "color":"#0B0" } as React.CSSProperties}/></div>
                <div className="col-auto">
                    <i className="bi  fa-xs bi-chevron-up"></i>
                </div>
                <div className="col" style={{ "height": "2px", "color":"#0B0" } as React.CSSProperties}><hr/>
            </div>
        </div>
  );
}

export default ArrowSeparator;
