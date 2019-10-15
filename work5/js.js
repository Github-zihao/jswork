let str = '<table border="1">'
for(let i=1;i<10;++i){
    str += '<tr>'
    for(var j=1;j<=i;++j){
        //;拼接单元格
        str += '<td>' + j + '*' + i + '=' + ( j * i ) + '</td>'
    }
    str += '</tr>'
}
str += '</table>'
//设置div的html文档内容
document.getElementById('table').innerHTML = str