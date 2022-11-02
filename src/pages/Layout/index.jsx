import React,{useState} from 'react';
import "./style.module.scss"
import Header from "../../components/Header/index.jsx";
import User from  "../../components/User"
import Article from "../../components/Article/index.jsx";
import SideNav from "../../components/SideNav/index.jsx";
import Image from "../../assets/BackgroundImage.jpg"
import style from "./style.module.scss"

const Layout = () => {
    const [isShowNav,setIsShowNav]=useState(false)
    const array=[
        {name:"React-Router应用以及vite引用",details:"Blog开发",time:"2022-10-27",type:"React"},
        {name:"Vue-Router应用以及vite引用",details:"Blog开发",time:"2022-10-27",type:"Vue"},
        {name:"React-Router应用以及vite引用",details:"Blog开发",time:"2022-10-27",type:"React"},
        {name:"Vue-Router应用以及vite引用",details:"Blog开发",time:"2022-10-27",type:"Vue"}
    ]
    function setIsShowSideNav(){
        setIsShowNav(isShowNav=>!isShowNav)
    }
    return (
        <div className={style.layout}>
            <SideNav isShowNav={isShowNav}/>
            <div className={style.right} style={isShowNav?{width:"75%",left:"25%"}:{width:"100%",left:"0"}}>
                <Header name={"Promise's Studio."} details={"A blog about technology and stuff related"}
                        image={Image}
                        setIsShowSideNav={setIsShowSideNav}
                />
                <div className={style.article}>
                    <User/>
                    < ul className={style.mapItem}>
                        {
                            array.map((item,index)=>{
                                return <li className={style.item}>
                                    <Article name={item.name} details={item.details}
                                             time={item.time} type={item.type}
                                             key={index}
                                    />
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Layout;