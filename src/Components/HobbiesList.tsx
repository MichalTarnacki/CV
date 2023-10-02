import React from "react";
import Hobby from "./Hobby";

function HobbiesList(props: { className?: string }) {
  return (
      <div className={props.className}>

        <ul className="list-group-item mx-auto justify-content-center m-0 p-0 ">

          {/*<Hobby title="Cycling" logo="bi-bicycle" footers={["Thousands of kilometers driven"]}/>*/}
          <Hobby title="Video games and electronic devices" logo="bi-controller" footers={[ "Years of reading magazines and following latest and old school technology" ]}/>
          <Hobby title="Cooking" logo="bi-egg-fried" footers={["The sense of good taste acquired while working in restaurant"]}/>
          <Hobby title="Travelling" logo="bi-signpost" footers={["19 visited countries and the desire for even more"]}/>
        </ul>
      </div>
  );
}

export default HobbiesList;
