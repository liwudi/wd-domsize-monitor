# wd-domsize-monitor

一个监听dom变化的npm项目

## 基本使用

npm下载

```js
npm install --save wd-domsize-monitor
```

代码中使用
```js
import DomSize from 'wd-domsize-monitor';

// bind
DomSize.bind(el, callback);

// remove
DomSize.remove(el);
```
