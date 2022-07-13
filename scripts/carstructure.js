import { getInteriors, getPaints, getTechnologies, getWheels } from "./database.js"
import { modelSection } from "./model.js"
import { Orders } from "./order.js"

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildSection = (sectionName, optionsArray) => {

    const lowerCaseName = sectionName.toLowerCase()
    let html = `<section class="choices--${lowerCaseName} options">`
    html += `<h2>${sectionName} Options</h2>`

    //set element id to name of array or find other solution
    html += `<select id="${lowerCaseName}">`
    html += `<option value="0">Select a ${lowerCaseName} option</option>`

    optionsArray.forEach((option) => { 
        html += `<option value="${option.id}">${option.option}</option>`
    })

    html += "</select></section>"
    return html
}

export const choseSectionHTML = () => {
    return `
    <h1>Cars-R-Us</h1>
    <article class="choices">
        ${buildSection("Paint", paints)}
        ${buildSection("Interior", interiors)}
        ${buildSection("Technology", technologies)}
        ${buildSection("Wheel", wheels)}
        ${modelSection()}
    </article>
    `
}
export const orderSectionHTML = () => {
    return `
    <article>
        <button id="orderButton">Create Custom Order</button>
    </article>

    <article class="customOrders">
        <h2>Custom Car Orders</h2>
        ${Orders()}
    </article>
    `
}
