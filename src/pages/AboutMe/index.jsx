import React,{useState} from 'react';
import Header from "../../components/Header/index.jsx";
import SideNav from "../../components/SideNav/index.jsx";
import style from "./style.module.scss"
import Image from "../../assets/AboutMeImage.jpg"
const About = () => {
    const [isShowSide,setIsShowSide]=useState(false)
    function setIsShowSideNav(){
        setIsShowSide(isShowSide=>!isShowSide)
    }
    return (
        <div>
            <SideNav isShowNav={isShowSide}/>
            <div className={style.right} style={isShowSide?{width:"75%",left:"25%"}:{width:"100%",left:"0"}}>
                <Header name={"About Me."} details={""} image={Image} setIsShowSideNav={setIsShowSideNav}/>
                 <div className={style.allSkill}>
                     <div className={style.skills}>
                        <h2 className={style.title}>Skills</h2>
                           <ul className={style.list}>
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                             <li>React</li>
                             <li>Vue</li>
                             <li>C++</li>
                             <li>MySQL</li>
                             <li>Java</li>
                         </ul>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default About;