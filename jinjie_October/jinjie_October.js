var r = prompt('请输入圆的半径')
r = parseFloat(r)&&Number(r)
if (!isNaN(r)){
    // 圆周率PI
    var zhouchang = 2 * r * Math.PI
    var s = Math.PI * r * r
    document.getElementById('r').value = r
    document.getElementById('zhouchang').value = zhouchang.toFixed(2)
    document.getElementById('s').value = s.toFixed(2)
}else{
    alert('请输入正确的数字')
}














