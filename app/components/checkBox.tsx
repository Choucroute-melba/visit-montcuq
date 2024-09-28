import React from "react";

export default function CheckBoxButton({children, id, className}: {
    children: React.ReactNode,
    id: string,
    className?: string
}) {
    return (
        <label htmlFor={id} className={"flex items-center " + className}>
            <input type="checkbox" id={id} className={"mr-2"} defaultChecked={true}/>
            {children}
        </label>
    )
}