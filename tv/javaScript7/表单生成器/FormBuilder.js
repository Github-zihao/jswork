(function(){
    var FormBuilder = function (data){
        //方便函数的复用
        this.data = data;
    };
    FormBuilder.prototype.create = function () {
        var html = '';
        for (var k in this.data) {
            var item = {tag:'', text:'',atter: {},option: null};
            for (var n in this.data[k]) {
                item[n] = this.data[k][n];
            }
            html += FormBuilder.toHTML(item);
        }
    };
    var builder = {
        toHTML : function (o) {

        }
    };
})(window);//需要控制的作用范围