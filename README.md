## 介绍

high performance json-bigint with native module and support worker_threads

nodejs JSON.parse 解析 number 范围为 `[-9007199254740991, 9007199254740991]`，无法处理 int64, 被广泛使用的方案是 [json-bigint](https://www.npmjs.com/package/json-bigint), 但这个库的性能实在太慢了，处理大 JSON 会严重阻塞 node 主线程。

[yyjson](https://github.com/ibireme/yyjson) 是一个高性能的 JSON 解析库，性能测试见[https://github.com/ibireme/yyjson]

我基于这个库，修改了部分代码，利用 Node-API 提供给 nodejs 使用，相较于 json-bigint 可以大幅提升性能。

特别声明：该项目利用 yyjson https://github.com/ibireme/yyjson/blob/master/LICENSE 做JSON 解析。

## 使用

```shell
yarn add fast-json-bigint
```

```ts
import { parse } from 'fast-json-bigint';

JSON.parse = parse;
```

## performance

对某个 json string 解析10次耗时统计:

```text
73 byte xs data test ----------------
                  JSON.parse:  0ms
            fast-bigint-json:  0ms
                 json-bigint:  1ms

178258 byte small data test ----------------
                  JSON.parse:  7ms
            fast-bigint-json:  7ms
                 json-bigint:  44ms

963001 byte mid data test ----------------
                  JSON.parse:  42ms
            fast-bigint-json:  64ms
                 json-bigint:  218ms

4793603 byte big data test ----------------
                  JSON.parse:  221ms
            fast-bigint-json:  480ms
                 json-bigint:  1571ms
```

可以看出，不管是解析简单或复杂的数据，效率提升都是巨大的

## 注意事项

1) 当 number 是以指数的形式表示时，只要他的处理范围超过 `[-9007199254740991, 9007199254740991]` 那么也会被转为字符串


`{ v1: 1e-24, v2: 123000000000000000, v3: 1.234e+21 }`

=>

`{ v1: 1e-24, v2: '123000000000000000', v3: '1.234e21' }`
