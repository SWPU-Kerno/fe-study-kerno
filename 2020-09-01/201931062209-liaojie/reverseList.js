// 先构建一个单项链表
function LinkedList(){

    function Node(data){
        this.data = data;
        this.next = null;
    };

    this.head = null;
    this.length = 0;

    LinkedList.prototype.append = function(item){
        // 先创建一个节点
        var node = new Node(item);
        if(this.length === 0){
            this.head = node;
        }else{
            let temp = this.head;//暂时保存一下head，因为head一般不能动
            while(temp.next){
                temp = temp.next;//找到最后一个节点
            }
            temp.next = node;
        }

        // 整个链表的长度加一
        this.length += 1;
    };
    LinkedList.prototype.toString = function (){
        let str = '';
        let temp = this.head;
        while(temp){

            str += temp.data + ' ';
            temp = temp.next;

        }
        return str;
    }
}


// 测试代码
let list = new LinkedList();
list.append('abc');
list.append('cde');
list.append('efg');
console.log(list.toString());

/* 进行翻转链表的操作 */

let reverseList = function(head){

    /* 这里采用头插法 */

    let temp = null;
    let head2 = null;

    while(head){
        temp = head.next;
        head.next = head2;
        head2 = head;
        head = temp;
    }

    /* 如果是leetcode直接返回head2就可以了 */
    
    let newList = new LinkedList();

    newList.head = head2;

    console.log(newList.toString());
}
reverseList(list.head);