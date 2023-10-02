import React from "react";

function ArrowSeparator() {
  return (
        <div className="row">
            <div className="col"><hr style={{ "height": "2px", "color":"#0B0" } as React.CSSProperties}/></div>
                <div className="col-auto">
                    <i className="bi  fa-xs bi-chevron-down"></i>
                </div>
                <div className="col" style={{ "height": "2px", "color":"#0B0" } as React.CSSProperties}><hr/>
            </div>
        </div>
  );
}

export default ArrowSeparator;
