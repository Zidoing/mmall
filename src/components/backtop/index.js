import './backtop.css'
import 'icons/iconfont.css'

const CHANGED_CLASS_NAME = "backtop-hidden";
const INIT_STATE = "init"
const CHANGED_STATE = "changed";

class Backtop {
    constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
        this.el = el;
        this.critical_point = critical_point;
        // 滚动条所在的容器
        this.scrollContainer = scrollContainer;
        // 监听滚动事件的元素
        this.eventEl = eventEl;

        this.setState(INIT_STATE);
        this.bindEvent();
    }

    setState(state) {
        this.state = state;
    }

    bindEvent() {
        this.eventEl.addEventListener("scroll", () => {
            if (this.needChange()) {
                this.setState(CHANGED_STATE);
                console.log("changed")
                this.change()

            } else if (this.needReset()) {
                console.log("reset")
                this.setState(INIT_STATE)
                this.reset()
            }
        }, false);

        this.eventEl.addEventListener("click", () => {
            this.scrollTo()
        }, false)
    }

    scrollTo(top = 0, left = 0) {
        this.scrollContainer.scrollTo({
            top, left, behavior: 'smooth'
        })

    }

    needChange() {
        return this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.critical_point;
    }

    change() {
        this.el.classList.remove(CHANGED_CLASS_NAME)
    }

    needReset() {
        return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.critical_point
    }

    reset() {
        this.el.classList.add(CHANGED_CLASS_NAME);
    }


}

export default Backtop;