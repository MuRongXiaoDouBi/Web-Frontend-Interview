---
title: 中级
---
[[toc]]

## 一、将多维数组扁平化？

```javascript
function flatten(arr) {
  return [].concat(...arr.map(v => {
    return Array.isArray(v) ? flatten(v) : v;
  }))
}

function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}

function flatten(arr) {
  return arr.flat(Infinity);
}

function flatten(arr) {  // 纯数字
  return arr.toString().split(',').map(Number);
}

function flatten(arr) {
  const ret = [];
  while (arr.length) {
    const item = arr.shift();
    if (Array.isArray(item)) {
      arr.unshift(...item);
    } else {
      ret.push(item);
    }
  }
  return ret;
}
```

## 二、数组去重？

```javascript
function unique(arr) {
  return [...new Set(arr)];
}

function unique(arr) {
  return arr.filter((v, i, a) => {
    return a.indexOf(v) === i;
  })
}

function unique(arr) {
  const tmp = new Map();
  return arr.filter(v => {
    return !tmp.has(v) && tmp.set(v);
  })
}
```