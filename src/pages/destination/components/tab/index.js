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
        this.setActiveItem(index);
        return getData(`${URL}/${this.itemEls[index].dataset.id}`)
    }
}

const URL = 'https://www.imooc.com/api/mall-wepApp/destination/content'

export default Tab;
