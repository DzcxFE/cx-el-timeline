# cx 时间线组件
可视化地呈现时间流信息弹窗，基于 element ui。

## 基础用法

使用命令 **npm i cx-el-timeline --save --registry=https://registry.npm.taobao.org** 安装依赖

```js
import timeLine from 'cx-el-timeline'
Vue.use(timeLine)

data () {
  return {
    tlShow: true,
    headerData: [
      {
        orderNumber: 123123123,
        rounds: 'dasda',
        driver: 'wushain'
      }
    ],
    bodyData: [{
      description: '支持使用图标',
      content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
      timestamp: '2018-04-12 20:46',
      isOpen: true,
      size: 'large'
    }, {
      description: '支持自定义颜色',
      content: '这是内容这是内容这是内容这是内容这<br>是内容这是内容',
      timestamp: '2018-04-03 20:46',
      isOpen: false,
      color: '#FF352F'
    }, {
      description: '支持自定义尺寸',
      content: '这是内容这是内容这是内容这是内容这是内容这是内容',
      timestamp: '2018-04-03 20:46',
      isOpen: false,
      size: 'large',
      color: '#F8A51C'
    }]
  }
}
```

```html
<time-line title="车辆推送详情"
  :headerData='headerData'
  :bodyData='bodyData'
  :dialogVisible='tlShow'></time-line>
```

## Attributes

| 参数          |      说明      |    类型 | 可选值 | 默认值 |
| ------------- | :------------: | ------: | -----: | -----: |
| title         |    弹窗标题    |  string |      - |      - |
| headerData    | 时间线头部数据 |   array |      - |     [] |
| bodyData      | 时间线主体数据 |   array |      - |     [] |
| dialogVisible |    弹窗显示    | boolean |      - |  false |
| headerShow    | 时间线头部显示 | boolean |      - |   true |
| width         |    弹窗宽度    |  number |      - |    600 |

## npm 包发布

在发布包之前，需要通过 **npm config set registry http://registry.npmjs.org** 切换到 npm 源，记住不要使用淘宝源 

首次发布 npm 包，在终端输入 npm adduser，提示输入账号，密码和邮箱，然后将提示创建成功

非第一次发布包，在终端输入 npm login，然后输入你创建的账号和密码，和邮箱，登陆

>⚠️ npm adduser 成功的时候默认已经登陆了，所以不需要再接着 npm login

发布 npm 包，在终端输入 npm publish

包的名称和版本就是你项目里 package.json 里的 name 和 version

```json
{
  "name": "cx-vue-cli",
  "version": "0.1.0"
}
```

>⚠️ 包的名称不能和 npm 中已有的包重名，并且包名称不能有大写字母/空格/下滑线!

## npm 包更新

1. 修改包的版本（package.json 里的 version 字段）
2. npm publish

同时 npm 有一套自己的版本控制标准——Semantic versioning（语义化版本）

具体体现为：

对于 "version":"x.y.z"

1. 修复 bug,小改动，增加 z
2. 增加了新特性，但仍能向后兼容，增加 y
3. 有很大的改动，无法向后兼容,增加 x

通过npm version <update_type>自动改变版本

update_type 为 patch, minor, or major 其中之一，分别表示补丁，小改，大改

![](https://images2015.cnblogs.com/blog/1060770/201706/1060770-20170609202952606-1996233874.png)