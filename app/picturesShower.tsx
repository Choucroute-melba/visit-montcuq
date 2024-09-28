import {useEffect} from "react";
import Script from "next/script";

export default function PicturesShower( ) {
    return (
        <>
            <div id={"pictures-shower"} className={"absolute h-full w-full z-10 overflow-hidden"}>
                <img className={"bubble-image"} id="montcuqDrone1" src="/montcuqDrone1.jpg" alt="Vue drone du village de Montcuq | © Lot Tourisme - Cyril Novello"/>
                <img className={"bubble-image"} id="bougies" src="/bougies.jpg" alt="230518130340 Bougie allumée à la gloire de Dieu © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="librairie" src="/librairie.jpg" alt="230517155203 Books _ Company, libraire à Montcuq © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="egliseImg" src="/eglise.jpg" alt="230517152950 Dans les ruelles de Montcuq © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="tourImg" src="/tour.jpg" alt="230517153303 Découverte de la tour de Montcuq © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="rue1" src="/rue1.jpg" alt="230517135510 Découverte de Montcuq-en-Quercy © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="moulin" src="/moulin.jpg" alt="230516155212 Moulin de Boisse - sur les traces des 2 jours de Montcuq © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="drone2" src="/drone2.jpg" alt="220703085459 Vue drone du village de Montcuq © Lot Tourisme - Cyril Novello.jpg"/>
                <img className={"bubble-image"} id="drone3" src="/drone3.jpg" alt="220703085255 Vue drone du village de Montcuq © Lot Tourisme - Cyril Novello.jpg"/>
                <img className={"bubble-image"} id="poney" src="/poney.jpg" alt="230516151340 Sur les traces des 2 jours de Montcuq - rando équestre en, Quercy Blanc © Marion Carcel.jpg"/>
                <img className={"bubble-image"} id="logement" src="/logement.jpg" alt="190610175603 Location le Perchoir du Quercy - terrasse Le Perchoir du Quercy- N. Mayonnade.jpg"/>
                <img className={"bubble-image"} id="eau" src="/eau.jpg" alt="Plan d_eau à Montcuq © Lot Tourisme - C. Novello 170727-144019.jpg"/>
                <img className={"bubble-image"} id="egliseCouleur" src="/egliseCouleur.jpg" alt="Eglise de Montcuq © Lot Tourisme - P. Lê 151209-163016.jpg"/>
                <img className={"bubble-image"} id="marche" src="/marche.jpg" alt="220703091749 Vue drone du village de Montcuq © Lot Tourisme - Cyril Novello.jpg"/>
                <img className={"bubble-image"} id="drone4" src="/drone4.jpg" alt="220703085448 Vue drone du village de Montcuq © Lot Tourisme - Cyril Novello.jpg"/>
                <img className={"bubble-image"} id="bouffe" src="/bouffe.jpg" alt="Marché de producteurs à Montcuq © Lot Tourisme - C. Novello 170727-124952.jpg"/>
                <img className={"bubble-image"} id="drone5" src="/drone5.jpg" alt="220703081215 Vue drone du village de Montcuq © Lot Tourisme - Cyril Novello.jpg"/>

                <img id={"bg-clipper"} src={'/SVG/bg-clipper@phone.svg'} alt={"clipper"}
                     className={"absolute top-0 left-0"}/>
            </div>
            <Script src={"/js/picturesShower.js"}/>
        </>
    )
}