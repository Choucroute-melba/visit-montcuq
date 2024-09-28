export type ArrowIconProps = {
    circleFill?: string,
    arrowFill?: string,
    circleStroke?: string,
    arrowStroke?: string,
    className?: string
}

export default function Arrow({circleFill = "#f59e0b", arrowFill = "#fef3c7",
                                  arrowStroke = "#000", circleStroke = "#000",
                                  className = ""}: ArrowIconProps) {
    return (
        <svg id="Calque_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 154 154" className={className}>
            <circle id="circle" cx="77" cy="77" r="75" fill={circleFill} stroke={circleStroke} strokeMiterlimit="10" strokeWidth="4"/>
            <path id="arrow"
                  d="M142,76.24c0,.69-.52,1.27-1.21,1.34-9.32.93-19.47,1.59-28.78,2.14-19.98,1.12-39.96,1.68-59.96,1.92-3.9.05-8.02.08-12.13.09-1.28,0-1.83,1.61-.82,2.39,10.11,7.87,20.03,15.98,29.64,24.45,4.45,3.93,8.85,7.92,13.08,12.09.48.48.53,1.25.11,1.78l-.02.03c-.42.54-1.18.68-1.77.32-19.88-12.19-38.5-26.32-56.73-40.81-1.69-1.19-.89-3.77-1.39-5.74-.04-.17-.04-.35.01-.52.59-1.83.17-4.14,1.79-5.19l3.71-2.95c2.46-1.98,4.96-3.91,7.44-5.86,9.97-7.76,20.07-15.33,30.42-22.59,4.77-3.33,9.8-6.78,14.74-9.93.58-.37,1.35-.24,1.78.31.43.54.37,1.32-.13,1.8-.86.81-1.73,1.6-2.59,2.41-3.43,3.11-7.18,6.44-10.67,9.42-9.59,8.22-19.42,16.14-29.41,23.88-.39.3-.78.6-1.18.91-1.01.78-.46,2.39.81,2.39,9.45.07,18.95.22,28.31.45,24.55.68,49.26,1.69,73.72,4.13.69.07,1.22.65,1.22,1.35Z"
                  fill={arrowFill} stroke={arrowStroke} strokeMiterlimit="10" strokeWidth="2"/>
        </svg>

    )
}