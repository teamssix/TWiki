---
title: 一键获得用户数据
---

## 一键获得用户数据

使用 `-u` 命令一键获得用户数据

```bash
cf ecs exec -u
```

   <img width="800" src="/img/1656604217.png">

> 由于用户数据是在元数据里的，所以存在因元数据处于加固模式而导致用户数据无法获取的可能性，因此当 CF 检测到目标元数据处于加固模式时，会自动获取访问元数据的 Token，从而利用该 Token 获得用户数据，简单理解的话，就是 CF 会自动绕过目标的元数据加固模式。

指定单个实例获取用户数据

```bash
cf ecs exec -u -i i-abcdefghijklmn
```

   <img width="700" src="/img/1656604327.png">

<script>
export default {
    mounted () {
      this.$page.lastUpdated = "2022年6月30日"
    }
  }
</script>