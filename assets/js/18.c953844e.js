(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{811:function(s,e,a){"use strict";a.r(e);var t={mounted:function(){this.$page.lastUpdated="2022年4月15日"}},r=a(112),n=Object(r.a)(t,(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("center",[a("h1",[s._v("Docker 使用笔记")])]),s._v(" "),a("hr"),s._v(" "),a("h1",{attrs:{id:"_0x00-前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x00-前言"}},[s._v("#")]),s._v(" 0x00 前言")]),s._v(" "),a("p",[s._v("平时在使用 Docker 时，经常会碰到忘记相关命令的情况，因此平时忘记一个就会记录一个，经过多年的记录，Docker 相关的笔记已经记录了不少。")]),s._v(" "),a("p",[s._v("最近在看代码审计的时候又提到了 Docker，正好借着这个机会好好的把原来记录的比较乱的 Docker 笔记整理一下。")]),s._v(" "),a("p",[s._v("如果你也面临过「在使用 Docker 时，时不时就会忘记某条命令」的情况，那么我相信本篇文章应该会对你有所帮助。")]),s._v(" "),a("h1",{attrs:{id:"_0x01-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x01-安装"}},[s._v("#")]),s._v(" 0x01 安装")]),s._v(" "),a("h2",{attrs:{id:"_1、安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装-docker"}},[s._v("#")]),s._v(" 1、安装 Docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("curl -fsSL https://get.docker.com/ | sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wget -qO- https://get.docker.com/ | sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在命令中输入以下命令，如果输出 helloword 表示 Docker 安装成功。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('docker run ubuntu echo "helloworld"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://teamssix.oss-cn-hangzhou.aliyuncs.com/202110282041924.png?x-oss-process=image/auto-orient,1/quality,q_80/watermark,bucket_teamssix,image_VGVhbXNTaXhXaW5YaW5Mb2dvLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSxQXzM4,x_10,y_10",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_2、安装-docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装-docker-compose"}},[s._v("#")]),s._v(" 2、安装 Docker-Compose")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"_3、docker-设置国内镜像源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、docker-设置国内镜像源"}},[s._v("#")]),s._v(" 3、Docker 设置国内镜像源")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('vi /etc/docker/daemon.json\n\n{\n    "registry-mirrors": ["http://hub-mirror.c.163.com"]\n}\n\nsystemctl restart docker.service\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("国内加速地址如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Docker中国区官方镜像\nhttps://registry.docker-cn.com\n\n网易\nhttp://hub-mirror.c.163.com\n\n中国科技大学\nhttps://docker.mirrors.ustc.edu.cn\n\n阿里云容器  服务\nhttps://cr.console.aliyun.com/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h1",{attrs:{id:"_0x02-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x02-使用"}},[s._v("#")]),s._v(" 0x02 使用")]),s._v(" "),a("h2",{attrs:{id:"_1、搜索镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、搜索镜像"}},[s._v("#")]),s._v(" 1、搜索镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker search centos\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2、拉取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、拉取镜像"}},[s._v("#")]),s._v(" 2、拉取镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull centos\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、查看镜像文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、查看镜像文件"}},[s._v("#")]),s._v(" 3、查看镜像文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker images\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看镜像层级关系")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker images tree\n\n# 以前这个命令是：\n\ndocker images --tree\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_4、查看docker所有进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看docker所有进程"}},[s._v("#")]),s._v(" 4、查看docker所有进程")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker ps -a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5、开启容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、开启容器"}},[s._v("#")]),s._v(" 5、开启容器")]),s._v(" "),a("p",[s._v("开启指定容器，这里的容器名为 Web")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker start web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动所有容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker start $(docker ps -aq)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_6、进入正在运行的容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、进入正在运行的容器"}},[s._v("#")]),s._v(" 6、进入正在运行的容器")]),s._v(" "),a("p",[s._v("docker 创建的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker attach web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("docker-compose 创建的")]),s._v(" "),a("p",[s._v("container_name 需要在 docker-compose.yml 文件中查看")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker-compose exec container_name bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7、指定端口启动创建进入容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、指定端口启动创建进入容器"}},[s._v("#")]),s._v(" 7、指定端口启动创建进入容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -p 9992:80 -p 8882:8888 -it ubuntu /bin/bash\ndocker run --name web1 -p 9991:80 -p 8881:8888 -it centos /bin/bash\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_8、导出导入镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、导出导入镜像"}},[s._v("#")]),s._v(" 8、导出导入镜像")]),s._v(" "),a("p",[s._v("export\\import 导入导出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker export web > /home/docker_web.tar\ndocker import /home/docker_web.tar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("save\\load 导入导出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker save 9610cfc68e8d > /home/docker_web.tar\ndocker load < /home/docker_web.tar\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("export\\import 与 save\\load 的区别：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("export\\import 导出的镜像文件大小要小于 save\\load 导出的镜像")])]),s._v(" "),a("li",[a("p",[s._v("export\\import 是根据容器拿到的镜像，再导入时会丢失镜像所有的历史，所以无法进行回滚操作；而 save\\load 的镜像，没有丢失镜像的历史，可以回滚到之前的层。")])])]),s._v(" "),a("h2",{attrs:{id:"_9、修改正在运行的容器端口映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、修改正在运行的容器端口映射"}},[s._v("#")]),s._v(" 9、修改正在运行的容器端口映射")]),s._v(" "),a("p",[s._v("a、停止容器")]),s._v(" "),a("p",[s._v("b、 停止 docker 服务(systemctl stop docker)")]),s._v(" "),a("p",[s._v("c、 修改这个容器的 hostconfig.json 文件中的端口（原帖有人提到，如果 config.v2.json 里面也记录了端口，也要修改）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('cd /var/lib/docker/3b6ef264a040* \t# 这里是 CONTAINER ID\n\nvi hostconfig.json\n\n# 如果之前没有端口映射, 应该有这样的一段:\n"PortBindings":{}\n\n# 增加一个映射, 这样写:\n"PortBindings":{"3306/tcp":[{"HostIp":"","HostPort":"3307"}]}\n\n# 前一个数字是容器端口, 后一个是宿主机端口\n# 而修改现有端口映射更简单, 把端口号改掉就行\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("d、启动docker服务(systemctl start docker)")]),s._v(" "),a("p",[s._v("e、启动容器")]),s._v(" "),a("h2",{attrs:{id:"_10、文件传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10、文件传输"}},[s._v("#")]),s._v(" 10、文件传输")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker cp 本地文件路径 ID全称:容器路径\n\n# 或者\n\ndocker cp ID全称:容器文件路径 本地路径\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_11、后台运行docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11、后台运行docker"}},[s._v("#")]),s._v(" 11、后台运行docker")]),s._v(" "),a("p",[s._v("启动全新的容器，该命令会在后台运行容器，并返回容器ID")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run -d\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于现有的容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ctrl+P+Q\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h1",{attrs:{id:"_0x03-卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0x03-卸载"}},[s._v("#")]),s._v(" 0x03 卸载")]),s._v(" "),a("h2",{attrs:{id:"_1、停止容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、停止容器"}},[s._v("#")]),s._v(" 1、停止容器")]),s._v(" "),a("p",[s._v("停止指定容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker stop web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("停止所有容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker stop $(docker ps -aq)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2、删除容器和镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、删除容器和镜像"}},[s._v("#")]),s._v(" 2、删除容器和镜像")]),s._v(" "),a("p",[s._v("删除指定容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker container rm d383057928b4\t# 指定容器 ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除所有已退出的容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rm $(docker ps -q -f status=exited)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除所有已停止的容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rm $(docker ps -a -q)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除所有正在运行和已停止的容器")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker stop $(docker ps -a -q)\ndocker rm $(docker ps -a -q)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("删除所有容器，没有任何标准")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker container rm $(docker container ps -aq)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Docker 资源清理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker container prune\t# 删除所有退出状态的容器\ndocker image prune\t\t\t# 删除 dangling 或所有未被使用的镜像\ndocker network prune\t\t# 删除所有未使用的网络\ndocker volume prune\t\t\t# 删除未被使用的数据卷\ndocker system prune\t\t\t# 删除已停止的容器、dangling 镜像、未被容器引用的 network 和构建过程中的 cache，安全起见，这个命令默认不会删除那些未被任何容器引用的数据卷，如果需要同时删除这些数据卷，你需要显式的指定 --volumns 参数\ndocker system prune --all --force --volumns \t# 这次不仅会删除数据卷，而且连确认的过程都没有了！注意，使用 --all 参数后会删除所有未被引用的镜像而不仅仅是 dangling 镜像\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("删除所有镜像")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker rmi $(docker images -q)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_3、卸载docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、卸载docker"}},[s._v("#")]),s._v(" 3、卸载Docker")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum list installed | grep docker\nyum -y remove docker.x86_64\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_4、卸载docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、卸载docker-compose"}},[s._v("#")]),s._v(" 4、卸载Docker-compose")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("rm /usr/local/bin/docker-compose\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("参考资料：")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/a906998248/article/details/46236687",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/a906998248/article/details/46236687"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/wesleyflagon/article/details/78961990",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://blog.csdn.net/wesleyflagon/article/details/78961990"),a("OutboundLink")],1)])]),s._v(" "),a("Vssue")],1)}),[],!1,null,null,null);e.default=n.exports}}]);