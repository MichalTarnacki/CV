import React, {useEffect, useRef, useState} from "react";
import ProfileBlock from "./Blocks/ProfileBlock";
import AboutMeBlock from "./Blocks/AboutMeBlock";
import SkillsBlock from "./Blocks/SkillsBlock";
import ExperienceBlock from "./Blocks/ExperienceBlock";
import ContactBlock from "./Blocks/ContactBlock";
import "../Css/General.css"
import ProjectsBlock from "./Blocks/ProjectsBlock";
import ContactBlockOverlay from "./ContactBlockOverlay";
import { observe } from 'react-intersection-observer';
function MainPage(props:{className?: string}) {
        const [showForm, setShow] = useState(false);
        const [IsMd, setIsMd] = useState( window.innerWidth>=992);
        const myRef =  useRef<HTMLDivElement>(null);
        const conRef = useRef<HTMLInputElement>(null)
        const [contactClass] = useState(null);
        const [runAnimation, setRun] = useState(false)
        const showContactForm = () => {
            setShow(!showForm)
        }
   useEffect(() => {
       const destroy = observe(conRef.current!, ()=>{if(runAnimation){ animate(); setRun(false)} });
        function sets () {
            let isMd = window.innerWidth>=992
            if (isMd!==IsMd)
                setIsMd(isMd)

        }
        window.addEventListener("resize", sets);

        return () => {
            window.removeEventListener("resize",sets)
            destroy()
        }
    }, [IsMd, contactClass, runAnimation]);


  const scrollToContact = () => {
    conRef.current?.scrollIntoView({ behavior: 'smooth' });
    setRun(true)
  };
  const animate = () => {
       conRef.current!.className += " rotate"
      setTimeout(()=>{conRef.current!.className = conRef.current!.className.replaceAll(" rotate", "")}, 2000 )

  }

  return (

    <div className={props.className + " MainPage center bg"}>
     <div className="container-fluid   mt-1 min-vh-100  ">
        <div className="container-xxl sticky-lg-top z-1">
            <div className="row pt-4 d-flex  text-center">
                <ProfileBlock onClick={()=>{scrollToContact()}} className="col-lg-7 col-xl-4"></ProfileBlock>
                <AboutMeBlock className="col-lg-5 col-xl-4 "></AboutMeBlock>
                <SkillsBlock className="col-lg-6 col-xl-4 "></SkillsBlock>
                    {IsMd &&
                        <>
                            <div className="col-md-6 col-lg-6 col-xl-4 d-flex flex-column p-0 m-0 z-1">
                                <ExperienceBlock className=" h-100  "/>
                                <ContactBlock ref={conRef} onClick={()=>{showContactForm()}} className=" h-100"/>
                            </div>
                                <ProjectsBlock className=" col-xl-8 z-0"/>
                        </>
                    }
                    {!IsMd &&
                        <>
                            <ExperienceBlock className=" h-100 col-12  "/>

                            <ProjectsBlock className=" col-12"/>
                                <ContactBlock ref={conRef} onClick={()=>{showContactForm()}} className=" h-100 col-12  d-flex flex-column p-0 m-0"/>
                        </>
                    }
            </div>

        </div>

     </div>
        <br/>
    <ContactBlockOverlay ref={myRef} buttonAction={()=>showContactForm()} showForm={showForm}/>
    </div>
  );
}



export default MainPage;