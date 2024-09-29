const discover = document.getElementById('discover');
const logo = document.getElementById("mainlogo")

const fabTravel = document.getElementById('fab-travel');
const fabHosting = document.getElementById('fab-hosting');
const fabAnim = document.getElementById('fab-animation');
const fabVisit = document.getElementById('fab-visit');

const linkTravel = document.querySelector('a[href="/#prez-travel"]');
const linkHosting = document.querySelector('a[href="/#prez-hosting"]');
const linkAnim = document.querySelector('a[href="/#prez-animation"]');
const linkVisit = document.querySelector('a[href="/#prez-visit"]');
const linkWelcome = document.querySelector('a[href="/#prez-welcome"]');

const linkNext = document.querySelectorAll('a[href="/#next"]');
const linkPrev = document.querySelectorAll('a[href="/#previous"]');
const linkPause = document.querySelectorAll('a[href="/#pause"]');

const prezTravel = document.getElementById('prez-travel');
const prezHosting = document.getElementById('prez-hosting');
const prezAnim = document.getElementById('prez-animation');
const prezVisit = document.getElementById('prez-visit');
const prezWelcome = document.getElementById('prez-welcome');

const _picturesShower = document.getElementById('pictures-shower');

const colors = {
    'prez-welcome': '#cff8c7',
    'prez-visit': "#fbf3d4",
    'prez-animation': "#d3fba6",
    'prez-hosting': "#ece5f8",
    'prez-travel': "#f3cccb"
}

const prezs = [prezWelcome, prezVisit, prezAnim, prezHosting, prezTravel];
const fabs = [fabTravel, fabHosting, fabAnim, fabVisit];
const links = [linkTravel, linkHosting, linkAnim, linkVisit, linkWelcome];

let displayedPrez = prezWelcome;
let focused = null;
let paused = false;


/*discover.addEventListener('mouseleave', (e) => {
    if(!focused) {
        showPrez(prezWelcome.id);
    } else {
        showPrez(focused.id);
    }
})*/

logo.addEventListener('click', (e) => {
    focused = null
    showPrez(prezWelcome.id)
})

fabs.forEach(fab => {
    // fab.addEventListener('mouseenter', onMouseEnterFAB);
    fab.addEventListener('click', (e) => { onFabClick(e, fab); });
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showPrez(link.href.split('#')[1]);
    });
});

linkNext.forEach((l) => {
    l.addEventListener('click', (e) => {
        e.preventDefault()
        let next = prezs[(prezs.indexOf(displayedPrez) + 1) % prezs.length];
        paused = true;
        changePlayPauseImg()
        showPrez(next.id);
    });
});

linkPrev.forEach((l) => {
    l.addEventListener('click', (e) => {
        e.preventDefault()
        let prev = prezs[(prezs.indexOf(displayedPrez) - 1 + prezs.length) % prezs.length];
        paused = true;
        changePlayPauseImg()
        showPrez(prev.id);
    });
})

linkPause.forEach((l) => {
    l.addEventListener('click', (e) => {
        e.preventDefault()
        paused = !paused;
        changePlayPauseImg();
    });
})

window.setInterval(() => {
    if(!paused) {
        let next = prezs[(prezs.indexOf(displayedPrez) + 1) % prezs.length];
        showPrez(next.id);
    }
}, 10000);


showPrez("prez-welcome");


function onMouseEnterFAB(e) {
    const targetedFab = fabs.find(fab => fab.id === e.target.id);
    showPrez(relatedPrez(targetedFab).id);
    paused = true;
    changePlayPauseImg();
}

function onFabClick(e, fab) {
    const prez = relatedPrez(fab)
    showPrez(prez.id);
    paused = true;
    changePlayPauseImg();
    focused = prez;
}

function showPrez(id) {
    _picturesShower.style.backgroundColor = colors[id];
    console.log(_picturesShower, _picturesShower.style.backgroundColor)
    prezs.forEach(prez => {
        if(prez.id === id) {
            prez.scrollIntoView({behavior: "smooth", block: "end", inline: "start"});
            displayedPrez = prez;
        }
    });
}

function relatedPrez(fab) {
    switch(fab.id) {
        case "fab-travel":
            return prezTravel;
        case "fab-hosting":
            return prezHosting;
        case "fab-animation":
            return prezAnim;
        case "fab-visit":
            return prezVisit;
        default:
            return null;
    }
}

function changePlayPauseImg() {
    linkPause.forEach((l) => {
        l.children[0].src = paused ? "/icons/SVG/play.svg" : "/icons/SVG/pause.svg";
    })
}

function isCursorOnFABZone(p, origin, radius) {
    return Math.sqrt(Math.pow(p.x - origin.x, 2) + Math.pow(p.y - origin.y, 2)) < radius;
}