import React from 'react';
function TopBar(props:{className?: string}) {
  return (<p className={props.className+ " fixed-top bg-success text-light justify-content-center text-center"}>#Projects will be revealed soon!</p>
  );
}

export default TopBar;
