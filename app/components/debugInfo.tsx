'use client';

import React, {useEffect, useState} from "react";

export default function DebugInfo() {
    const [display, setDisplay] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [listenersRegistered, setListenersRegistered] = useState(false);

    useEffect(() => {
        console.log("setting up keydown listener")
        window.onkeydown = (e: KeyboardEvent) => {
            if(e.key == "/") {
                e.preventDefault();
                e.stopPropagation();
                console.log("display", display);
                if(display)
                    setDisplay(false);
                else
                    setDisplay(true);
                console.log("display", display);
            }
        };
    }, [listenersRegistered]);
     if(!listenersRegistered)
        setListenersRegistered(true);
    console.log("display - render", display);

    return (
        <pre className={"bg-white/75 fixed right-0 top-0 p-3 z-50"}
             style={display ? {display: "block"} : {display: "none"}}>
            <p>scrollY: {scrollY}</p>
            <p>
            <span className={"hidden 2xl:inline"}>2xl</span>
            <span className={"hidden xl:inline 2xl:hidden"}>xl</span>
            <span className={"hidden lg:inline xl:hidden"}>lg</span>
            <span className={"hidden md:inline lg:hidden"}>md</span>
            <span className={"hidden sm:inline md:hidden"}>sm</span>
            <span className={"sm:hidden inline"}>phone</span>
            </p>
            <div
                className={"h-1 w-full sm:bg-pink-600 md:bg-red-600 lg:bg-green-600 xl:bg-blue-600 bg-purple-600"}></div>
        </pre>
    )
}