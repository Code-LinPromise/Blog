import React from 'react';
import style from "./style.module.scss"
import {useNavigate} from "react-router-dom"

const Header = (props) => {
    const {name,details,image,setIsShowSideNav}=props
    const navigate=useNavigate()
    function GoMain(){
        navigate("/")
    }
    return (
        <div className={style.background} style={{backgroundImage: `url(${image})`}} >
            <div className={style.top}>
                <div className={style.topLeft}>
                    <span className={[style.toggle,"iconfont icon-liebiao"].join(" ")} title="打开列表"
                          onClick={setIsShowSideNav}
                    >
                    </span>
                    <a href="https://github.com/Code-LinPromise" className={style.toggle}
                       target="_blank"
                    >
                        <span className="iconfont icon-github" title="Github"></span>
                    </a>

                </div>
                <div onClick={GoMain}>
                    <p className={style.userTop} title="回到主页面">Promise's Studio.</p>
                </div>
            </div>
            <div>
                <h1 id="h1" className={style.font1}>{name}</h1>
                <h2 id="h2" className={style.font2}>{details}</h2>
            </div>
        </div>

    );
};

export default Header;