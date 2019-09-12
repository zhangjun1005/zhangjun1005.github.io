(function(doc,win,baseW){
	var dpr, recalc;
	var docEl = doc.documentElement;
	var	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	
	// 设置data-dpr属性，留作的css hack之用
	dpr = ( window.devicePixelRatio * 1 ).toFixed(2) || 1;
	dpr = dpr == Math.ceil(dpr) ? Math.ceil(dpr) : dpr;
	docEl.setAttribute('data-dpr', dpr);
	
	recalc = function(){
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		clientWidth = clientWidth >= baseW ? baseW : clientWidth;
		docEl.style.fontSize = 100 * ( clientWidth / baseW) + 'px';
	};
	if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window,750);