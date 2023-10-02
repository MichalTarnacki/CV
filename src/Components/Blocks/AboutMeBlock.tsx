import React from "react";
import Block from "../Block";
import BlockTitle from "./BlockTitle";
import HobbiesList from "../HobbiesList";

function AboutMeBlock(props:{className?: string}) {
    return (
        <Block className={props.className}  internalClassName="pb-4">
            <>
                <BlockTitle title = "About me"/>
                <h5 className="text-success">
                    <strong>Profile info</strong>
                </h5>
                   <p className="text-success p-4 pb-0 pt-3" style={{textAlign:"justify"}}>
                       I am a computer science student at Gdansk University of Technology,
                       currently on the fifth semester.
                       I have several hobbies that develop some aspects of my life.
                       I like to create user friendly UI's as it is part of my artistic soul,
                       I love cooking as in the youth age I wanted to be a chef,
                       I also read, watch, etc., about old school and current electronic devices, as it is the main area of my interests.
                       Finally, the most important thing in my life is travelling.
                       In my opinion, the meaning of life is getting to know the new cultures, people and their customs.
                       It gives a whole different point of view of our daily basis. At least for me. My current goal is to finish studies (master's degree [at least!!]),
                       get a permanent job and travel all over the world!
                    </p>
                <h5 className="text-success mb-1 mt-2">
                    <strong>Hobbies</strong>
                </h5>
                <HobbiesList className=" d-flex p-3"/>
            </>
        </Block>
    );
}

export default AboutMeBlock;
