import React from "react";
import style from "./Child.module.scss";

console.log(style);

export default function Child() {
    return (
        <div>
            <ul>
                <li className={style.item}>444</li>
                <li className={style.item}>555</li>
                <li className={style.item}>666</li>
            </ul>
        </div>
    )
}