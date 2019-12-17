window.onload = 匿名/有名  推荐

function jiazai(){
    var hh = document.getElementsByTagName('h2')
    hh.onclick = function(){
    alert('123');
    }
}
function f22(){
    alert('222222')
}
window.onload = function(){

    jiazai();
    f22();

}