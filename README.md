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
    - [Hosting](#hosting)
- [写在最后](#写在最后)

> [!warning] 警告：本 README 有亿点抽象，慎看。

# todo

- [x] update gpa on lettergrade change
- [ ] ~~search~~ gave up
  - [ ] how do you deal with chinese / english names? double-filtering with the search terms & grade filter? no no no i dont wanna think about it
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

你可以网上找一些可视化 JSON 编辑器（"json visual editor" 直接粘进谷歌随便点开一个），文件下载下来，传到你点开的网站上，编辑完从网站上导出，然后点开编辑，粘贴进去，点 commit，写一个 commit message 描述你修改了什么（写认真点，不要像我一样烂写），大功告成。

或者你可以自己硬敲，敲出问题我就把你打死，没啥大不了的。

### 怎么硬敲

第一行和最后一行的中括号 `[]` 是一个列表的意思，中间每一个用大括号 `{}` 括起来的就是一个课程。

大体结构：

```json
[
  {
    ...
  },
  {
    ...
  },
  {
    ...
  }
]
```

```json
{
    "name": "名字。确保别重名，我在程序里要用这个识别课程的，虽然这么做不太好但我懒得管",
    "grades": [ 课是几年级上的。高一高二高三。
        1,
        2,
        3
    ],
    "gpa": 满绩。数字，别打双引号。
}
```

“不是吸螺壳你咋写得这么水啊我看不懂啊”闭嘴老子没写完好吧实际上没啥好写的了你看看表里前面的课程照葫芦画瓢吧

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

打开 git bash。

用 `cd dir` 找个好文件夹（我一般是 `cd D:/github`）

运行 `git clone https://github.com/Tofutush/etrack.git`（下得慢的一批的话，下载个 Github Desktop，能直接挂梯子，你要能让 git 直接上梯子也行但我不会搞（（

然后用 VSCode 打开克隆下来的文件夹，在 VSCode 里的终端运行 `npm i`。

要是还是下得慢的一批，可以把 npm 的 registry 换成镜像：

```sh
npm config set -g registry https://registry.npmmirror.com
```

（其中里面的 `-g` 代表 global，会让你以后的 registry 全变成这个镜像。想换回去的话，原本的 registry 是 `https://registry.npmjs.org`。）

好啦，下载完毕。VSCode 终端运行 `npm run dev`，浏览器打开 `localhost:5173`，就可以看到网站啦。文件编辑完了后，保存，就能看到变化。时不时 commit 一下，有点逼样了就 push 上去。

### Hosting

就简简单单的 Github Pages 足够了，我 `.github` 里已经有个 workflow 能自动把东西发上去。要是你想叉一个自己的 repo 出去应该能照搬，只要在设置里把 Actions 的读写权限打开，然后 Pages 启动。

# 写在最后

```sh
git commit suicide
```
