import React from "react";
import Block from "../Block";
import ID from "../ID"
import ContactButtons from "../ContactButtons";

function ProfileBlock(props:{className?: string, onClick:React.MouseEventHandler<HTMLElement>}) {

  return (
      <Block className={props.className} internalClassName={"profileBlock"}>
          <>
            <ID className=" mb-auto"/>
            <ContactButtons onClick={props.onClick} className=" mt-1"/>
          </>
      </Block>
  );
}

export default ProfileBlock;
