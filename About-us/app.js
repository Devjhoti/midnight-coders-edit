var box = document.getElementById("box-js")

function box1e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/11.jpg)`;
  bg.style.backgroundSize = "100%";

}
function box2e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/22.jpg)`;
  bg.style.backgroundSize = "100%";
}
function box3e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/33.jpg)`;
  bg.style.backgroundSize = "100%";
}
function box4e() {
  let bg = document.getElementById("sec-js-bg");
  bg.style.background = `url(./image/44.jpg)`;
  bg.style.backgroundSize = "100%";
}
function mail() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "0px";

  setTimeout(() => {
    slideJs.style.width = "100%";
    slideJs.innerText = "midnightcoders71@gmail.com";
  }, 1000);
}
function phone() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width = "0px";

  setTimeout(()=>{
    slideJs.style.width="100%";
    slideJs.innerText="+8801408396496";
  },1000);
}
function linkedin() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
                    <a target="#_blank" href="https://www.linkedin.com/in/anindya-baul-292760238/">https://www.linkedin.com/in/anindya-baul-292760238/ </a>
  `
  }, 1000);
}
function fb() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <a target="#_blank" href="https://www.facebook.com/anindya.baul.Mrinmoy">MiDnight-CODERS FACEBOOK-PAGE </a>
  `;
  }, 1000);
}
function git() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <a target="#_blank" href="https://github.com/AnindyaBaul">MiDnight-CODERS Github  </a>
  `;
  }, 1000);
}
function map() {
  let slideJs = document.getElementById("slide-js");
  slideJs.style.width="0px";
  setTimeout(() => {
    slideJs.style.width = "100%";
  slideJs.innerHTML = `
  <div class="mapouter"><div class="gmap_canvas"><iframe width="1080" height="202" id="gmap_canvas" src="https://maps.google.com/maps?q=MIDnight%20coder&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org"></a><br><style>.mapouter{position:relative;text-align:right;height:202px;width:1080px;}</style><a href="https://www.embedgooglemap.net">embed a google map</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:202px;width:1080px;}</style></div></div>
  `;
  }, 1000);
}
