import React from 'react';
import style from "./style.module.scss"
const Article = (props) => {
    const {name,details,time,type}=props
    return (
        <div className={style.article}>
            <p className={style.name}>{name}</p>
            <p className={style.details}>{details}</p>
            <div className={style.readArticle}>
                <span> &nbsp; </span>
                <div className={style.readArticleFont}>
                    <span className={style.iconContent}>阅读全文</span>
                    <span className={[style.iconFile,"iconfont icon icon-youjiantou"].join(" ")}></span>
                </div>
            </div>
            <div className={style.timeAndType}>
                <div className={style.timeFontAndIcon}>
                    <span className={["iconfont icon-rili",style.timeIcon].join(" ")}></span>
                    <span className={style.timeFont}>{time}</span>
                </div>
                <div className={style.typeFontAndIcon}>
                    <span className={[style.typeIcon,"iconfont icon-wenjianjia"].join(" ")}></span>
                    <span className={style.typeFont}>{type}</span>
                </div>
            </div>
        </div>
    );
};

export default Article;