import React,{useEffect,useState} from 'react';
import style from "./style.module.scss"
import Archive from "./Archive/index.jsx";
import Cate from "./Cate/index.jsx";
import Tag from "./Tag/index.jsx";
import {nanoid} from "nanoid";
const SideNav = (props) => {
    const [showComponent,setShowComponent]=useState(0)
    const {isShowNav}=props
    useEffect(()=>{
        const locationBottom=document.querySelector("#locationBottom")
        const li =document.querySelectorAll(".liItem")
        for(let i=0;i<li.length;i++){
            li[i].addEventListener("click",function (){
                locationBottom.style.left=li[i].offsetLeft+"px"
                setShowComponent(i)
            })
        }
    },[])
    return (
        <div className={style.sideNav} style={isShowNav?{zIndex:"100"}:{zIndex:"-99999"}}>
            <ul id="sideNav" className={style.ul} >
                <li className="liItem">
                    <span className={[style.jilu,"iconfont icon-lishijilu_huaban"].join(" ")}></span>
                    Archive
                </li>
                <li className="liItem">
                    <span  className={[style.biaoqian,"iconfont icon-biaoqian"].join(" ")}></span>
                    Tag
                </li>
                <li className="liItem">
                    <span className={[style.wenjian,"iconfont icon-wenjianjia"].join(" ")}></span>
                    Cate
                </li>
                <span className={style.span} id="locationBottom"></span>
            </ul>
            {
                showComponent===0?<Archive/>:showComponent===1?<Cate/>:<Tag/>
            }
        </div>
    );
};

export default SideNav;