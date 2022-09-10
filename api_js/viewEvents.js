// import { createCountryListValue } from "./manager.js"
import { createCountryListValue } from "./manager.js"
/** while events append notice to manger */
export const declareEvnets = (doApi) => {
    const input = document.querySelector("#id_input")
    // if button pressed
    document.querySelector("#btnSearch").addEventListener("click", () => {
        createCountryListValue(input.value)
    })
    // pressed enter
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
            // createCountryListValue(input.value)
            createCountryListValue(input.value)
        }
    })
   

}










