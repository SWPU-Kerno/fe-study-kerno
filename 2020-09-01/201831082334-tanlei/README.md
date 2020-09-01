## 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
### 第一种
```javascript
var reverseList = function(head) {
    //  处理特殊情况
    if (head === null) {
        return null
    }
    // 把所有节点引用都存在数组里面
    let arr = []
    while(head !== null) {
        arr.push(head)
        head = head.next
    }
    // 从后到前依次设置引用
    let length = arr.length
    for (let i=length-1; i>0; i--) {
        arr[i].next = arr[i-1]
    }
    arr[0].next = null
    return arr[length-1]
};
```
### 第二种
```javascript
var reverseList = function(head) {
    //  处理特殊情况
    if (head === null) {
        return null
    }
    // 设置初始值
    let pre = null
    let cur = head
    while (cur !==  null) {
        let next = cur.next
        // 将引用指向前一个元素
        cur.next = pre
        // 更新条件
        pre = cur
        cur = next        
    }
    return pre
};
```

## 总结
一开始用的第一种方式,结果不能通过运行, 换了第二种还是不行.然后发现是没有处理特殊情况.加上特殊情况处理以后,两个都正常运行了.另外,第二种的效率要高于第一种