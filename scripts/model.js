import { setModel } from "./dataAccess.js"

//set state using change listener
document.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "model") {
        setModel(parseInt(changeEvent.target.value))
    }
}
)

export const modelSection = () => {
    let html = `<section class="choices--model options">`

    html += `
        <h2>Model</h2>
        <select id="model">
            <option value="0">Select a model</option>
            <option value="1">Car</option>
            <option value="2">SUV</option>
            <option value="3">Truck</option>
        </select>
    </section>`

    return html

}
