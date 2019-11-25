 var n1 = new Date();
        var n1 = new Date("1999/9/9 6:6:6");
        var n1 = new Date(1999,9,9,9,9,9);
        var n1 = new Date(234556734678);
        document.write(n1+"<br/>");
        document.write(n2+"<br/>");
        document.write(n3+"<br/>");
        document.write(n4+"<br/>");
        var n = new Date();
        var m = n.getFullYear();//获取n里面年份
        var m = n.getMonth();//获取n里面月份  要加1  计算机重0开始算起  12月表0
        var m = n.getDate();
        var m = n.getDay();//星期日表0
        document.write(m);