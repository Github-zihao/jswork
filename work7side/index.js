function sort(method) {
    //读取待排序数据
    let origin = document.getElementById('origin').value
    let logs
    // console.log(method)
    //根据传入排序的方法调用不同的排序函数
    if (method ==='bubble') {
        //调用bubbleSort()冒号排序函数获取排序结果，
        logs = bubbleSort(origin)
        //console.log(123)
        //var arr = origin.split(',')
    } else if (method ==='insert') {
        //调用insertSort()插入排序函数获取排序结果，
        logs = insertSort(origin)
        //console.log(333)
    }
    //获取显示冒泡排序的div
    showDiv = document.getElementById('Anim')
    logValues = logs.values()
    console.log(logs)

    //生成排序数组的遍历器对象
    //logValues = logs.values()
    console.log(logValues)
    //尝试看一下logValues.next() 遍历器对象放回的数据结构
    console.log(logValues.next())
    //延时方法调用showing()函数显示排序步骤，50毫秒后调用，调用一次显示一次排序状态
    setTimeout("showLog(logValues,showDiv)",50)
    /*//显示排序后的结果
    showDiv.innerHTML = logs*/
}







































































// function sort(method) {
//     //读取待排序数据
//     let origin = document.getElementById('origin').value
//     let logs
//     console.log(method)
//     //根据传入排序的方法调用不同的排序函数
//     if (method == 'bubble') {
//         //调用bubbleSort()冒号排序函数获取排序结果，
//         logs = bubbleSort(origin)
//     } else if (method == 'insert') {
//         //调用insertSort()插入排序函数获取排序结果，
//         logs = insertSort(origin)
//     }
//     //获取显示冒泡排序的div
//     showDiv = document.getElementById('Anim')
//     //显示排序后的结果
//     showDiv.innerHTML = logs
// }