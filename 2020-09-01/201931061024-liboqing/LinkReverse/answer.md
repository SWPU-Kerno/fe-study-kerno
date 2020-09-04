### 先想C语言的链表反转代码

链表为空或者只有一个节点就直接返回头结点。  
整个过程就是更改了节点间的指向，应用一个临时指针t  
因为结束循环的条件是right为空，所以新的头结点不是right而是left

```
struct ListNode* reverseList(struct ListNode* head){
    if(head == NULL || head->next == NULL){
        return head;
    }

    struct ListNode *left = head;
    struct ListNode *right = head->next;
    struct ListNode *t;
    
    while(right != NULL){
        t = right->next;
        right->next = left;
        left = right;
        right = t;
    }
    head->next =  NULL;
    return left;
}
```
### 再把C语言代码改成JS代码