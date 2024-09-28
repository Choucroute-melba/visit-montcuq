'use client';
import React, {useEffect, useState} from "react";
import LinkButton from "@/app/components/linkButton";
import MQLogoFull from "@/app/components/logo";


export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [headerMode, setHeaderMode] = useState("static" as "static" | "sticky");

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if(window.scrollY > 0) {
                setScrollY(window.scrollY);
            }
            if(window.scrollY > 110) {
                setHeaderMode("sticky");
            } else {
                setHeaderMode("static");
            }
        });
    }, []);


    return (
        <header className={`bg-header-landscape ${headerMode} bg-no-repeat z-20 w-full top-0 flex ${false ? 'flex-row' : 'flex-col justify-between'}`} style={{height: headerMode == 'static' ?`${300 - scrollY}px` : '60px', display: "none"}}>
            <MQLogoFull className={`self-center sticky top-0`} />
            <ul className={"flex flex-row w-min h-min pt-3 pb-3 p-2 bg-secondary-600/75 m-1.5 rounded-md self-end backdrop-blur-md"}>
                <li className={"p-1 mr-2"}><LinkButton href={"/"}>Acceuil</LinkButton></li>
                <li className={"p-1"}><LinkButton href={"/test"}>Testing</LinkButton></li>
            </ul>
        </header>
    )
}