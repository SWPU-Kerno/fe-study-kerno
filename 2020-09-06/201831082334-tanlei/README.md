```js
### 第一种方法
var getKthFromEnd = function(head, k) {
    let arr = []
	// 把链表中的结点保存在数组里面
    while (head) {
        arr.push(head)
        head = head.next
		// 为了减少使用的空间，只保存k个
        if (arr.length > k)
        {
            arr.shift()
        }
    }
	// 将倒数k个返回
    return arr[0]
};
### 第二种方法
function reverseLink(head) {
    let pre = null
    let cur = head
    while (cur){
        let next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}
var getKthFromEnd = function(head, k) {
	// 先逆转链表
    head = reverseLink(head)
    let tmpHead = head
    k = k - 1
	// 找到第前k个
    while (k){
        tmpHead = tmpHead.next
        k -= 1
    }
	// 再逆转回来
    reverseLink(head)
    return tmpHead
};
```