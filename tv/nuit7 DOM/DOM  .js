在js语言里实现对html的操作

//##########
document.getElementById()
返回对拥有id的第一个对象的引用
//##########    $
document.getElementsByName()   NodeList
(不考虑元素个数)
放回带有指定名称的对象集合
//##########  $
document.getElementsByTagName()  HTMLCollection
返回带有指定标签名的对象集合
!每放回一个集合列表对象,可以通过下标方式变为具体的元素对象；
列表[下标] 或 列表.item(下标)
//##########
document.getElementsByClassName()
返回带有指定类名的对象集合(不支持IE6-8)