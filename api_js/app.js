import { creatCountryList, showLoading, hideLoading } from "./manager.js";
import { declareEvnets} from "./viewEvents.js";


const init = () => {
    doApi();
    declareEvnets(doApi) 
}

const doApi = async() => {
     showLoading();
    let url = `https://restcountries.com/v3.1/all`;
    let resp = await fetch(url);
    let data = await resp.json();
    // five_ar = data;
    console.log(data)
    // console.log(filter_ar);
    creatCountryList(data)
}

init();