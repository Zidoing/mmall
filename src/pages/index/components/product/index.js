import './product.css';
import {getData} from "../../../../api/getData";
import render from './item.art'

getData("https://www.imooc.com/api/mall-wepApp/index/product?icode=xxx").then(
    data => {
        if (data.code !== 1001) {
            document.getElementById("product-list").innerHTML = render({
                items: data
            })
        }

    }
)
