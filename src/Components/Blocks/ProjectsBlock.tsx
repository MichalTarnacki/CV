import React from "react";
import Block from "../Block";
import BlockTitle from "./BlockTitle";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import FlipImage from "./FlipImage";

function ProjectsBlock(props: { className?: string }) {
    return (<div className={props.className + "  p-0"}>
                <Block className="w-100 m-0 p-0" >
                    <>
                        <BlockTitle title="Major projects"/>
                    </>
                </Block>

                <ResponsiveMasonry className="mb-auto m-0 p-0"
                    columnsCountBreakPoints={{767: 1, 991: 2, 1199: 3}}>
                    <Masonry>
                        <FlipImage year={"2023"} src={require("../../assets/Projects/PrzeplywSterowania.png")} href={"https://github.com/MichalTarnacki/_wdc"} title={"WDC Project"} descr={"Simple app explaining digital signature"}></FlipImage>
                        <FlipImage year={"2023"} src={require("../../assets/Projects/dstanow.png")} href={"https://github.com/MichalTarnacki/SI_projekt"} title={"AI Project"} descr={"AI Breath detecting"}></FlipImage>
                        <FlipImage year={"2023"} src={require("../../assets/Projects/tron.png")} href={"https://github.com/MichalTarnacki/Tron"} title={"Multiplayer Tron game"} descr={"Simple game implementing web sockets"}></FlipImage>
                        <FlipImage year={"2022"} src={require("../../assets/Projects/schemat.png")} href={"https://github.com/MichalTarnacki/_rozne/tree/master/_sql"} title={"SQL database"}></FlipImage>
                        <FlipImage year={"2021"} src={require("../../assets/Projects/VideoConverter.png")} href={"https://github.com/MichalTarnacki/_video_converter"} title={"EasyVideo"} descr={"useful tool for editing videos"}></FlipImage>
                        <FlipImage year={"2023"} src={require("../../assets/Projects/tcReservations.png")} href={"https://github.com/MichalTarnacki/_tennis_court_reservations"} title={"Tennis court reservations"} descr={"an excercise"}></FlipImage>
                    </Masonry>
                </ResponsiveMasonry>
        </div>
    );
}

export default ProjectsBlock;
