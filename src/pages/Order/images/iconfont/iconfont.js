import {createGlobalStyle} from "styled-components";

export const OrderIconfont = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('http://iconfont.eot?t=1572165403426'); /* IE9 */
  src: url('http://iconfont.eot?t=1572165403426#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('http://iconfont.woff?t=1572165403426') format('woff'),
  url('http://iconfont.ttf?t=1572165403426') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('http://iconfont.svg?t=1572165403426#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-list:before {
  content: "\e678";
}

.icon-ren:before {
  content: "\e643";
}

.icon-_waimai:before {
  content: "\e61e";
}

.icon-huobao:before {
  content: "\e61f";
}

.icon-shouji:before {
  content: "\e600";
}

.icon-kuaican:before {
  content: "\e646";
}

`;