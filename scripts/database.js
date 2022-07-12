const database = {
    paints: [
        {id: 1, option: "Silver", price: 1200},
        {id: 2, option: "Midnight Blue", price: 1400},
        {id: 3, option: "Firebrick Red", price: 1400},
        {id: 4, option: "Spring Green", price: 1400},
    ],
    interiors: [
        {id: 1, option: "Beige Fabric", price: 600},
        {id: 2, option: "Charcoal Fabric", price: 600},
        {id: 3, option: "White Leather", price: 1100},
        {id: 4, option: "Black Leather", price: 1100},
    ],
    technologies: [
        {id: 1, option: "Basic Package", price: 400},
        {id: 2, option: "Navigation Package", price: 600},
        {id: 3, option: "Visibility Package", price: 800},
        {id: 4, option: "Ultra Package", price: 1200},
    ],
    wheels: [
        {id: 1, option: "17-inch Pair Radial", price: 500},
        {id: 2, option: "17-inch Pair Radial Black", price: 650},
        {id: 3, option: "18-inch Pair Spoke Silver", price: 850},
        {id: 4, option: "18-inch Pair Spoke Black", price: 850},
    ],
    customOrders: [
        {id: 1, paintId: 3, interiorId: 2, technologyId: 3, wheelId: 3}
    ],
    orderBuilder: {}
}


export const getPaints = () => database.paints.map(paint => ({...paint}))
export const getInteriors = () => database.interiors.map(interior => ({...interior}))
export const getTechnologies = () => database.technologies.map(technology => ({...technology}))
export const getWheels = () => database.wheels.map(wheel => ({...wheel}))
export const getOrders = () => database.customOrders.map(order => ({...order}))

export const setPaint = (id) => database.orderBuilder.paintId = id
export const setInterior = (id) => database.orderBuilder.interiorId = id
export const setTechnology = (id) => database.orderBuilder.technologyId = id
export const setWheel = (id) => database.orderBuilder.wheelId = id

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

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
