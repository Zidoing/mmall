import 'swiper/swiper-bundle.min.css';
import './slider.css';
import Swiper from 'swiper/swiper-bundle.min';

import config, {LAYOUT_ID, SWIPER_CONTAINER_CLASS, URL} from './config';

// https://www.swiper.com.cn/api/index.html

import render from './slider.art';
import {getData, getDelayedData} from "api/getData";


getData(URL).then(
    data => {
        document.getElementById(LAYOUT_ID).innerHTML = render({
            ...config,
            imgs: data
        })
        new Swiper(SWIPER_CONTAINER_CLASS, config);
    }
);

