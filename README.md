- [todo](#todo)
- [全体目光向我看齐，我宣布个事儿](#全体目光向我看齐我宣布个事儿)
  - [怎么编辑数据文件](#怎么编辑数据文件)
  - [`required.json` 和 `selective.json` 结构](#requiredjson-和-selectivejson-结构)
    - [怎么硬敲](#怎么硬敲)
- [开发环境](#开发环境)
  - [还想学？](#还想学)
    - [我不想下 VSCode](#我不想下-vscode)
    - [我有更好的编辑器啊我还花钱买了的](#我有更好的编辑器啊我还花钱买了的)
    - [（你的鬼魂）还要下什么呢](#你的鬼魂还要下什么呢)
    - [然后呢](#然后呢)

# todo

- [x] update gpa on lettergrade change
- [ ] ~~search~~ gave up
- [ ] wait for tris to complete data files
  - [ ] courselistcard styling
    - [ ] testing
- [ ] find successor
- [ ] instructions (& docs?) for successor

# 全体目光向我看齐，我宣布个事儿

## 怎么编辑数据文件

## `required.json` 和 `selective.json` 结构

分别在这里：[`required.json`](/src/data/required.json), [`selective.json`](/src/data/selective.json)。

俩文件结构是一模一样的，`required.json` 放必修，`selective.json` 放选修。

你可以网上找一些可视化 JSON 编辑器（"json visual editor" 直接粘进谷歌随便点开一个），文件下载下来，传到你点开的网站上，编辑完从网站上导出，然后点开编辑，粘贴进去，点 commit，写一个 commit message（写认真点，不要像我一样烂写），大功告成。

或者你可以自己硬敲，敲出问题我就把你打死，没啥大不了的。

### 怎么硬敲

第一行和最后一行的中括号 `[]` 是一个列表的意思，中间每一个用大括号 `{}` 括起来的就是一个课程。

```json
{
    "name": "名字。确保别重名，我在程序里要用这个识别课程的，虽然这么做不太好但我懒得管",
    "grades": [ 课是几年级上的。高一高二高三。
        1,
        2,
        3
    ],
    "gpa": 满绩。数字。别打双引号。
}
```

“不是吸螺壳你咋写得这么水啊我看不懂啊”闭嘴老子没写完

# 开发环境

哈哈哈哈哈哈哈哈傻逼别在这里杵着去学点有用的东西吧比如线性代数是吧哈哈哈哈哈哈哈哈

## 还想学？

OK，拦不住的大小姐，去下个 VSCode 吧。

### 我不想下 VSCode

（拿枪指着你脑袋）下 VSCode。

### 我有更好的编辑器啊我还花钱买了的

副歌（开枪然后抢走你的财产从此做一个不愁钱的法外狂徒）

### （你的鬼魂）还要下什么呢

Nodejs、Git。

### 然后呢

`git clone https://github.com/Tofutush/etrack.git`

一定要下 cnpm！！！不然你会后悔！！！

`npm i -g cnpm`

以后所有东西都用 cnpm 做

`cnpm i`
