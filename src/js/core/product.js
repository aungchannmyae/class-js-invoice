import { productGroup, productTemplate } from "./selectors.js";

export const createProducts = ({name, price}) => {
    // const option = document.createElement("option")
    // option.innerText = product.name;
    // option.value = product.id;
    // return option;

    const card = productTemplate.content.cloneNode(true);
    card.querySelector(".product-name").innerText = name;
    card.querySelector(".product-price").innerText = price;
    return card;
}

export const productRender = (products) => {
    productName.innerHTML = "";
    productGroup.innerHTML = "";
    products.forEach(({name, price, id}) =>{
            productName.append(new Option(name, id));
            productGroup.append(createProducts({name, price}));
        }
    );
}