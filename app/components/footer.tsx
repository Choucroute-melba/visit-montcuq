import Link from "next/link";
import MQLogoFull from "@/app/components/logo";
import LinkButton from "@/app/components/linkButton";
import React from "react";


export default function Footer() {

    return (
        <div className={"bg-primary-200"}>
            <div className={"h-[500px] bg-landscape-no-sky bg-no-repeat lg:p-16 p-4 pt-14"}>
                <div className={"flex flex-row justify-start"}>
                    <div>
                        <h4 className={"font-bold text-xl mb-5"}>Contact</h4>
                        <p><Link href={""} className={"font-normal"}>Formulaire</Link></p>
                        <p>Tel. : 36 30 36 30</p>
                        <p><Link className={"font-normal"} href={""}>Instagram</Link></p>
                        <p><Link className={"font-normal"} href={""}>Facebook</Link></p>
                    </div>
                    <div className={"ml-10"}>
                        <h4 className={"font-bold text-xl mb-5"}>Tourisme</h4>
                        <p><Link href={""} className={"font-normal"}>Carte interactive</Link></p>
                        <p><Link className={"font-normal"} href={""}>Programme 2024-25</Link></p>
                        <p><Link className={"font-normal"} href={""}>Montcuq Animation</Link></p>
                    </div>
                    <div className={"ml-10"}>
                        <MQLogoFull className={"mb-16"} bg={"bg-primary-950"}/>
                        <LinkButton href={"/test"}>Testing</LinkButton>
                    </div>
                </div>


                <pre className={"font-bold text-xs text-wrap mt-5"}>
                Copyright © 2024 Montcuq - visit-montcuq.fr
            </pre>
            </div>
        </div>
    )
}