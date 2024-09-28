
const discover = document.getElementById('discover');
const logo = document.getElementById("mainlogo")

const fabTravel = document.getElementById('fab-travel');
const fabHosting = document.getElementById('fab-hosting');
const fabAnim = document.getElementById('fab-animation');
const fabVisit = document.getElementById('fab-visit');

const prezTravel = document.getElementById('prez-travel');
const prezHosting = document.getElementById('prez-hosting');
const prezAnim = document.getElementById('prez-animation');
const prezVisit = document.getElementById('prez-visit');
const prezWelcome = document.getElementById('prez-welcome');

const _picturesShower = document.getElementById('pictures-shower');

const colors = {
    'prez-welcome': "theme('colors.secondary.100')",
    'prez-visit': "theme('colors.primary.50')",
    'prez-animation': "theme('colors.mqdimgreen.100')",
    'prez-hosting': "theme('colors.mqpurple.100')",
    'prez-travel': "theme('colros.red.200')"
}

const prezs = [prezTravel, prezHosting, prezAnim, prezVisit, prezWelcome];
const fabs = [fabTravel, fabHosting, fabAnim, fabVisit];

let displayedPrez = prezWelcome;
let focused = null;


discover.addEventListener('mouseleave', (e) => {
    if(!focused) {
        showPrez(prezWelcome.id);
    } else {
        showPrez(focused.id);
    }
})

logo.addEventListener('click', (e) => {
    focused = null
    showPrez(prezWelcome.id)
})

fabs.forEach(fab => {
    fab.addEventListener('mouseenter', onMouseEnterFAB);
    fab.addEventListener('click', (e) => {
        onFabClick(e, fab);
    });
});

function onMouseEnterFAB(e) {
    const targetedFab = fabs.find(fab => fab.id === e.target.id);
    showPrez(relatedPrez(targetedFab).id);
}

function onFabClick(e, fab) {
    const prez = relatedPrez(fab)
    showPrez(prez.id);
    focused = prez;
}

function showPrez(id) {
    _picturesShower.style.backgroundColor = colors[id];
    console.log(_picturesShower, _picturesShower.style.backgroundColor)
    prezs.forEach(prez => {
        if(prez.id === id) {
            prez.style.display = 'flex';
            displayedPrez = prez;
        } else {
            prez.style.display = 'none';
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

function isCursorOnFABZone(p, origin, radius) {
    return Math.sqrt(Math.pow(p.x - origin.x, 2) + Math.pow(p.y - origin.y, 2)) < radius;
}