import './main.css'
import Tab from "../tab";
import Content from "../content";
import '../content'
import 'components/loading'


const tabEl = document.querySelector(".tab")
const tab = new Tab(tabEl);
const content = new Content(document.getElementById("destination-content"))
// tab.to(2).then(data => content.set(data))

tabEl.addEventListener("click", function (e) {
    const item = e.target;
    content.setLoading()
    const index = item.dataset.id - 1
    tab.to(index).then(data => content.set(data))
});

tabEl.children[0].click()
