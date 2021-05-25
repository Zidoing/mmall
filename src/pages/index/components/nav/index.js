import './nav.css'


import {getData, getDelayedData} from "api/getData";
import render from './nav.art';


getData("https://www.imooc.com/api/mall-wepApp/index/nav").then(
    data => {
        document.getElementById("index-nav").innerHTML = render({
            items: data
        })
    }
)
