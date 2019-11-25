let year = new Date().getFullYear()//获取当前年份
var pre = year-1
var next = year+1


document.getElementById('curyear').setAttribute('data-year', year);
document.getElementById('preyear').setAttribute('data-year', pre);
document.getElementById('nextyear').setAttribute('data-year', next);//要添加的（属性：值）
document.getElementById('curyear').innerText = year
document.getElementById('preyear').innerText = "<<"+pre
document.getElementById('nextyear').innerText = next+ ">>"

//调用calender函数，设置cal内容显示年历
document.getElementById("cal").innerHTML = calender(year)



function setCalender(year){
    //设置preyear
    //设置curyear
    //设置nestyear
    //设置cal显示年历
    document.getElementById('cal').innerHTML = '<div class="box" id="cal"></div>'

    var year = parseInt(year)
    var pre = year-1
    var next = year+1
    console.log(pre)
    console.log(next)
    document.getElementById('curyear').setAttribute('data-year', year);
    document.getElementById('preyear').setAttribute('data-year', pre);
    document.getElementById('nextyear').setAttribute('data-year', next);//要添加的（属性：值）
    document.getElementById('curyear').innerText = year;
    document.getElementById('preyear').innerText = "<<"+pre;
    document.getElementById('nextyear').innerText = next+ ">>";
    document.getElementById('cal').innerHTML = calender(year);
}