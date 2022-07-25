import { database } from "./database.js";

export const getPaints = () => database.paints.map(paint => ({ ...paint }))
export const getInteriors = () => database.interiors.map(interior => ({ ...interior }))
export const getTechnologies = () => database.technologies.map(technology => ({ ...technology }))
export const getWheels = () => database.wheels.map(wheel => ({ ...wheel }))
export const getOrders = () => database.customOrders.map(order => ({ ...order }))

export const setPaint = (id) => database.orderBuilder.paintId = id
export const setInterior = (id) => database.orderBuilder.interiorId = id
export const setTechnology = (id) => database.orderBuilder.technologyId = id
export const setWheel = (id) => database.orderBuilder.wheelId = id
export const setModel = (id) => database.orderBuilder.modelId = id

export const addCustomOrder = () => {

    // Error handling, only go through with function block if all options are set
    if (database.orderBuilder.paintId &&
        database.orderBuilder.interiorId &&
        database.orderBuilder.technologyId &&
        database.orderBuilder.wheelId &&
        database.orderBuilder.modelId) {

        // Copy the current state of user choices
        const newOrder = { ...database.orderBuilder }

        // Add a new primary key to the object
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1

        // Add a timestamp to the order
        newOrder.timestamp = Date.now()

        // Add the new order object to custom orders state
        database.customOrders.push(newOrder)

        // Reset the temporary state for user choices
        database.orderBuilder = {}

        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
}
