import initialRender from "./core/IniRender.js";
import listener from "./core/listener.js";
import { observer } from "./observer.js";

class Invoice {
    init (){
        console.log("Invoice App Start.")
        initialRender();

        listener();

        observer();
    }
}

export default Invoice;