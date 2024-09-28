import MQColors from "@/app/colors/colors";


export default function Tour({className="", scale=0.25}) {
    const h = 1024 * scale
    const w = 494 * scale
    const h25 = 256
    const h50 = 512
    const h15 = 153
    const h10 = 102

    const w25 = 123
    const w50 = 247
    const w15 = 74
    const w10 = 49


    return (
        <svg id="tour" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 494.81 1024" height={h} width={w}
             className={className + " max-sm:h-[153px] max-sm:w-[74px]"}>
            <defs>
                <radialGradient id={"tourFill"} cx={0.10} cy={0.10} r={1.3}>
                    <stop offset={"0%"} stopColor={MQColors.mqamber["100"]}/>
                    <stop offset={"100%"} stopColor={MQColors.mqamber["200"]}/>
                </radialGradient>
            </defs>
            <path
                fill={'url(#tourFill)'}
                d="M464.99,120.37c-9.19,1.1-9.61,4.18-10.01,4.8-10.2,23.47-14.02,27.41-24.22,50.88h-2.89v847.94h66.93V125.58c-3.92-5.84-22.09-6.13-29.82-5.21Z"/>
            <path

                fill={'url(#tourFill)'}
                d="M0,176.06v847.94h416.96V176.06H0ZM358.08,192.17h7.28v15.13h-7.28v-15.13ZM332.3,192.17h7.28v15.13h-7.28v-15.13ZM203.38,192.17h7.28v15.13h-7.28v-15.13ZM30.17,207.3h-7.28v-15.13h7.28v15.13ZM55.96,207.3h-7.28v-15.13h7.28v15.13ZM81.74,207.3h-7.28v-15.13h7.28v15.13ZM107.52,207.3h-7.28v-15.13h7.28v15.13ZM133.31,207.3h-7.28v-15.13h7.28v15.13ZM159.09,207.3h-7.28v-15.13h7.28v15.13ZM184.87,207.3h-7.28v-15.13h7.28v15.13ZM216.12,332.16h-15.28v-32.16h15.28v32.16ZM236.44,207.3h-7.28v-15.13h7.28v15.13ZM262.23,207.3h-7.28v-15.13h7.28v15.13ZM288.01,207.3h-7.28v-15.13h7.28v15.13ZM313.79,207.3h-7.28v-15.13h7.28v15.13ZM368.21,483.57h-45.12v-68.97h.03s0-.02,0-.03c0-6.58,10.09-20.32,22.57-20.32s22.49,13.75,22.49,20.32c0,0,0,.02,0,.03h.04v68.97ZM391.14,207.3h-7.28v-15.13h7.28v15.13Z"/>
        </svg>
    )
}