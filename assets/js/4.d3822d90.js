(window.webpackJsonp=window.webpackJsonp||[]).push([[4,22],{545:function(t,e,i){"use strict";i.r(e);i(277),i(509);var n=0;e.default=function(t,e,i){var s=0,a=!0,u=!1;for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];if("string"==typeof o)o=t[r]={src:o};else if(!o||!o.src)continue;o.id="image_".concat(r,"_").concat(n++),o.image=window[o.id]=new Image,c(o)}if(s||e(!1),i)setTimeout((function(){clearTimeout(0),u=!0,e(!1)}),i);function c(t){var i=t.image;function n(){i.onload=i.onerror=null;try{delete window[t.id]}catch(t){}--s||u||(clearTimeout(0),e(a))}s++,t.status="loading",i.onload=function(){t.status="loaded",a=a&&!0,n()},i.onerror=function(){t.status="error",a=!1,n()},i.src=t.src}}},590:function(t,e,i){i(1)({target:"String",proto:!0},{repeat:i(591)})},591:function(t,e,i){"use strict";var n=i(76),s=i(35);t.exports="".repeat||function(t){var e=String(s(this)),i="",a=n(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(i+=e);return i}},611:function(t,e,i){"use strict";i.r(e);i(277),i(73),i(71),i(590),i(510),i(509);var n=i(46),s=i(103),a=i(545),u=(i(169),function(){function t(e){Object(n.a)(this,t),this.interval=e,this.status=0,this.frameId=null,this.totalPauseTime=0}return Object(s.a)(t,[{key:"actionAfterFrame",value:function(t){}},{key:"start",value:function(){1!==this.status&&(this.status=1,this.startTime=+new Date,this.totalPauseTime=0,this._startTimeline())}},{key:"pause",value:function(){1===this.status&&(this.status=2,this.pauseTime=+new Date,cancelAnimationFrame(this.frameId))}},{key:"restart",value:function(){2===this.status&&(this.status=1,this.totalPauseTime+=+new Date-this.pauseTime,this._startTimeline())}},{key:"_startTimeline",value:function(){var t=this,e=+new Date;!function i(){var n=+new Date;t.frameId=r(i),n-e>=t.interval&&(t.actionAfterFrame(n-t.startTime-t.totalPauseTime),e=n)}()}}]),t}()),r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame,u),c=function(){function t(e){Object(n.a)(this,t),this.interval=e||1e3/60,this.taskQueue=[],this.status=0,this.index=0,this.timeLine=new o(this.interval)}return Object(s.a)(t,[{key:"start",value:function(){return 0!==this.status?this:this.taskQueue?(this.status=1,this._runTask(),this):this}},{key:"pause",value:function(){return 1===this.status&&(this.status=2,this.timeLine.pause()),this}},{key:"restart",value:function(){return 2===this.status&&(this.status=1,this.timeLine.restart()),this}},{key:"loadImages",value:function(t,e){return this._addTask((function(i){Object(a.default)(t.slice(),i,e)}),0)}},{key:"changePosition",value:function(t,e,i){var n,s,a=this;return e&&i?(n=function(n,s){var u=e.length,r=Math.min(s/a.interval|0,u),o=e[r-1].split(" ");t.style.backgroundImage="url(".concat(i,")"),t.style.backgroundPosition="".concat(o[0],"px ").concat(o[1],"px"),r===u&&n(!0)},s=1):(n=function(t){t(!1)},s=0),this._addTask(n,s)}},{key:"changeSrc",value:function(t,e){var i,n,s=this;return e?(i=function(i,n){var a=e.length,u=Math.min(n/s.interval|0,a);t.src=e[u-1],u===a&&i(!0)},n=1):(i=function(t){t(!1)},n=0),this._addTask(i,n)}},{key:"customerFrame",value:function(t){return t&&this._addTask(t,1),this}},{key:"then",value:function(t){var e=this;return this._addTask((function(i){t(e),i(!0)}),0)}},{key:"repeat",value:function(t,e){var i=this;return this._addTask((function(n){if(void 0===e)return i.index-=t||1,void i._runTask();e?(i.index-=t||1,e--,i._runTask()):n(!0)}),0)}},{key:"repeatForever",value:function(){return this.repeat()}},{key:"wait",value:function(t){if(!this.taskQueue)throw new Error(this._errorMsg());var e=this.taskQueue.length;return this.taskQueue[e-1].wait=t,this}},{key:"dispose",value:function(){return 0!==this.status&&(this.status=0,this.taskQueue=null,this.timeLine.pause(),this.timeLine=null),this}},{key:"_addTask",value:function(t,e){return this.taskQueue.push({taskFn:t,taskType:e}),this}},{key:"_runTask",value:function(){if(1===this.status&&this.taskQueue)if(this.index!==this.taskQueue.length){var t=this.taskQueue[this.index];0===t.taskType?this._syncTask(t):this._asyncTask(t)}else this.dispose()}},{key:"_syncTask",value:function(t){var e=this;(0,t.taskFn)((function(i){if(!i)throw new Error(e._errorMsg());e._next(t)}))}},{key:"_asyncTask",value:function(t){var e=this,i=t.taskFn;this.timeLine.actionAfterFrame=function(n){i((function(){e.timeLine.pause(),e._next(t)}),n)},this.timeLine.start()}},{key:"_next",value:function(t){var e=this;this.index++,t.wait?window.setTimeout((function(){e._runTask()}),t.wait):this._runTask()}},{key:"_errorMsg",value:function(){return"任务".concat(self.index,"执行失败，请根据任务队列").concat(self.taskQueue,"进行检查")}}]),t}();e.default=c}}]);