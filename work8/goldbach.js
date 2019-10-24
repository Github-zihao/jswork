function goldbach(){
    var odd = document.getElementById('odd').value
    if(odd%2!==0||odd<=2){
        aleat("请输入偶数");
        return false;
    }

    let goldbach = document.getElementById('goldbach')
    var arr = [];
    var a = 0;//计数器
    for(var i=2;i<=odd;i++){
        a = 0
        for(var j=2;j<i;j++){
            if(i%j==0){
                a++
            }
        }
        //遍历完后 a的值还是为0 说明他是一个质数
        if(a==0){
            arr.push(i)
        }

    }

/*[2,3,4,5,6,7,8]
9/2    1
9/3    0
9/4    1
    1
    1
    1
    1*/

    var str = '';
    for(let i=0;i<(arr.length)/2;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]+arr[j]===Number(odd)){
                str += '<div>'+odd+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+'</div>'
            }
        }
    }

    goldbach.innerHTML=str





}