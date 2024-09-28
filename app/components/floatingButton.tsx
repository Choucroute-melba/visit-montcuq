import React from "react";

export default function FloatingButton({className = "", children, label, reveal="right", id}: {
    className?: string, children: any, label: string, reveal?: "left" | "right", id?: string
}) {

    return (
        <div className={"h-16 w-16 transition-all " + className} id={id}>
        <button
            className={"group/fb transition-all z-50 h-16 min-w-16 overflow-hidden relative " +
                "border border-amber-950 rounded-full bg-primary-50 shadow-[0px_0px_15px_0px] shadow-amber-950/30 " +
                "flex flex-row justify-start items-center text-left "}
        >
            {reveal == "right" && <>
                <div className={"h-16 w-16 flex justify-center items-center p-0"}>
                    {children}
                </div>
                <div className={"transition-all inline-block group-hover/fb:ml-2 group-hover/fb:mr-3 whitespace-nowrap overflow-hidden w-0 group-hover/fb:w-fit "}>
                {label}
                </div>
                </>
            }
            {reveal == "left" && <>
                <div
                    className={"transition-all inline-block group-hover/fb:ml-2 group-hover/fb:mr-3 whitespace-nowrap overflow-hidden w-0 group-hover/fb:w-fit "}>
                    {label}
                </div>
                <div className={"h-16 w-16 flex justify-center items-center p-0"}>
                    {children}
                </div>
            </>
            }
        </button>
        </div>
    )
}