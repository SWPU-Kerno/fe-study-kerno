var reverseList = function(head) {
    let cur = head,pre = null,temp
    while(cur){
        temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }
    return pre
};

var reverseList = function(head) {
    if(!head || !head.next) return head
    var next = head.next
    var reverseHead = reverseList(next)
    next.next = head
    head.next = null
    return reverseHead
};