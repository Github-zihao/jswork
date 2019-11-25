var o = new Person();
//以前不能用o来访问神秘对象
//现在有了__proto__后
//o.__proto__ 也可以直接访问神秘对象（两个下滑线）
//那么o.__proto__ === Person.prototype


__proto__ 不要使用实例去修改原型的成员  
          可以在调试过程中使用   
          方便访问原型进行查看成员