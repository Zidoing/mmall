import './tab.css'


import {getData} from "../../../../api/getData";


class Tab {
    constructor(el) {
        this.itemEls = el.querySelectorAll('.tab-item')
    }

    setActiveItem(index) {
        this.itemEls.forEach(item => {
            item.classList.remove("tab-item-active")
        })
        this.itemEls[index].classList.add("tab-item-active")
    }


    to(index) {
        if (this.dataPromise && this.dataPromise.xhr) {
            this.dataPromise.xhr.abort();
        }
        this.setActiveItem(index);
        this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`)


        return this.dataPromise
    }
}

const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content'

export default Tab;
