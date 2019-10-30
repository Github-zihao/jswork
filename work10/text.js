function stat() {
    let str = document.getElementById("str").value
    let obj = {}
    //旭xian  （a,b）=>a*a+b*b

    //   let arr= str.split('').sort()
    // obj = arr.reduce((res, c) => { res[c]? res[c]++: res[c]=1; return res}, {})
    //  三元运算符   相当于for的范围  自加  还有else    最后的{}表示存储书里的内容

    // 1.用split()把字符串切分成数组
    // 2.建议使用数组的reduce回调函数统计，也可自行使用数组统计。
    // 3.使用JSON.stringfy()函数把对象转换成字符串显示到id为result的div中。

    let n = str.split("").sort()
    console.log(n)
    for(var i = 0;i<n.length;i++){
        book=n[i];
        if(obj[book]){
            obj[book]++;
        }else{
            obj[book]=1;
            }
        }
    
        console.log(obj)

        document.getElementById('result').innerText = JSON.stringify(obj)
}



// function stat(){
//     let str = document.getElementById('str').value
//     let obj = {}
//     let n = str.split("").sort();
//     console.log(n)
//     for(i=0;i<n.length;i++){
//         key = n[i];
//         if(obj[key]){
//             obj[key]++;
//         }else{
//             obj[key]=1;
//         }
//     }
//     console.log(obj)
//      document.getElementById('result').innerHTML = JSON.stringify(obj)
 
// }