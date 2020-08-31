# 提交一次PR

## 任务
1. 向本仓库提一个PR，按照首页中的[README](../README.md)格式

## 所需准备

* 安装git，注册github账号

* 默认大家都会git基本操作，不会的[快速学习](https://www.liaoxuefeng.com/wiki/896043488029600)一下

## 提PR步骤

1. fork本仓库

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODg1Mzk4Nzk3MA==598853987970)

2. clone 到本地

```sh
git clone 你fork过后的仓库的地址
```

3. 创建+切换一个新分支
> 建议每天的任务单独一个分支

分支规范 feature/日期/姓名拼音
```sh
git checkout -b feature/20200831/xiaoming
```

4. 开始书写你的内容

5. 提交到暂存区

```sh
git add .        # 提交本地本地改动
git add filename # 提交指定文件
```

6. 提交到本地仓库员
```sh
git commit -m "feat: 本次提交的描述信息"
```

7. 提交到远程仓库
```sh
git push -u origin 分支名    # 新分支的首次提交

git push                    # 之后提交
```

8. 提pr

此次步骤在github上操作

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODg1NDgyNTIzNw==598854825237)

选择目标分支，与待合并的分支

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODg1NTAxMzQ2OA==598855013468)

然后点击`create pull request`

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODg1NTIyNTY3Ng==598855225676)

确认创建PR

![图片](https://img.cdn.sugarat.top/mdImg/MTU5ODg1NTMxOTU0NQ==598855319545)

完成

## 其它
如还有疑问请小窗私我