import React, {useEffect, useState} from 'react';
import '../Css/App.css';
import MainPage from "./MainPage";
import TopBar from "./TopBar";
import '../Css/General.css'

function App() {
    const [horizontal, setHorizontal] = useState(window.innerWidth/window.innerHeight > 16/9)
    useEffect(()=>{
        const flip = ()=>{
            const state = window.innerWidth/window.innerHeight > 16/9
            if(state!==horizontal)
                setHorizontal(state)
        }
        window.addEventListener("resize", flip)
        return () => {
            window.removeEventListener("resize", flip)
        }
    })
  return (
    <div className={`App text-wrap bg ${horizontal ? "bgHorizontal": "bgVertical" }`}>
      <TopBar className="fixed-top z-2"></TopBar>
      <MainPage className=" position-relative"></MainPage>
    </div>
  );
}

export default App;
