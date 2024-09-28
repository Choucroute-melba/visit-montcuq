import MQLogoFull from "@/app/components/logo";
import Image from "next/image";


export default function Page() {

    return (
        <div>
            <MQLogoFull size={2}/>
            <Image src={"/SVG/logoBlanc.svg"} alt={"Logo"} width={250} height={150}/>
        </div>
    )
}