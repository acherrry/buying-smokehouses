(()=>{"use strict";var e=[{id:1,name:"Коптильня 10л",price:1200},{id:2,name:"Коптильня 20л",price:1400},{id:3,name:"Коптильня 30л",price:1600}],t=document.querySelector(".summation__detailing");t.textContent=0;var r=new Array;e.forEach((function(n){var o=document.querySelector("#goods__card"+n.id);if(null!==o){var a=o.querySelector(".goods__card-title"),c=o.querySelector(".goods__card-price"),d=o.querySelector(".goods__card-btn");a.textContent=n.name,c.textContent=Intl.NumberFormat("ru-RU").format(n.price)+" РУБ.",d.addEventListener("click",(function(){var o;r.push(n.id),t.textContent=Intl.NumberFormat("ru-RU").format((o=0,r.forEach((function(t){var r=e.find((function(e){return e.id===t})).price;o+=r})),o)),d.textContent="ДОБАВЛЕНО",d.disabled=!0,d.classList.add("goods__card-btn_disabled")}))}}))})();
//# sourceMappingURL=main.js.map