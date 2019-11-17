---
title: Markdown
---


# Markdown

> Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</br> Since the initial description of Markdown contained ambiguities and unanswered questions, the implementations that appeared over the years have subtle differences and many come with syntax extensions.[<i class="fa fa-wikipedia-w"></i> From Wikipedia](https://en.wikipedia.org/wiki/Markdown)


## <i class="fa fa-header"></i> Title

<i class="fa fa-code"></i> **Input**

``` md
# 标题1 eyecus
### 标题3 eyecus
#### 标题4 eyecus
##### 标题5 eyecus
###### 标题6 eyecus
```

<i class="fa fa-cube"></i> **Output**

# 标题1 eyecus
### 标题3 eyecus
#### 标题4 eyecus
##### 标题5 eyecus
###### 标题6 eyecus

## <i class="fa fa-file-text-o"></i> Text

<i class="fa fa-code"></i> **Input**

``` md
正常文本 eyecus 
**粗体 eyecus** 
*斜体 eyecus* 
[链接 eyecus](https://eyecus.com)
```

<i class="fa fa-cube"></i> **Output**

正常文本 eyecus 

**粗体 eyecus** 

*斜体 eyecus* 

[链接 eyecus](https://eyecus.com)

## <i class="fa fa-align-left"></i> Lists
<i class="fa fa-code"></i> **Input**

``` md
1. 正常文本1 eyecus
1. 正常文本2 eyecus
1. 正常文本3 eyecus
```

<i class="fa fa-cube"></i> **Output**

1. 正常文本1 eyecus
1. 正常文本2 eyecus
1. 正常文本3 eyecus
***

<i class="fa fa-code"></i> **Input**

``` md
- 正常文本4 eyecus
- 正常文本5 eyecus
- 正常文本6 eyecus
```

<i class="fa fa-cube"></i> **Output**

- 正常文本4 eyecus
- 正常文本5 eyecus
- 正常文本6 eyecus
***

<i class="fa fa-code"></i> **Input**

``` md
- 正常文本7 eyecus
- 正常文本8 eyecus
  - 正常文本9 eyecus
  - 正常文本10 eyecus
```

<i class="fa fa-cube"></i> **Output**

- 正常文本7 eyecus
- 正常文本8 eyecus
  - 正常文本9 eyecus
  - 正常文本10 eyecus

## <i class="fa fa-file-image-o"></i> Images

<i class="fa fa-code"></i> **Input**

``` md
![eyecus](https://www.eyecus.com/assets/images/eyecus_logo.svg)
```

<i class="fa fa-cube"></i> **Output**

![eyecus](https://www.eyecus.com/assets/images/eyecus_logo.svg)

## <i class="fa fa-paperclip"></i> Quotes

<i class="fa fa-code"></i> **Input**

``` md
> 引用文本1 eyecus
```

<i class="fa fa-cube"></i> **Output**

> 引用文本1 eyecus

<i class="fa fa-code"></i> **Input**
``` md
`引用文本2 eyecus`
```

<i class="fa fa-cube"></i> **Output**

`引用文本2 eyecus`

## <i class="fa fa-table"></i> Form

<i class="fa fa-code"></i> **Input**

``` md
| 表头1 | eyecus | 表头2 |
| :-: | :- | -: |
| 居中文本1 | 左对齐文本1 | 右对齐文本1 |
| 居中文本2 | 左对齐文本2 | 右对齐文本2 |
```

<i class="fa fa-cube"></i> **Output**

| 表头1 | eyecus | 表头2 |
| :-: | :- | -: |
| 居中文本1 | 左对齐文本1 | 右对齐文本1 |
| 居中文本2 | 左对齐文本2 | 右对齐文本2 |


## <i class="fa fa-warning"></i> VueUnique

<i class="fa fa-code"></i> **Input**

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

<i class="fa fa-cube"></i> **Output**

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

<i class="fa fa-code"></i> **Input**

```
::: danger 标题 eyecus
正常文本 eyecus 
:::
```
<i class="fa fa-cube"></i> **Output**
::: danger 标题 eyecus
正常文本 eyecus 
:::

***

<i class="fa fa-code"></i> **Input**

````
``` js
export default {
  name: '正常文本 eyecus',
  // ...
}
```
````

<i class="fa fa-cube"></i> **Output**

``` js
export default {
  name: '正常文本 eyecus',
  // ...
}
```

***

<i class="fa fa-code"></i> **Input**

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

<i class="fa fa-cube"></i> **Output**

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

<i class="fa fa-code"></i> **Input**

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

<i class="fa fa-cube"></i> **Output**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```



