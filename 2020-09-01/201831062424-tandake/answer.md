#反转链表

###迭代法


```javascript var reverseList = function(head) {
    let cur = head,pre = null,temp
    while(cur){
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
        // 这4行代码可以使用es6中的数组的结构赋值简写为一行
    }
    return pre
};
```
>迭代法思路，把最开始的head赋值给cur,通过一个temp变量来记住当前的第一个结点的下一个结点的值，然后使用两个指针cur与pre，反转cur与pre的位置，然后把下一个结点的temp赋值给cur，当cur为空也就是当前链表遍历完成时，返回记录了原来链表的结尾的pre值作为头结点

###递归法

>这个有点难度，结合了大佬的讲解理解一二

```javascript
var reverseList = function(head) {
    if(!head || !head.next) return head
    var next = head.next
    // 递归反转
    var reverseHead = reverseList(next)
    // 变更指针
    next.next = head
    head.next = null
    return reverseHead
};
```

>递归思路：首先传入head，然后不断递归直到head.next为空，此时满足递归条件，开始往回执行。由函数的执行栈原理可知，先被调用的后执行，后被调用的先执行，此时的head.next为空，head为最后一个有值的结点，开始依次执行栈中的函数

    next.next = head // 反转链表
    head.next = null  // 断开head

>所有函数执行完毕，即反转链表成功

##数组（栈）法

>javascripts思路，
1.利用数组构造一个栈，使用shift压入，然后使用pop压出，最后可得到一个反转后的链表
2.直接使用unshift构造一个倒序的数组，然后顺序遍历

代码就不写了，懂的都懂
