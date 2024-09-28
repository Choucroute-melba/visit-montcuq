const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    xxl: 1536,
}

let height = window.innerHeight;
let width = window.innerWidth;

const picturesShower = document.getElementById('pictures-shower');
const bgClipper = document.getElementById("bg-clipper");
const pictures = picturesShower.querySelectorAll('.bubble-image')
const motionOption = document.getElementById('reduces-motion')

let motion = motionOption.checked
const bubbles = []
let interval = null


// make the clipper img match the screen size
sizeImg()

motionOption.addEventListener('change', (e) => {
    motion = (e.target.checked)
})


pictures.forEach((picture) => {
    bubbles.push({
        x: (Math.random() - 0.2) * width,
        y: Math.random() * height,
        speedFactor: 0.5 + Math.random() * 0.8,
        scale: 0.5 + Math.random() * 0.6,
        pic: picture
    })

})

bubbles.forEach((b) => {
    b.pic.style.transform = `scale(${b.scale})`
    b.pic.style.display = 'block'
    b.pic.addEventListener('mouseover', (e) => {
        b.pic.style.transform = `scale(${b.scale * 1.1})`
    })
    b.pic.addEventListener('mouseleave', (e) => {
        b.pic.style.transform = `scale(${b.scale})`
    })
})

if(motion)
    interval = window.setInterval(() => {
        if(motion)
            moveBubbles()
    }, 350)

window.addEventListener('resize', (e) => {
    height = window.innerHeight;
    width = window.innerWidth;
    sizeImg()
});

function sizeImg() {
    if(window.innerWidth < breakpoints.sm)
        bgClipper.src = "/SVG/bg-clipper@phone.svg"
    else if(window.innerWidth < breakpoints.md)
        bgClipper.src = "/SVG/bg-clipper@sm.svg"
    else if(window.innerWidth < breakpoints.lg)
        bgClipper.src = "/SVG/bg-clipper@md.svg"
    else if(window.innerWidth < breakpoints.xl)
        bgClipper.src = "/SVG/bg-clipper@lg.svg"
    else if(window.innerWidth < breakpoints.xxl)
        bgClipper.src = "/SVG/bg-clipper@xl.svg"
    else
        bgClipper.src = "/SVG/bg-clipper@2xl.svg"
}

function moveBubbles() {
    bubbles.forEach((b) => {
        let trans = false

        let dx = 0
        let dy = -5
        b.x += dx * b.speedFactor
        b.y += dy * b.speedFactor
        if(b.y < 0 - b.pic.getBoundingClientRect().height) {
            trans = true
            b.pic.style.display = 'none'
            window.setTimeout(() => {b.pic.style.display = "block"}, 1100)
            b.y = height
            b.x = Math.random() * width
        }
        b.pic.style.top = b.y + 'px'
        b.pic.style.left = b.x + 'px'

    })
}