# 913
## 算法与数据结构

### 1. 全排列
> 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

<pre>
leetcode题链：46. 全排列
例1：

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
你的解答
</pre>

```python
# 蓝桥杯报的python，用python写算法复习一下 0.0
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        # 初始操作
        result = []
        if nums == []:
            return result
            # 把第一个pop进去，使数据结构一致
        result.append([nums.pop(0)])

        # 使用插入法来生成全排列
        # 先取一位，在已经存在的排列上，分别插入间隙生成新的排列，再将原先的‘模版’删除
        for i in nums:
            # 保存原先的长度，方便删除‘模版’
            resL = len(result)
            cpyResult = result.copy()
            for j in cpyResult:
                for k in range(0, len(j) + 1):
                    # 使用‘模版’生成新的排列
                    cpyJ = j.copy()
                    cpyJ.insert(k, i)
                    result.append(cpyJ)
            # 删除‘模版’
            result = result[resL:]

        return result

```
#### 时间复杂度、空间复杂度分析
```python
因为使用插入法排列，因此，每次生成n位的全排序，都要先生成n-1位的全排序。
所以插入的次数为： 1! + 2! + ... + (n-1)! + n!（这个求和不会T_T）
使用的空间等于，排列的结果个数 * 排列的长度
使用的空间为： (n-1)*(n-1)! + n*n!

取最高函数关系
时间复杂度为（不知道T_T）
空间复杂度为 O(n*n!)
```
#### 题解的思路————回溯
```python
class Solution:
    # 准备好要使用的结构
    def __init__(self):
        self.result = []
        self.temp = []
        self.used = [0 for i in range(0, 10)]
    
    def recur(self, nums, dep):
        # 如果深度到达给定数组个数，则说明已经到底，完成了一次排列
        if dep == self.numsL:
            # 保存复本，防止引用关联
            self.result.append(self.temp.copy())
            return
        for i in range(0, len(nums)):
            # 用过直接下一个
            if self.used[i]:
                continue
            # 置为用过
            self.used[i] = 1
            self.temp.append(nums[i])
            # 再选
            self.recur(nums, dep+1)
            # 回溯，将刚刚尝试过的选择弹出，并置为未使用过
            self.temp.pop()
            self.used[i] = 0
    def permute(self, nums: List[int]) -> List[List[int]]:
        self.numsL = len(nums)
        if nums == []:
            return self.result
        else:
            self.recur(nums, 0)
            return self.result
```
### 2. 字符串的排列
> 输入一个字符串，打印出该字符串中字符的所有排列,你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

<pre>
leetcode题链：剑指 Offer 38. 字符串的排列
例1：

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]
你的解答
</pre>

```python
# 原理同上，不过要先把字符串转换成字符数组，再将结果转换回字符串，再去重
class Solution:
    def permutation(self, s: str) -> List[str]:
        # 初始操作
        s = list(s)
        result = []
        if s == []:
            return result
        result.append([s.pop(0)])

        for i in s:
            resL = len(result)
            cpyResult = result.copy()
            for j in cpyResult:
                # print( " 2")
                for k in range(0, len(j) + 1):
                    # print(" 3")
                    cpyJ = j.copy()
                    cpyJ.insert(k, i)
                    result.append(cpyJ)
            result = result[resL:]

        result = list(map(lambda x: "".join(x), result))
        result = list(set(result))
        return result
```
#### 时间复杂度、空间复杂度分析
```python
与第一问使用相同的算法
所以插入的次数为： 1! + 2! + ... + (n-1)! + n! 
使用的空间为： (n-1)*(n-1)! + n*n!

取最高函数关系
空间复杂度为O(n*n!)
```
#### 题解的思路————回溯+剪枝
```python
class Solution:
    def permutation(self, s: str) -> List[str]:
        # 准备好需要的结构
        result = []
        used = [0 for i in range(0, len(s))]
        temp = []
        # 定义成闭包形式，方便使用外部变量
        def dfs(nums):
            # 判断到底，保存结果
            if sum(used) == len(nums):
                result.append("".join(temp.copy()))
            # 记录当前位置选择过的字符
            s = set()
            for i in range(0, len(nums)):
                # 前面路径选择过，当前路径不能再选
                if used[i]:
                    continue
                # 当前路径选择过，再选会出现重复，剪枝
                if nums[i] in s:
                    continue
                # 记录
                used[i] = 1
                s.add(nums[i])
                temp.append(nums[i])
                dfs(nums)
                # 回溯
                used[i] = 0
                temp.pop()
        
        dfs(list(s))
        return result
```