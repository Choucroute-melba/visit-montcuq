'use client';

import FloatingButton from "@/app/components/floatingButton";
import Image from "next/image";

export default function FabsNav() {

    return (
        <div className={"group/discover absolute left-0 h-1/3 w-full z-30"}>
            <div className={"absolute top-[-40px] left-[49%] max-sm:left-[43%] z-40"}>
                <FloatingButton label={"Voyage"} reveal={"left"} id={"fab-travel"}
                                className={`group/c absolute top-0 left-0 origin-center group-hover/discover:circle-1`}>
                    <Image src={"icons/SVG/travel2.svg"} alt={"Icône votage"} height={"60"} width={60}/>
                </FloatingButton>
                <FloatingButton label={"Hébergements"} id={"fab-hosting"}
                                className={"absolute top-0 left-0 origin-center group-hover/discover:circle-2"}>
                    <Image src={"icons/SVG/hosting2.svg"} alt={"Icône hébergements"} height={"48"} width={48}/>
                </FloatingButton>
                <FloatingButton label={"Animations"} id={"fab-animation"}
                                className={"absolute top-0 left-0 origin-center group-hover/discover:circle-3"}>
                    <Image src={"icons/SVG/animation2.svg"} alt={"Icône animations"} height={"52"} width={52}/>
                </FloatingButton>
                <FloatingButton label={"Visiter"} id={"fab-visit"}
                                className={` absolute top-0 left-0 origin-center group-hover/discover:circle-4`}>
                    <Image src={"icons/SVG/visit2.svg"} alt={"Icône visiter"} height={"50"} width={50}/>
                </FloatingButton>
            </div>
        </div>
    )
}