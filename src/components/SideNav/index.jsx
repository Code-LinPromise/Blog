import React,{useEffect,useState} from 'react';
import style from "./style.module.scss"
import Archive from "./Archive/index.jsx";
import Cate from "./Cate/index.jsx";
import Tag from "./Tag/index.jsx";
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
        <div className={style.sideNav} style={isShowNav?{width:"25%"}:{width:"0%"}}>
            <ul id="sideNav" className={style.ul} >
                <li className="liItem">
                    <span></span>
                    Archive
                </li>
                <li className="liItem">
                    <span></span>
                    Tag
                </li>
                <li className="liItem">
                    <span></span>
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