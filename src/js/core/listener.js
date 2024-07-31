import { createProductFormHandler, manageInventoryBtnHandler, newProductCreateFormHandler, printBtnHandler, rowGroupHandler } from "./handlers.js"
import { createProductForm, inventorySheetCloseBtn, manageInventoryBtn, newProductCreateForm, printBtn, rowGroup } from "./selectors.js"

const listener =() => {
    createProductForm.addEventListener("submit",createProductFormHandler)
    rowGroup.addEventListener("click",rowGroupHandler)
    manageInventoryBtn.addEventListener("click",manageInventoryBtnHandler)
    inventorySheetCloseBtn.addEventListener("click",manageInventoryBtnHandler)
    newProductCreateForm.addEventListener("submit",newProductCreateFormHandler)
    printBtn.addEventListener("click",printBtnHandler)
}

export default listener;