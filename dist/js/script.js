AOS.init();
window.addEventListener("scroll",scrollFunction);
var gototop = document.getElementsByClassName("gototop");
window.onload = $(".gototop").css("display","none");
function scrollFunction(){
    if (window.pageYOffset > 300){
    $(".gototop").fadeIn(500,function(){});
    }else{
    $(".gototop").css("display","none");
    }
}