import { choseSectionHTML, orderSectionHTML } from "./carstructure.js"
import { addCustomOrder, setInterior, setPaint, setTechnology, setWheel } from "./database.js"

const contentTarget = document.querySelector("#content")

const renderHTML = () => {
    contentTarget.innerHTML = `
    ${choseSectionHTML()}
    ${orderSectionHTML()}
    `
}

renderHTML()

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        setPaint(parseInt(changeEvent.target.value))
    }
}
)

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInterior(parseInt(changeEvent.target.value))
    }
}
)

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        setTechnology(parseInt(changeEvent.target.value))
    }
}
)

document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        setWheel(parseInt(changeEvent.target.value))
    }
}
)

document.addEventListener("click",(event) => {
    if (event.target.id === "orderButton") {
        addCustomOrder()
    }
}
)

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderHTML()
})
