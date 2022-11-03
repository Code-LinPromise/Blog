import React from 'react';
import style from "./style.module.scss"
const Archive = () => {
    const array=[
        {
            time:"2022/11/2",
            details:"Hello World"
        },
        {
            time:"2022/11/2",
            details:"文章置顶"
        },
        {
            time:"2022/11/2",
            details:"www.google.com"
        },
    ]
    return (
        <div className={style.archive}>
            <p className={style.total}>Total:6</p>
            <ul className={style.mapUl}>
                {
                    array.map((item,index)=>{
                        return <li className={style.mapItem} key={index}>
                            <span className={style.time}>{item.time}</span>
                            <span className={style.details}>{item.details}</span>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Archive;