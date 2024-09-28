import theme from "tailwindcss/defaultTheme";
import MQColors from "@/app/colors/colors";


export default function Clocher({className = "", scale = 0.30}) {
    const h = 1024*scale
    const w = 490*scale

    const h25 = 256
    const h50 = 512
    const h15 = 153
    const h10 = 102

    const w25 = 123
    const w50 = 247
    const w15 = 74
    const w10 = 49

    return (
            <svg id="clocher" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 490 1024`} width={w} height={h}
                 className={className + " max-sm:h-[153px] max-sm:w-[74px]"}>
                <defs>
                    <radialGradient id={"clocherFill"} cx={0.10} cy={0.10}>
                        <stop offset={"0%"} stopColor={MQColors.mqamber["50"]}/>
                        <stop offset={"100%"} stopColor={MQColors.mqamber["100"]}/>
                    </radialGradient>
                </defs>
                <path
                    fill={'url(#clocherFill)'}
                    d="M470.8,164.01H19.42v354.21h451.38V164.01ZM65.5,494.79l-29.9-5.43v-206.72c0-5.88,10.97-16.09,14.98-16.09s14.92,10.22,14.92,16.09v212.14ZM198.18,494.28h-71.37v-200.07c0-7.79,8.15-27.65,35.66-27.65,23.49,0,35.72,19.86,35.72,27.65v200.07ZM363.47,494.28h-71.43v-200.07c0-7.79,8.15-27.65,35.72-27.65,23.43,0,35.72,19.86,35.72,27.65v200.07ZM425.08,494.82v-214.89c0-5.88,10.91-16.09,14.92-16.09s14.98,10.22,14.98,16.09v207.29l-29.9,7.6Z"/>
                <polygon points="476.46 158.57 490.21 153.59 245.11 50.96 0 153.59 13.76 158.57 476.46 158.57" fill={'url(#clocherFill)'} />
                <path
                    fill={'url(#clocherFill)'}
                    d="M19.42,523.65v495.56h451.38v-495.56H19.42ZM65.32,831.24l-29.9-5.43v-206.72c0-5.88,10.97-16.09,14.98-16.09s14.92,10.22,14.92,16.09v212.14ZM198,830.73h-71.37v-200.07c0-7.79,8.15-27.65,35.66-27.65,23.49,0,35.72,19.86,35.72,27.65v200.07ZM363.28,830.73h-71.43v-200.07c0-7.79,8.15-27.65,35.72-27.65,23.43,0,35.72,19.86,35.72,27.65v200.07ZM454.8,823.67l-29.9,7.6v-214.89c0-5.88,10.91-16.09,14.92-16.09s14.98,10.22,14.98,16.09v207.29Z"/>
                <line x1="245.11" y1="57.92" x2="245.11" fill="none" stroke="#000" strokeMiterlimit="10"
                      strokeWidth=".75"/>
            </svg>

    )

}