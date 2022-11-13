let bgNavbar=document.getElementById("bgnavbar");
window.onscroll=function(){
  let scrollNav=  window.scrollY;
  if(scrollNav>=100){
    bgNavbar.classList.add("after-scroll-navbar");
  }else{
    bgNavbar.classList.remove("after-scroll-navbar")
  }
}
