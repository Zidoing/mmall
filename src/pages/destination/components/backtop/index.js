import Backtop from "components/backtop";

const backtopEl = document.querySelector(".backtop")
const scrollerContainer = document.getElementById("destination-content");
new Backtop(backtopEl, scrollerContainer.offsetHeight, scrollerContainer)
