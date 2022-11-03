import React,{useState,useEffect} from 'react';
import "./style.module.scss"
import Header from "../../components/Header/index.jsx";
import User from  "../../components/User"
import Article from "../../components/Article/index.jsx";
import SideNav from "../../components/SideNav/index.jsx";
import Image from "../../assets/BackgroundImage.jpg"
import style from "./style.module.scss"
import {nanoid} from "nanoid";

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
    useEffect(()=>{
        const goTop=document.querySelector(".icon-xiangshang")
        const halfHeight=document.body.offsetHeight/4
        window.addEventListener("scroll",function (){
            const hideHeight=-(document.body.getBoundingClientRect().top)
            if(hideHeight>=halfHeight){
                goTop.style.opacity=1
                goTop.style.cursor="pointer"
            }
            else{
                goTop.style.opacity=0
                goTop.style.cursor="auto"
            }
        })
    },[])
    return (
        <div className={style.layout}>
            <SideNav isShowNav={isShowNav}/>
            <div id="right" className={style.right} style={isShowNav?{width:"75%",left:"25%"}:{width:"100%",left:"0"}}>
                <Header name={"Promise's Studio."} details={"A blog about technology and stuff related"}
                        image={Image}
                        setIsShowSideNav={setIsShowSideNav}
                />
                <div className={style.article}>
                    <User/>
                    < ul className={style.mapItem}>
                        {
                            array.map((item,index)=>{
                                return <li className={style.item} key={nanoid()}>
                                    <Article name={item.name} details={item.details}
                                             time={item.time} type={item.type}
                                    />
                                </li>
                            })
                        }
                    </ul>
                </div>
                <span className={[style.goTop,"iconfont icon-xiangshang"].join(" ")}
                      onClick={()=>{document.body.scrollTop = document.documentElement.scrollTop = 0}}
                >
                </span>
            </div>
        </div>
    );
};

export default Layout;