const fs = require('fs')

const jsonc = fs.readFileSync('./colors.json').toString()
const obj = JSON.parse(jsonc)
let twc = {}
let twcs = "{\n"

for(let k in obj) {
    twc['mq' + k] = {}
    twcs += `\t'mq${k}': {\n`
    for(let i = 0; i < obj[k].length; i++) {
        if(i === 10) {
            twc['mq' + k][950] = obj[k][i];
            twcs += `\t\t'${950}': '${obj[k][i]}'`
        }
        else if (i === 0){
            twc['mq' + k][50] = obj[k][i];
            twcs += `\t\t'${50}': '${obj[k][i]}'`
        }
        else  {
            twc['mq' + k][i * 100] = obj[k][i]
            twcs += `\t\t'${i * 100}': '${obj[k][i]}'`
        }
        if(i < obj[k].length - 1)
            twcs += `,\n`
        else
            twcs += `\n`
    }
    twcs += `\t},\n`
}
twcs[twcs.length - 2] = ''
twcs += `}`
console.log(twcs)

fs.writeFileSync("../app/colors/colors.ts", "const MQColors = " + twcs + "\n\nexport default MQColors;")

