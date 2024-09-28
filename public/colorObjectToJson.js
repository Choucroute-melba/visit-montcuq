const fs = require('fs');

const colorObject = {};
const twColorsObjStr = fs.readFileSync("./twcolors.json", "utf8");
const twColorsObj = JSON.parse(twColorsObjStr);

ghObj = {};

for (const color in twColorsObj) {
    ghObj[color] = [];
    for (const shade in twColorsObj[color]) {
        ghObj[color].push(twColorsObj[color][shade]);
    }
}

console.log(JSON.stringify(ghObj, null, 2));
fs.writeFileSync("./twcolorsforgh.json", JSON.stringify(ghObj, null, 2));