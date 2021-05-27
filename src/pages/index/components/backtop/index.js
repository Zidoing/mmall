import Backtop from 'components/backtop';

// 获取滚动条所在的容器
const scrollContainer = document.getElementById("index-page");
// 获取需要改变的容器
const backtopEl = document.querySelector(".backtop");


new Backtop(backtopEl, window.innerHeight, scrollContainer);
