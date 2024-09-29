import MQLogoFull from "@/app/components/logo";
import FloatingButton from "@/app/components/floatingButton";
import Script from "next/script";
import Image from "next/image";
import Clocher from "@/app/components/illustrations/clocher";
import Tour from "@/app/components/illustrations/tour";
import Link from "next/link";
import twConfig from "../tailwind.config";
import PicturesShower from "@/app/picturesShower";
import FabsNav from "@/app/fabs";
import LinkButton from "@/app/components/linkButton";
import React from "react";
const theme = twConfig.theme! as any

export default function Home() {

    return (
        <>
        <div className={"flex flex-col h-full w-full overflow-x-hidden overflow-y-visible"}>
            <PicturesShower/>
            <div className={"basis-1/3 flex flex-col justify-start items-center group/discover"} id={'discover'}>
                <MQLogoFull className={"z-50 bg-primary-200 rounded-full shadow shadow-primary-200"} size={1.4}
                            id={"mainlogo"}/>
                <div className={"flex flex-row my-2 space-x-1 md:hidden z-40"}>
                    <LinkButton href={"/#previous"} className={""}>
                        <img className={"h-5 w-5 inline"} src={"/icons/SVG/previous.svg"}/>
                    </LinkButton>
                    <LinkButton href={"/#pause"} className={""}>
                        <img className={"h-5 w-5 inline"} src={"/icons/SVG/pause.svg"}/>
                    </LinkButton>
                    <LinkButton href={"/#next"} className={""}>
                        <img className={"h-5 w-5 inline"} src={"/icons/SVG/next.svg"}/>
                    </LinkButton>
                </div>
                <FabsNav/>
            </div>
            <div className={"snap-x snap-mandatory basis-2/3 z-20 overflow-x-scroll overflow-y-visible w-full [scrollbar-width:none]"}
                 id={"#prez-mask"}>
                <div className={"flex flex-row w-[500%] h-full overflow-y-visible"} id={"#prez-scroller"}>
                    <WelcomePrez className={"h-full w-full snap-start overflow-y-visible"}/>
                    <VisitPrez className={"h-full w-full snap-end"}/>
                    <AnimationPrez className={"h-full w-full snap-end"}/>
                    <HostingPrez className={"h-full w-full snap-end"}/>
                    <TravelPrez className={"h-full w-full snap-end"}/>
                </div>
            </div>
        </div>
            <Script src={"/js/landingPage.js"}/>
            <Script src={"/js/landingpageIllusAnim.js"}/>
        </>
    );
}

export function WelcomePrez({className = ""}) {
    const colorName = "primary";
    return (
        <div className={className + " flex flex-col justify-end relative"} id={"prez-welcome"}>
            <div className={"prez-content absolute w-full h-full flex flex-col justify-around items-center"}>
                <div className={"flex flex-row-reverse md:justify-start justify-center w-2/3 z-30 max-lg:mt-20"}>
                    <Tour className={"drop-shadow-prez-illus shadow-primary-950 mb-10 stroke-primary-950"}/>
                    <Clocher className={"drop-shadow-prez-illus shadow-primary-950 mb-10 stroke-primary-950"}/>
                </div>
                <h1 className={"lg:mb-15 mb-5 p-1 text-center"}>
                    Bienvenue à <span
                    className={"bg-secondary rounded-tr-full rounded-bl-full rounded-tl-lg pl-1 pr-1 mb-3"}>Montcuq</span> !
                </h1>
                <div className={"text-primary-50 lg:mb-16 mb-10 text-md xl:w-3/6 lg:w-4/6 w-5/6"}>
                    <p>Visitez un village perché au coeur du Quercy-Blanc, un incontournable de la région !
                        Profitez de Montcuq durant tout l'été au travers de balades bucoliques, historiques et des
                        nombreuses animations proposées.
                    </p>
                    <p className={"max-md:hidden"}>
                        Terres de légendes et de traditions, vivez un séjour inoubliable au coeur de la campagne
                        Française. N'oubliez pas que dèrrière son nom quelque peut comique, Montcuq cache des plaisirs et trésors qu'il
                        ne tient qu'à vous d'explorer !
                    </p>
                    <p className={'mt-3 w-full flex flex-row justify-end'}><Link className={'ld ld-primary'} href={"/#next"}>Commencer
                        l'exploration &gt;</Link></p>
                </div>
            </div>
            <SVGBackground fillColors={[
                theme.colors?.primary['500'],
                theme.colors!.primary['700'],
                theme.colors!.primary['900']

            ]} strokeColor={theme.colors?.primary['950']}/>
        </div>
    )
}

export function VisitPrez({className = ""}) {
    const colorName = "secondary";
    return (
        <div className={className + " flex flex-col justify-end relative"} id={"prez-visit"}>
            <div className={"prez-content absolute w-full h-full flex flex-col justify-around items-center"}>
                <div className={"flex flex-row-reverse justify-center lg:w-5/12 md:w-7/12 w-11/12 z-30"}>
                    <Image src={'/SVG/visit-illus.svg'} alt={"Illustration de la section visiter: représent des panneaux, un chemin et un point d'arrivée"}
                           width={600} height={500}
                            className={"drop-shadow-prez-illus sm:mb-4 max-sm:mt-14"}/>
                </div>
                <h1 className={"mb-10 text-secondary-50"}>
                    Visitez, <span
                    className={"bg-primary rounded-tr-full rounded-bl-full rounded-tl-lg pl-1 pr-1 mb-3"}>Découvrez</span>
                </h1>
                <div className={"text-primary-50 text-md mb-10 lg:w-3/6 md:w-4/6 w-5/6"}>
                    <p>Du village aux prairies, en passant par le chateau, l'église, le marché et bien d'autres curiosités, Montcuq offre des possibilités
                        de découvertes uniques et taillées sur mesure aux goûts de chacun.
                    </p>
                    <p  className={"max-md:hidden"}>
                        Attention toutefois à ne pas vous perdre dans le Bosquet, les anciens racontent de drôles d'histoires à son sujet...
                    </p>
                    <p className={'mt-3 w-full flex flex-row justify-end'}>
                        <Link className={'ld ld-secondary'} href={"#"}>Carte interactive</Link>
                        <Link className={'ld ld-secondary ml-3'} href={"/#next"}>Suivant &gt;</Link>
                    </p>
                </div>
            </div>
            <SVGBackground fillColors={[
                theme.colors?.secondary['500'],
                theme.colors!.secondary['700'],
                theme.colors!.secondary['900']
            ]} strokeColor={theme.colors?.secondary['950']}/>
        </div>
    )
}

export function AnimationPrez({className = ""}) {
    const color = "mqpink"
    return (
        <div className={className + " flex flex-col justify-end relative"} id={"prez-animation"}>
            <div className={"prez-content absolute w-full h-full flex flex-col justify-around items-center"}>
                <div className={"flex flex-row justify-center self-end mr-40 sm:w-2/6 w-3/6 z-30"}>
                    <Image src={'/SVG/animation-illus.svg'}
                           alt={"Illustration de la section visiter: représent des panneaux, un chemin et un point d'arrivée"}
                           width={500} height={300}
                           className={"drop-shadow-prez-illus mt-16"}/>
                </div>
                <h1 className={"mb-10 text-mqpink-50"}>
                    Montcuq <span className={"bg-mqdimgreen-200 rounded-tr-full rounded-bl-full rounded-tl-lg pl-1 pr-1 mb-3"}>en fête</span>
                </h1>
                <div className={"text-mqpink-50 text-md mb-10 lg:w-3/6 w-5/6"}>
                    <p>Durant toute la saison, le comité des fêtes de Montcuq vous propose un florilège d'animations et d'évènements
                        dans tout le village. Musique, théâtre, spectacles, gastronomie ou traditions, il y en a pour tous les goûts !
                    </p>
                    <p className={'mt-3 w-full flex flex-row justify-end'}>
                        <Link className={"ld ld-mqpink"} href={"#"}>Voir la programmation</Link>
                        <Link className={'ld ld-mqpink ml-3'} href={"/#next"}>Suivant &gt;</Link>
                    </p>
                </div>
            </div>
            <SVGBackground fillColors={[
                theme.colors?.mqpink['500'],
                theme.colors!.mqpink['700'],
                theme.colors!.mqpink['900']
            ]} strokeColor={theme.colors?.mqpink['950']}/>
        </div>
    )
}

export function HostingPrez({className = ""}) {
    const colorName = "mqaqua";
    return (
        <div className={className + " flex flex-col justify-end relative"} id={"prez-hosting"}>
            <div className={"prez-content absolute w-full h-full flex flex-col justify-around items-center"}>
                <div className={"flex flex-row-reverse justify-start w-2/3 z-30"}>
                    <Image src={'/SVG/hosting-illus.svg'}
                           alt={"Illustration de la section visiter: représent des panneaux, un chemin et un point d'arrivée"}
                           width={500} height={400}
                           className={"drop-shadow-prez-illus sm:h-56 2xl:mt-14 sm:mb-5 max-sm:mt-14"}/>
                </div>
                <h1 className={"text-mqaqua-50"}>
                    <span
                    className={"bg-mqpurple-400 rounded-tr-full rounded-bl-full rounded-tl-lg pl-1 pr-1 mb-3"}>Dormir</span>
                    à Montcuq
                </h1>
                <div className={"text-mqaqua-50 text-md mb-10 md:w-3/6 w-5/6"}>
                    <p>Profitez d'une multitude d'hébergement typiques, rustiques ou moderne pour tous les budgets,
                        du camping à l'hôtel 5 étoiles et le tout dans un cadre enchanteur.
                    </p>
                    <p className={'mt-3 w-full flex flex-row justify-end'}>
                        <Link className={"ld ld-mqaqua"} href={"#"}>Réserver</Link>
                        <Link className={'ld ld-mqaqua ml-3'} href={"/#next"}>Suivant &gt;</Link>
                    </p>
                </div>
            </div>
            <SVGBackground fillColors={[
                theme.colors?.mqaqua['500'],
                theme.colors!.mqaqua['700'],
                theme.colors!.mqaqua['900']
            ]} strokeColor={theme.colors?.mqaqua['950']}/>
        </div>
    )
}

export function TravelPrez({className = ""}) {
    const colorName = "mqviolet";
    return (
        <div className={className + " flex flex-col justify-end relative"} id={"prez-travel"}>
            <div className={"prez-content absolute w-full h-full flex flex-col justify-around items-center"}>
                <div className={"flex flex-row-reverse justify-center md:w-8/12 w-11/12 z-30"}>
                    <Image src={'/SVG/travel-illus.svg'}
                           alt={"Illustration de la section voyager: Un ticket de train suivit d'une locomotive"}
                           width={600} height={500}
                           className={"drop-shadow-prez-illus md:mb-7 mt-20"}/>
                </div>
                <h1 className={"mb-10 text-mqviolet-200"}>
                    <span
                        className={"bg-red-400 rounded-tr-full rounded-bl-full rounded-tl-lg pl-1 pr-1 mb-3"}>Voyager</span>
                    à Montcuq
                </h1>
                <div className={"text-mqviolet-100 text-md mb-10 lg:w-3/6 md:w-4/6 w-5/6"}>
                    <p>Pour venir à montcuq, le train est la meilleure des solutions ! Profitez d'un voyage calme et rapide
                        à travers la France avant d'arriver à la destination de vos rêves.
                    </p>
                    <p className={'mt-3 w-full flex flex-row justify-end'}>
                        <Link className={"ld ld-mqviolet"} href={"#"}>Réserver</Link>
                        <Link className={'ld ld-mqviolet ml-3'} href={"/#next"}>Retour au début &gt;</Link>
                    </p>
                </div>
            </div>
            <SVGBackground fillColors={[
                theme.colors?.mqviolet['500'],
                theme.colors!.mqviolet['700'],
                theme.colors!.mqviolet['900']
            ]} strokeColor={theme.colors?.mqviolet['950']}/>
        </div>
    )
}

export function svgBackground(c: {
    cx?: number[] | number, cy?: number[] | number, rx?: number[] | number, ry?: number[] | number,
    fill?: string | string[], stroke?: string | string[]
}): string {
    if (c.cx && typeof c.cx === "number") c.cx = Array(3).fill(c.cx);
    if (c.cy && typeof c.cy === "number") c.cy = Array(3).fill(c.cy);
    if (c.rx && typeof c.rx === "number") c.rx = Array(3).fill(c.rx);
    if (c.ry && typeof c.ry === "number") c.ry = Array(3).fill(c.ry);
    if (c.fill && typeof c.fill === "string") c.fill = Array(3).fill(c.fill);
    if (c.stroke && typeof c.stroke === "string") c.stroke = Array(3).fill(c.stroke);

    return `
                <svg className={"self-center w-full basis-1/2"}>
                <ellipse className={"stroke-${c.stroke ? c.stroke[1] : "primary-950"} fill-${c.fill ? c.fill[1] : "primary-500"} "}
                         cx={c.cx ? c.cx[1] : "50%"} cy={c.cy ? c.cy[1] : "100%"} rx={c.rx ? c.rx[1] : "49%"} ry={c.ry ? c.ry[1] : "95%"}/>
                <ellipse className={"stroke-${c.stroke ? c.stroke[2] : "primary-950"} fill-${c.fill ? c.fill[2] : "primary-700"} "}
                         cx={c.cx ? c.cx[2] : "50%"} cy={c.cy ? c.cy[2] : "99%"} rx={c.rx ? c.rx[2] : "47%"} ry={c.ry ? c.ry[2] : "94%"}/>
                <ellipse className={"stroke-${c.stroke ? c.stroke[2] : "primary-950"} fill-${c.fill ? c.fill[2] : "primary-900"} "}
                         cx={c.cx ? c.cx[2] : "50%"} cy={c.cy ? c.cy[2] : "98%"} rx={c.rx ? c.rx[2] : "45%"} ry={c.ry ? c.ry[2] : "93%"}/>
            </svg>
    `
}

export function SVGBackground({fillColors, strokeColor}: {fillColors: string[], strokeColor: string}){
    return (
        <svg className={"w-full h-[90%]"}>
            <ellipse
                className={`md:rx-[60%] rx-[100%] sm:ry-[90%] ry-[89%]`}
                cx={"50%"} cy={"100%"} fill={fillColors[0]} stroke={strokeColor}/>
            <ellipse
                className={`md:rx-[57%] rx-[97%] sm:ry-[87%] ry-[86%] `}
                cx={"50%"} cy={"99%"} fill={fillColors[1]} stroke={strokeColor}/>
            <ellipse
                className={`md:rx-[53%] rx-[94%] sm:ry-[84%] ry-[83%]`}
                cx={"50%"} cy={"98%"} fill={fillColors[2]} stroke={strokeColor}/>
        </svg>
    )
}