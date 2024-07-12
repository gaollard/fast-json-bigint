JSON.parse 无法处理 int64, 被广泛使用的方案是 [json-bigint](https://www.npmjs.com/package/json-bigint), 但这个库的性能实在太慢了，处理大 JSON 会严重阻塞 node 主线程。

[yyjson](https://github.com/ibireme/yyjson) 是一个高性能的 JSON 解析库，性能测试 

![20240628171125](http://s3.airtlab.com/blog/20240628171125.png)

我基于这个库，修改了部分代码，相较于 json-bigint 可以大幅提升性能。

特别声明：该项目利用 yyjson https://github.com/ibireme/yyjson/blob/master/LICENSE 做JSON 解析