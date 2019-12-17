//获取说有input数据
var inputs = document.getElementsByTagName('input');
//为每个input框添加失去焦点事件
for(var i=0;i<inputs.length-1;i++){
    inputs[i].onblur = inputBlur;
}
function inputBlur(){
    var name = this.name;  //获取输入框的name值
    var val = this.value;  //获取、。。。
    var tips = this.placeholder;  //获取输入框的提信息
    var tips_obj = this.parentNode.nextElementSibling;//获取提示信息显示的div元素对象 
    //1，去掉两端的空白字符
    val = val.trim();
    //2.文本框内容为空，给出提示信息
    if(!val){
        error(tips_obj,'输入框不能为空');
        return false;
    }
    //3,获取正则匹配规则和提示信息
    var reg_mag = getRegMsg(name,tips);
    //4,检测是否 符合 正则提示信息
    if(reg_mag['reg'].test(val)){
    //匹配成功，显示失败的提示信息
    success(tips_obj,reg_mag['msg']['success']);
}else{
    //匹配失败，显示失败的提示信息
    error(tips_obj,reg_mag['msg']['error']);
    }
}
//根据input的name值，设置正则规则及提示信息
function getRegMsg(name,tips){
    var reg = msg = '';
    switch(name){
        case 'username':
            reg = /^[a-zA-Z]{4,12}$/;
            msg = {'success':'用户名输入正确','error':tips};
            break;
        case 'pwd':
            reg = /^\w{6,20}$/;
            msg = {'success':'密码输入正确','error':tips};
            break;
        case 'repwd':
            var con = document.getElementsByTagName('input')[1].value;
            reg = RegExp("^" + con + "$");
            msg = {'success':'两次密码输入正确','error':'两次输入的密码不一致'};
            brack;
        case 'tel':
            reg = /^1[34578]\d{9}$/;
            msg = {'success':'手机号输入正确','error':tips};
            break;
    }
    return {'reg':reg,'msg':msg};
}
//成功
function success(obj,msg){
    obj.className = 'success';
    obj.innerHTML = msg;
}
//失败
function error(obj,msg) {
    obj.className = 'error';
    obj.innerHTML = msg + ',请重新输入';
}







