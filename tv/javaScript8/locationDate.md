Location对象
location.href: 返回url信息【可以获取url信息，也可以给其赋值，实现页面跳转】

    location.assign() 加载新的文档【跳转页面】
    location.reload() 重新加载当前文档 【刷新】
    location.replace() 用新的文档替换当前的文档 【跳转】

location.assign和location.replace的区别：
    location.assign:会产生历史记录   【能返回】
    location.replace:不会产生历史记录   【不能返回】