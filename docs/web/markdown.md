---
title: Markdown
---


# Markdown

> Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯 John Gruber。它允许使用易读易写的纯文本格式编写文档，然后转换成有效的HTML文档。这种语言吸收了很多在电子邮件中已有的纯文本标记的特性。</br>由于Markdown的轻量化、易读易写特性，并且对于图片，图表、数学式都有支援，目前许多网站都广泛使用 Markdown 来撰写说明文件或是用于论坛上发表讯息。[<i class="fa fa-wikipedia-w"></i> 摘自维基百科](https://zh.wikipedia.org/wiki/Markdown)

## <i class="fa fa-header"></i> 标题

<i class="fa fa-code"></i> **输入**

``` md
# 标题1 eyecus
### 标题3 eyecus
#### 标题4 eyecus
##### 标题5 eyecus
###### 标题6 eyecus
```

<i class="fa fa-cube"></i> **输出**

# 标题1 eyecus
### 标题3 eyecus
#### 标题4 eyecus
##### 标题5 eyecus
###### 标题6 eyecus

## <i class="fa fa-file-text-o"></i> 文本

<i class="fa fa-code"></i> **输入**

``` md
正常文本 eyecus 
**粗体 eyecus** 
*斜体 eyecus* 
[链接 eyecus](https://eyecus.com)
```

<i class="fa fa-cube"></i> **输出**

正常文本 eyecus 

**粗体 eyecus** 

*斜体 eyecus* 

[链接 eyecus](https://eyecus.com)

## <i class="fa fa-align-left"></i> 列表
<i class="fa fa-code"></i> **输入**

``` md
1. 正常文本1 eyecus
1. 正常文本2 eyecus
1. 正常文本3 eyecus
```

<i class="fa fa-cube"></i> **输出**

1. 正常文本1 eyecus
1. 正常文本2 eyecus
1. 正常文本3 eyecus
***

<i class="fa fa-code"></i> **输入**

``` md
- 正常文本4 eyecus
- 正常文本5 eyecus
- 正常文本6 eyecus
```

<i class="fa fa-cube"></i> **输出**

- 正常文本4 eyecus
- 正常文本5 eyecus
- 正常文本6 eyecus
***

<i class="fa fa-code"></i> **输入**

``` md
- 正常文本7 eyecus
- 正常文本8 eyecus
  - 正常文本9 eyecus
  - 正常文本10 eyecus
```

<i class="fa fa-cube"></i> **输出**

- 正常文本7 eyecus
- 正常文本8 eyecus
  - 正常文本9 eyecus
  - 正常文本10 eyecus

## <i class="fa fa-file-image-o"></i> 图片

<i class="fa fa-code"></i> **输入**

``` md
![eyecus](https://www.eyecus.com/assets/images/eyecus_logo.svg)
```

<i class="fa fa-cube"></i> **输出**

![eyecus](https://www.eyecus.com/assets/images/eyecus_logo.svg)

## <i class="fa fa-paperclip"></i> 引用

<i class="fa fa-code"></i> **输入**

``` md
> 引用文本1 eyecus
```

<i class="fa fa-cube"></i> **输出**

> 引用文本1 eyecus
``` md
`引用文本2 eyecus`
```

<i class="fa fa-cube"></i> **输出**

`引用文本2 eyecus`

## <i class="fa fa-table"></i> 表格

<i class="fa fa-code"></i> **输入**

``` md
| 表头1 | eyecus | 表头2 |
| :-: | :- | -: |
| 居中文本1 | 左对齐文本1 | 右对齐文本1 |
| 居中文本2 | 左对齐文本2 | 右对齐文本2 |
```

<i class="fa fa-cube"></i> **输出**

| 表头1 | eyecus | 表头2 |
| :-: | :- | -: |
| 居中文本1 | 左对齐文本1 | 右对齐文本1 |
| 居中文本2 | 左对齐文本2 | 右对齐文本2 |


## <i class="fa fa-warning"></i> 特有

<i class="fa fa-code"></i> **输入**

```
::: tip
正常文本 eyecus 
:::

::: warning
正常文本 eyecus 
:::

::: danger
正常文本 eyecus 
:::
```

<i class="fa fa-cube"></i> **输出**

::: tip
正常文本 eyecus 
:::

::: warning
正常文本 eyecus 
:::

::: danger
正常文本 eyecus 
:::

***

<i class="fa fa-code"></i> **输入**

```
::: danger 标题 eyecus
正常文本 eyecus 
:::
```
<i class="fa fa-cube"></i> **输出**
::: danger 标题 eyecus
正常文本 eyecus 
:::

***

<i class="fa fa-code"></i> **输入**

````
``` js
export default {
  name: '正常文本 eyecus',
  // ...
}
```
````

<i class="fa fa-cube"></i> **输出**

``` js
export default {
  name: '正常文本 eyecus',
  // ...
}
```

***

<i class="fa fa-code"></i> **输入**

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

<i class="fa fa-cube"></i> **输出**

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

***

<i class="fa fa-code"></i> **输入**

````
``` js {4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

<i class="fa fa-cube"></i> **输出**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```



