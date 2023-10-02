import React from "react";
import Block from "../Block";
import BlockTitle from "./BlockTitle";
import CodingSkill from "../CodingSkill";
import LanguageSkill from "../LanguageSkill";
import InversedArrowSeparator from "../InversedArrowSeparator";

function SkillsBlock(props:{className?: string}) {



    return (
        <Block className={props.className}>
            <>
                <div className="mb-auto">
                    <BlockTitle title="Skills"/>
                    <h5 className="text-success">
                        <strong>Programming*</strong>
                    </h5>
                    <CodingSkill language="Python" level="70" extra="Tensorflow, Numpy, Matplotlib, Tkinter, Beautifulsoup, Sqlite"/>
                    <CodingSkill language="C/C++" level="60" extra="WinAPI, Web Sockets, Asm"/>
                    <CodingSkill language="Java" level="50" extra="Persistance API, Stream API, Unit tests"/>
                    <CodingSkill language="Javascript" level="50" extra="ReactJS, Bootstrap"/>
                    <h5 className="text-success">
                        <strong>Languages</strong>
                    </h5>
                    <div className="row d-flex justify-content-center text-center p-3">
                        <LanguageSkill className="col-6" language="English" level="B2/C1" percentage="75"/>
                        <LanguageSkill className="col-6" language="Polish" level="Native" percentage="100"/>
                        </div>
                        <div className="text-success pt-3 h5">
                            <strong>Other</strong>
                        </div>
                        <div className="p-3 pt-1">
                        <div className="mt-1 m-0 fs-6 h5">
                            <strong>Some touch with</strong>
                            <br/>
                            <div className="text-success mt-1 fs-6">Bash, SQL, Haskell, Prolog, Unity, PHP, Asm, Wordpress</div>
                        </div>
                    </div>
                </div>
                <div className="p-2 fs-6">*The percentage of programming skills is estimated by the time spent in specific language </div>
                <InversedArrowSeparator/>
            </>
        </Block>
    );
}

export default SkillsBlock;
