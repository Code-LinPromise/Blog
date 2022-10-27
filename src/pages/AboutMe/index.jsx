import React from 'react';
import Header from "../../components/Header/index.jsx";
import style from "./style.module.scss"
const About = () => {
    return (
        <div>
            <Header name={"About Me."} details={""}/>
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
    );
};

export default About;