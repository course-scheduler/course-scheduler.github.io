(this["webpackJsonpfirebase-file-upload"]=this["webpackJsonpfirebase-file-upload"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),l=t.n(o),c=(t(13),t(14),t(7)),i=(t(19),c.initializeApp({apiKey:"AIzaSyDgKVxrtI1vGEwCrxulpv6IS5Cum3bgE3k",authDomain:"course-scheduler-7510d.firebaseapp.com",databaseURL:"https://course-scheduler-7510d.firebaseio.com",projectId:"course-scheduler-7510d",storageBucket:"course-scheduler-7510d.appspot.com",messagingSenderId:"537642069863",appId:"1:537642069863:web:f231b8526fc40b335ec9c2",measurementId:"G-FCWEEZNR0T"}));t(17);var s=function(){return document.title="File Upload",r.a.createElement(r.a.Fragment,null,r.a.createElement("style",{media:"screen"}),r.a.createElement("h1",null,"Course Scheduler File Upload"),r.a.createElement("progress",{value:"0",max:"100",id:"uploader"},"0%"),r.a.createElement("input",{type:"file",onChange:function(e){var a=e.target.files[0],t=i.storage().ref().child(a.name).put(a),n=document.getElementById("uploader");n.value=0,t.on("state_changed",(function(e){var a=e.bytesTransferred/e.totalBytes*100;n.value=a}),(function(e){alert("There was an error while uploading your file. Please try again.")}),(function(){n.value=100,alert("File upload completed successfully!")}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(18)}},[[8,1,2]]]);
//# sourceMappingURL=main.e46c7349.chunk.js.map