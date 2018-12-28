// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */


window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//兼容手机端的rem
// ;(function flexible(window, document) {
// 	var docEl = document.documentElement
// 	var dpr = window.devicePixelRatio || 1
// 	// adjust body font size
// 	function setBodyFontSize() {
// 		if(document.body) {
// 			document.body.style.fontSize = (12 * dpr) + 'px'
// 		} else {
// 			document.addEventListener('DOMContentLoaded', setBodyFontSize)
// 		}
// 	}
// 	setBodyFontSize();
// 	// set 1rem = viewWidth / 10
// 	function setRemUnit() {
// 		var rem = docEl.clientWidth / 10
// 		docEl.style.fontSize = rem + 'px'
// 	}
// 	setRemUnit()
// 	// reset rem unit on page resize
// 	window.addEventListener('resize', setRemUnit)
// 	window.addEventListener('pageshow', function(e) {
// 		if(e.persisted) {
// 			setRemUnit()
// 		}
// 	})
// 	// detect 0.5px supports
// 	if(dpr >= 2) {
// 		var fakeBody = document.createElement('body')
// 		var testElement = document.createElement('div')
// 		testElement.style.border = '.5px solid transparent'
// 		fakeBody.appendChild(testElement)
// 		docEl.appendChild(fakeBody)
// 		if(testElement.offsetHeight === 1) {
// 			docEl.classList.add('hairlines')
// 		}
// 		docEl.removeChild(fakeBody)
// 	}
// }(window, document));
