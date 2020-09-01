# git/数据结构/js

##  一.同步fork的仓库

1. 终端中定位到自己的本地仓库目录，并切换到master分支

```sh
git checkout master
```
![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODkyMzkyNTkyMg==598923925922)

2. 添加原仓库路径

```sh
git remote -v # 查看当前关联的远程仓库路径

git remote add latest https://github.com/ATQQ/fe-study-kerno.git
```

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODkyNDE3MzAzNQ==598924173035)

3. 获取latest上的内容

```sh
git fetch latest
```

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODkyNDI4NTgzNA==598924285834)

4. 合并到本地的master

```sh
git branch # 查看当前所在分支 确保在master上

git merge latest/master
```

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODkyNDUwNTgyMQ==598924505821)

此时可以通过`git log`查看日志
```js
git log
```
可以看到已经与源仓库保持了一致

5. 提交更新后的本地仓库到自己的远程仓库

```js
git push origin master
```

**注意：切忌不要自己去修改master中的内容，即不要直接在master分之上进行`commit`**

**后续操作（完成今天的任务），请在按照昨天提PR的步骤，切一个新的分支**

**下次同步只需要执行 `git fetch latest/master`即可，后续步骤与上面叙述的一致**

## 二. 单链表的转置

leetcode题链:[剑指Offer24-反转链表](https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/)

```js
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
var reverseList = function(head) {

};
```

可以考虑使用`迭代`或者`递归`实现，推荐使用js语言实现（毕竟搞前端嘛）

**结果可以写在自己当日的README文件中,或者单独创建一个js的文件书写**

**如果没有思路，可以看看lc上的题解，自己消化吸收一下**

**切忌不要复制粘贴，毕竟这不是作业，提升的是你自己**

**自己理解算法思路后进行盲敲**

## 三. ES5
[网道JavaScript](https://wangdoc.com/javascript/index.html)

阅读前三章
1. [入门篇](https://wangdoc.com/javascript/basic/index.html)
2. [数据类型](https://wangdoc.com/javascript/types/index.html)
3. [运算符](https://wangdoc.com/javascript/operators/index.html)

可以在自己的目录下记录上此次学习的笔记

然后回答下面几个问题

### 1. javascript原始值类型有哪些（ES5）

### 2. 为什么 0.1 + 0.2 !== 0.3

### 3. 判断数据类型的方法有哪几种

### 4. null是对象吗，为什么typeof null === 'object'

### 5. == 与 === 有什么区别

### 6. 什么是类数组,如何将类数组转换为数组

>多数问题的结果是能在学习资料中找到答案的，如果不能找到大家可 百度/Google，学习前辈们的总结的经验 ，然后自己理解总结下自己的答案

>**笔记与问题的结果都整理在自己的目录下如：**

示例
```sh
2020-09-01
    - 201731061422-xiaozou
        - README.md         # 介绍自己的目录
        - answer.md         # 自己的做答
        - note.md           # 学习记录的笔记
        - linkReverse.js    # 链表转置
```

## 最后
1. 推荐大家使用 [VS Code](https://code.visualstudio.com/) 编辑器
2. 大家可以安装 [node.js](https://nodejs.org/zh-cn/)环境,装好后可以 直接 `node xx.js`执行目标文件得到结果，避免每次需要打开浏览器，在里面跑