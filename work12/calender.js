//当前要传入的年份
function calender (y){

    //获取指定年份1月1日的星期数值  月 日
    var w = new Date(y , 0).getDay();
     //保存结果
    var html = '<div class="box">';

    //拼接每个月份的表格
    for(m=1;m<=12;++m){
        //加了12个设定好的table
        html += '<table>';        
        html += '<tr class="title"><th colspan="7">' + y + '年' + m + ' 月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>';
    
        // 获取月份m共有多少天
        var max = new Date(y,m,0).getDate();

        html += '<tr>';
        //d是日
        //max表示最后一天
        for(d=1;d<=max;++d){
            //w表示星期，星期如果是周日    
            //d表示月第一天如果不是周日，填成空白
            if(w && d == 1){
                html += '<td colspan="' + w + '"></td>';
            }
            html += '<td>' + d + '</td>';
            if (w == 6 && d != max){
                html += '</tr><tr>';
            } else if(d == max){
                html += '</tr>';
            }
            //星期自增
            w =(w+1 > 6)?0:w+1;
        }
        html += '</table>';
    }
    html += '</div>';
    return html;
}