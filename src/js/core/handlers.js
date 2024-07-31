import { productRender } from "./product.js";
import { addRecordHandler, createRecord, deleteRecord, subRecordhandler, updateRecord, updateRecordTotal } from "./records.js";
import { createProductForm, inventorySheet, newProductCreateForm, rowGroup } from "./selectors.js";
import { products } from "./variables.js";

export const createProductFormHandler = (e) => {
    e.preventDefault();
    // console.log(productName.value);
    // console.log(inputQuantity.valueAsNumber);

    const formData = new FormData(createProductForm);
    const currentProductName = parseInt(formData.get("productName"));
    const currentProduct = products.find((el) => el.id === currentProductName);
    const currentQuantity = parseInt(formData.get("inputQuantity"));

    const isExistedRow = rowGroup.querySelector(`[row-product-id = '${currentProductName}']`)
    // console.log(isExistedRow);
    if(isExistedRow){
        // const currentQuantityElement = isExistedRow.querySelector(".row-quantity")
        // const currentCost = isExistedRow.querySelector(".row-cost")
        // const currentPrice = isExistedRow.querySelector(".row-product-price")
        // currentQuantityElement.innerText = parseInt(currentQuantityElement.innerText) + currentQuantity;
        // currentCost.innerText = currentPrice.innerText * currentQuantityElement.innerText;
        updateRecord(isExistedRow.getAttribute("row-product-id"),currentQuantity)
    }else{
        rowGroup.append(createRecord(currentProduct, currentQuantity));
    }
    updateRecordTotal();
    createProductForm.reset();
}

export const rowGroupHandler = (event) => {
    if (event.target.classList.contains("row-del-btn")){
        deleteRecord(event);
        // console.log("u deleted")
    }else if (event.target.classList.contains("row-add-btn")){
        // console.log("u addded");
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"), 1);
    }else if (event.target.classList.contains("row-sub-btn")){
        updateRecord(event.target.closest(".row").getAttribute("row-product-id"), -1);
    }
}

export const manageInventoryBtnHandler = () => {
    inventorySheet.classList.toggle("-translate-x-full");
}

export const newProductCreateFormHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(newProductCreateForm);
    const newProduct = {
        id : Date.now(),
        name : formData.get("new_product_name"),
        price : formData.get("new_product_price")
    };

    products.push(newProduct);
    productRender(products);

    newProductCreateForm.reset();
}

export const printBtnHandler = () => {
    window.print();
}