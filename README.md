## 介绍

nodejs JSON.parse 解析 number 范围为 `[-9007199254740991, 9007199254740991]`，无法处理 int64, 被广泛使用的方案是 [json-bigint](https://www.npmjs.com/package/json-bigint), 但这个库的性能实在太慢了，处理大 JSON 会严重阻塞 node 主线程。

[yyjson](https://github.com/ibireme/yyjson) 是一个高性能的 JSON 解析库，性能测试见[https://github.com/ibireme/yyjson]

我基于这个库，修改了部分代码，利用 Node-API 提供给 nodejs 使用，相较于 json-bigint 可以大幅提升性能。

特别声明：该项目利用 yyjson https://github.com/ibireme/yyjson/blob/master/LICENSE 做JSON 解析

## benchmark

对某个 json string 解析10次耗时统计:

```text
small data test ----------------
        JSON.parse:  7ms
  fast-bigint-json:  11ms
       json-bigint:  57ms

mid data test ----------------
        JSON.parse:  47ms
  fast-bigint-json:  90ms
       json-bigint:  277ms

big data test ----------------
        JSON.parse:  200ms
  fast-bigint-json:  521ms
       json-bigint:  1580ms
```

可以看出，不管是解析简单或复杂的数据，效率提升都是巨大的
