import React,{useEffect,useState} from 'react';
import style from "./style.module.scss"

const Header = () => {

    return (
        <div className={style.background} >
            <div className={style.top}>
                <div className={style.topLeft}>
                    <span className={[style.toggle,"iconfont icon-liebiao"].join(" ")} title="打开列表"></span>
                    <a href="https://github.com/Code-LinPromise" className={style.toggle}
                       target="_blank"
                    >
                        <span className="iconfont icon-github" title="Github"></span>
                    </a>

                </div>
                <div>
                    <p className={style.userTop} title="回到主页面">Promise's Studio.</p>
                </div>
            </div>
            <div>
                <h1 id="h1" className={style.font1}>Promise's Studio.</h1>
                <h2 id="h2" className={style.font2}>A blog about technology and stuff related</h2>
            </div>
        </div>

    );
};

export default Header;