---
title: 列出对象存储服务
---

## 列出对象存储服务

使用以下命令列出 OSS 对象存储服务

```bash
cf alibaba oss ls
```

如果想指定区域，可以使用 `-r` 或者 `--region` 参数

```bash
cf alibaba oss ls -r cn-beijing
```

::: warning 注意

* 为了提高程序运行速度，当获取一次结果后，获取的结果会缓存下来，缓存目录为 `~/.cf/cache`
* 如果不想使用缓存数据，可以在执行命令的时候加上 `--flushCache` 参数

::: 

<Vssue />

<script>
export default {
    mounted () {
      this.$page.lastUpdated = "2022年7月22日"
    }
  }
</script>