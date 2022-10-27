import React from 'react';
import style from "./style.module.scss"
import UserImage from "../../assets/UserImage.jpg"
import wechat from "../../assets/wechat.jpg"
import {useNavigate} from "react-router-dom"

const User = () => {
    const navigate=useNavigate()
    function GoAboutMe(){
        navigate("/aboutMe")
    }

    function showWechat(){
        const wechat=document.querySelector("#wechat")
        wechat.style.display="block"

    }
    function hideWechat(){
        const wechat=document.querySelector("#wechat")
        wechat.style.display="none"
    }
    return (
        <div className={style.user}>
            <img src={UserImage} alt="" className={style.img}/>
            <p className={style.detailsName}>Promise</p>
            <p className={style.detailsSay}>Every day is an opportunity to be better!</p>
            <div className={style.toggle}>
                <a href="mailto:326661445@qq.com" title="email">
                    <span  className={[style.youxiang,"iconfont icon-youxiang"].join(" ")}></span>
                </a>
                <a href="https://github.com/Code-LinPromise" className={style.span}
                   target="_blank" title="Github"
                >
                    <span className={[style.github,"iconfont icon-github"].join(" ")} title="Github"></span>
                </a>
                <span className={["iconfont icon-weixin",style.weixin].join(" ")} title="wechat"
                      onMouseEnter={showWechat} onMouseLeave={hideWechat}
                >
                    <img src={wechat} alt="" className={style.wechat} id="wechat"/>
                </span>
            </div>
            <div className={style.idCard} onClick={GoAboutMe}>
                <span className={[style.idIcon,"iconfont icon-id-card"].join(" ")}></span>
                <p className={style.idCardP}>About Me</p>
            </div>

        </div>
    );
};

export default User;