## 算法与数据结构

### 1.数组中第k大的数
> 使用堆排序实现

> leetcode题链：215. 数组中的第K个最大元素
> leetcode题链：面试题 17.14. 最小K个数

#### 数组中的第K个最大元素
```js
/**
 * 数组中的第K个最大元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function buildMaxHeap(arr) {
    let len = arr.length
    // 从倒数第二层开始逐渐向上，将整个列表大顶堆化
    // 不能从上向下大顶堆化，否则底层的大数浮不上来
    for (let i=Math.floor(len/2); i>=0; i--) {
        heapify(arr, len, i)
    }
}


function heapify(arr, len, index) {
    // 看成二叉树，通过index找出左孩子和右孩子
    let left = index * 2 + 1
    let right = index * 2 + 2
    let largest = index

    // 找出最大的放在顶点
    if (left < len && arr[left] > arr[largest]) {
        largest = left
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right
    }

    if (largest != index) {
        swap(arr, largest, index)
        // 交换之后，原顶点可能很小，需要继续向下沉
        heapify(arr, len, largest)
    }
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var findKthLargest = function(nums, k) {
    // 大顶堆化
    buildMaxHeap(nums)
    let result = nums[0]
    let len = nums.length
    while (k) {
        result = nums[0]
        // 交换
        swap(nums, 0, len-1)
        // 减小大顶堆规模
        len--
        // 修正大顶堆
        heapify(nums, len, 0)
        k--
        
    }

    return result
};
```
#### 最小K个数
```js
/**
 * 最小K个数
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function buildMinHeap(arr) {
    let len = arr.length
    // 从倒数第二层开始逐渐向上，将整个列表小顶堆化
    // 不能从上向下大顶堆化，否则底层的小数浮不上来
    for (let i=Math.floor(len/2); i>=0; i--) {
        heapify(arr, len, i)
    }
}


function heapify(arr, len, index) {
    // 看成二叉树，通过index找出左孩子和右孩子
    let left = index * 2 + 1
    let right = index * 2 + 2
    let largest = index

    // 找出最小的放在顶点
    if (left < len && arr[left] < arr[largest]) {
        largest = left
    }

    if (right < len && arr[right] < arr[largest]) {
        largest = right
    }

    if (largest != index) {
        swap(arr, largest, index)
        // 交换之后，原顶点可能很大，需要继续向下沉
        heapify(arr, len, largest)
    }
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
var smallestK = function(arr, k) {
    buildMinHeap(arr)

    let result = []
    let len = arr.length

    while (k) {
        result.push(arr[0])
        swap(arr, 0, len-1)
        // 减小小顶堆规模
        len--
        // 修正小顶堆
        heapify(arr, len, 0)
        k--
    }
    return result

};
```
### 2.二叉树的层序遍历
> leetcode题链：102. 二叉树的层序遍历

#### 迭代的方式——额外增加层级属性
```js
var levelOrder = function(root) {
    // 层序遍历使用的队列
    let queue = []
    // 保存结果
    let result = []
    let cur = root

    if (cur) {
        // 额外增加层级属性，为了跟数组保持一致从0开始计数
        cur.level = 0
        // 推入队列作为开始
        queue.push(cur)
        while (queue.length) {
            // 推出开始处理
            cur = queue.shift()
            let level = cur.level
            // 给左右孩子也增加层级属性
            if (cur.left) {
                cur.left.level = level + 1
                queue.push(cur.left)
            }
            if (cur.right) {
                cur.right.level = level + 1
                queue.push(cur.right)
            }

            // 向对应的数组中添加元素
            if (result[level] === undefined) {
                result[level] = []
            }
            result[level].push(cur.val)

        }
    }

    return result
};
```
#### 迭代的方式——使用分割符
```js
var levelOrder = function(root) {
    // 层序遍历使用的队列
    let queue = []
    // 保存最终结果
    let result = []
    // 保存每层的结果
    let level = []

    let cur = root
    
    if (cur) {
        // 推入队列作为开始
        queue.push(cur)
        // 推入分割符
        queue.push(0)
        while (queue.length) {
            // 推出开始处理
            cur = queue.shift()
            if (cur === 0) {
                // 如果推出分割符后队列为空，说明已经处理完毕，不需要再推入分割符
                if (queue.length)
                {
                    queue.push(0)
                }
                if (level.length) {
                    result.push(level)
                }
                level = []
                continue
            }
            if (cur.left) {
                queue.push(cur.left)
            }
            if (cur.right) {
                queue.push(cur.right)
            }
            level.push(cur.val)
        }
    }
    return result
};
```
#### 递归的方式
```js
var levelOrder = function(root) {
    // 保存结果
    let result = []
    function traverse(root, level) {
        if (root) {
            // 向对应的数组中添加元素
            if (result[level] === undefined) {
                result[level] = []
            }
            result[level].push(root.val)
            // 将层级信息包含在栈中
            traverse(root.left, level+1)
            traverse(root.right, level+1)
        }
    }
    // 为了跟数组保持一致从0开始计数
    traverse(root, 0)
    return result
};

```


## 相关问题
### 1. JavaScript的特点有什么
<pre>
答：
1、跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行。

2、弱类型脚本语言，对使用的数据类型未做出严格的要求

3、单线程，事件驱动

4、通过原型链来实现继承

5、JavaScript是一种安全性语言，它不允许访问本地的硬盘，只能通过浏览器实现信息浏览或动态交互。
</pre>
### 2. 单线程模型的优缺点有哪些
<pre>
答：
优点：代码逻辑简单，不用考虑线程同步互斥问题
缺点：所有代码都在一个线程，容易造成堵塞
</pre>
### 3. 有哪些异步任务
<pre>
答：
    promise
    MutationObserver
    process.nextTick（node）
    script
    xhr
    setTimeout
    setInterval
    setImmediate(node)
    requestAnimationFrame(浏览器)
    I/O
    UI rendering(浏览器)
</pre>
### 4. setTimeout与setInterval的区别
<pre>
答：setTimeout是将回调函数延迟一段时间后再执行
setInterval是立马执行回调函数，然后在每隔一段时间后继续执行
</pre>
### 5. setTimeout的执行时间是准确的吗？为什么
<pre>
答：不准确，如果setTimeout之前任务的执行时间超过了其指定延迟的时间，将会在前面任务执行完成后马上执行
</pre>
### 6. promise的特点是什么,你觉得有哪些优缺点
<pre>
答：
特点：将回调函数放在了then里面
优点：将原先回调函数的横向增长纠正回了纵向增长，形成了链式调用
缺点：写法更难，要读懂promise，需要同时看Promise回调中的代码和then中回调的代码
</pre>
### 7. 什么是promise链
<pre>
答：promise对象允许链式调用then方法，多个回调就组成了promise链
</pre>
### 8. 什么是event loop，用自己的话总结
<pre>
答：在执行完同步代码后，js就会循环检查任务队列中的任务是否需要执行，这个过程就叫事件循环
</pre>
### 9. 总结一下event loop的执行过程
<pre>
答：执行完同步代码
检查执行微任务队列中的任务，如果又产生了新的微任务，添加到微任务队列尾部，在这次队列遍历中检查执行
检查是否需要渲染页面
    检查document是否需要更新
    检查有没有resize和scroll事件
    检测有没有触发media query
    动画更新并发送事件
    检测有没有全屏操作
    执行requestAnimationFrame回调
    执行 IntersectionObserver 回调
    更新UI
从宏任务队列中取一个任务执行，再次回到检测微任务队列的步骤
</pre>
### 10. 宏任务有哪些，微任务有哪些
<pre>
答：
微任务:
    promise
    MutationObserver
    process.nextTick（node）

宏任务:
    script
    xhr
    setTimeout
    setInterval
    setImmediate(node)
    requestAnimationFrame(浏览器)
    I/O
    UI rendering(浏览器)
</pre>
