

export default function MQLogoFull({className="", bg = "bg-primary-700", stroke=4, size=1, id=""}) {
    const h = 80 * size
    const w = 250 * size
    return (
        <div className={className} style={{height: h, width: w}} id={id}>
            <div style={{
                maskImage: "url(/SVG/logoNoir.svg)",
                maskRepeat: 'no-repeat',
                height: h,
                width: w,
            }} className={bg}></div>
        </div>
    )
}