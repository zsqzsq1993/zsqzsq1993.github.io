(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{587:function(t,a,s){t.exports=s.p+"assets/img/1.277e1ebc.svg"},601:function(t,a,s){"use strict";s.r(a);var r=s(70),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"简单理解event-loop"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简单理解event-loop"}},[t._v("#")]),t._v(" 简单理解Event-Loop")]),t._v(" "),r("p",[t._v("JavaScript是一门单线程的语言。单线程意味着程序中的任务会一个接着一个执行。如果它是多线程，在执行时会带来一些不确定的因素。比如一个线程在操作某个DOM节点，而另一个线程却在删除该节点，执行的结果应以哪个线程为准呢？可以说，JavaScript会按照语句出现的顺序一个一个被“激活”，但却不一定按这个顺序来“执行”这些任务，比如下方的一个简单程序。激活的顺序应该是Task1 - Task2，但最终执行的顺序却是Task2 - Task1。为什么会这样？让我们来看看JavaScript的运行机制。")]),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeOut")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task1"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Task2"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Results */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Task2 */")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Task1 */")]),t._v("\n")])])]),r("h2",{attrs:{id:"单线程、同步、异步、阻塞、非阻塞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单线程、同步、异步、阻塞、非阻塞"}},[t._v("#")]),t._v(" 单线程、同步、异步、阻塞、非阻塞")]),t._v(" "),r("p",[t._v("首先，我会形象地用我的生活来解释这些概念。")]),t._v(" "),r("h3",{attrs:{id:"单线程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[t._v("#")]),t._v(" 单线程")]),t._v(" "),r("p",[t._v("我为每天所罗列的一份todoList，便是JavaScript中的执行栈，主线程（我）会从这份名单中一个一个取出任务来执行。单线程意味着任务是一个接着一个被执行的。比如我刷完牙了才去洗脸，洗完脸了再去准备早饭。而多线程可能是：早上一边刷牙的时候一边烧水煮面准备早饭，两个任务并发进行。")]),t._v(" "),r("h3",{attrs:{id:"同步-异步"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#同步-异步"}},[t._v("#")]),t._v(" 同步 & 异步")]),t._v(" "),r("p",[t._v("同步和异步指的是一个任务的任务类型。拿烧水来举例，若烧水是个同步任务，主线程（我）在烧水到水开这2min内，我什么也没干站在旁边等着水开；若烧水是个异步任务，我把火点上后，便去刷牙洗脸了。等到水开（水壶叫）我再跑过去将水关上。JavaScript中的事件便是典型的异步任务：“点火”便是设置监听器，“水壶叫”便是事件触发，“关水”便是回调。")]),t._v(" "),r("h3",{attrs:{id:"阻塞-非阻塞"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#阻塞-非阻塞"}},[t._v("#")]),t._v(" 阻塞 & 非阻塞")]),t._v(" "),r("p",[t._v("阻塞和非阻塞只的是主线程（我）的状态。若一个任务任务时间过长，我必须干等着而无法开展下一项任务，说明我被阻塞了。如果我能将上一个任务挂着，等待结果的时间去干下一项任务，说明我非阻塞。同步任务不代表一定会阻塞主线程，比如任务很容易执行，那主线程就会一个接一个很流畅进行下去。异步任务也不代表都不会发生阻塞，比如setTimeOut + alert。")]),t._v(" "),r("h2",{attrs:{id:"栈、堆、队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#栈、堆、队列"}},[t._v("#")]),t._v(" 栈、堆、队列")]),t._v(" "),r("p",[t._v("栈(stack)、堆(heap)和队列(queue)是内存的抽象化分类。")]),t._v(" "),r("p",[r("img",{attrs:{src:s(587),alt:"1"}})]),t._v(" "),r("h3",{attrs:{id:"栈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#栈"}},[t._v("#")]),t._v(" 栈")]),t._v(" "),r("p",[t._v("栈又被称为执行栈，用来储存待执行函数。主线程会挨个执行栈中弹出的任务。栈中的每一个“任务”又被称为一帧。栈是LIFO（后进先出）。比如嵌套函数：外层函数、内层函数被先、后压入栈，内层函数被先弹出栈给主线程执行。")]),t._v(" "),r("h3",{attrs:{id:"堆"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#堆"}},[t._v("#")]),t._v(" 堆")]),t._v(" "),r("p",[t._v("堆是一块儿非结构化储存区域，用来储存各类对象如字面量对象、基本对象、构造函数等。堆中储存的对象在浏览器的整个生命周期都存在，除非垃圾回收机制将其回收。")]),t._v(" "),r("h3",{attrs:{id:"队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),r("p",[t._v("队列与栈相反，是FIFO（先进先出）类型的。其中储存的是待处理的消息，每一个消息都关联着一个处理该消息的回调函数。当栈为空时，队列便会以FIFO原则移出task进入执行栈给主线程来执行。")]),t._v(" "),r("h2",{attrs:{id:"事件循环"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),r("div",{staticClass:"language-flow extra-class"},[r("pre",{pre:!0,attrs:{class:"language-flow"}},[r("code",[t._v("flow\nst"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("start"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 任务coming\ncond1"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("condition"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 是否为异步任务\ncond2"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("condition"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 执行栈是否为空\nop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("table"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 异步任务进入Task Table\nop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("queue"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 回调函数进入Task Queue\nop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wait"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 等待执行栈被清空\nop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stack1"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 同步任务进入执行栈\nop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stack2"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 主线程从执行栈中取任务执行\nop"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("merge"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("operation"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 执行栈为空后，Task Queue中的任务进入执行栈执行\nst"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cond1\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cond1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stack1"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stack2"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("merge\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cond1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yes"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("table"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("queue"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wait"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cond2\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cond2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yes"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("merge\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("cond2")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("no"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("op"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("wait\n")])])]),r("p",[r("strong",[t._v("TO BE CONTINUE.")])])])}),[],!1,null,null,null);a.default=e.exports}}]);