(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{150:function(t,o,e){"use strict";e.r(o);var r=e(0),n=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[t._v("#")]),t._v(" Introduction")]),e("p",[t._v("Cronhub is a tool to monitor your cron jobs or any scheduled tasks. It makes it easy to track your cron jobs\nand make sure they run on time. If they fail or run off-schedule\nCronhub will alert you. You choose how you want to be alerted.")]),e("h2",{attrs:{id:"what-is-a-monitor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-monitor","aria-hidden":"true"}},[t._v("#")]),t._v(" What is a monitor?")]),e("p",[t._v('For each job, you need to create a monitor. The schedule of your cron and the created monitor should match.\nFor instance, if you have an hourly running job\non your server you should create a monitor and choose the cron schedule to "Hourly".')]),e("h2",{attrs:{id:"what-is-a-monitor-ping-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-monitor-ping-url","aria-hidden":"true"}},[t._v("#")]),t._v(" What is a monitor ping URL?")]),e("p",[t._v("When you create a new monitor on Cronhub we generate a\nunique ping URL for you. It looks like this:")]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v(" https://cronhub.io/ping/1f5e3410-254c-11e8-b61d-55875966d031\n")])])]),e("p",[t._v("You will need to make an HTTP request (let's call it a ping) from your cron job every time it runs. After\nreceiving the first ping the monitor is set. It will start monitoring your job.")]),e("h2",{attrs:{id:"how-does-alerting-work"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-does-alerting-work","aria-hidden":"true"}},[t._v("#")]),t._v(" How does alerting work?")]),e("p",[t._v("If any of your jobs don't run when they should, Cronhub alerts you with the alerting channels you have specified in your monitor. Currently, Cronhub supports Email, Slack and SMS integrations. More integrations are coming!")])])}],!1,null,null,null);o.default=n.exports}}]);