import { getInteriors, getOrders, getPaints, getTechnologies, getWheels } from "./dataAccess.js"

const paints = getPaints()
const interiors = getInteriors()
const technologies = getTechnologies()
const wheels = getWheels()

const buildOrderListItem = (order) => {
    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find((paint) => paint.id === order.paintId)
    const foundInterior = interiors.find((interior) => interior.id === order.interiorId)
    const foundTechnology = technologies.find((technology) => technology.id === order.technologyId)
    const foundWheels = wheels.find((wheel) => wheel.id === order.wheelId)

    let totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price

    if (order.modelId === 2) {
        totalCost *= 1.5
    } else if (order.modelId === 3) {
        totalCost *= 2.25
    }

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map((order) => buildOrderListItem(order))

    html += listItems.join("")
    html += "</ul>"

    return html
}