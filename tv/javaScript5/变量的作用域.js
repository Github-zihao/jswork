//解析器
//全局作用域  预解析 var function 参数   提取var  如下  声明提前
    //预解析  go                            var a = b = c = 9;则变为
        //function f1()
    //一行一行执行代码                          var a；
        //f1() 局部作用域                          a = b = c = 9;
            //域解析
                //var a;                        

            //一行一行执行代码 
    function f1() {
        //a是局部变量
        //b,c是全局变量
        var a                                                
        a = b = c = 9;
        console.log(a);
        console.log(b);
        console.log(c);   
    }

    f1();
    console.log(c);
    console.log(b);
    console.log(a);
    
    //de 99999underfined

// f(1);
// console.log(c);
// console.log(b);
// console.log(a);

// function f1() {
//     var a = b = c = 9;
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }