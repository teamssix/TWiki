module.exports = [
    '/CF/',
    {
        title: "开始使用",
        collapsable: false,
        children: [
            "/CF/Configuration/",
        ]
    }, {
        title: "OSS 对象存储",
        collapsable: false,
        children: [
            "/CF/OSS/",
        ]
    }, {
        title: "ECS 弹性计算服务",
        collapsable: false,
        children: [
            "/CF/ECS/",
            "/CF/ECS/exec",
            "/CF/ECS/batchCommand",
            "/CF/ECS/metaDataSTSToken",
            "/CF/ECS/userData",
            "/CF/ECS/reverseShell",
        ]
    }, {
        title: "更多",
        collapsable: false,
        children: [
            "/CF/More/",
            "/CF/More/regions",
            "/CF/More/flushCache",
            "/CF/More/logLevel",
            "/CF/More/version",
            "/CF/More/help",
            "/CF/More/aboutMe"
        ]
    },
];