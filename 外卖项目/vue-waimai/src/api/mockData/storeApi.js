export default{
    getStoreData:()=>{
        return{
            code:200,
            data: [
                {
                // 作为分类的名字，每个都有name
                name: "点菜",
                // 传这个，每个都有data
                data: {
                    content: "点菜",
                    // 只有点菜有items，其余都没
                    items: [
                    {
                        text: "热销套餐",
                        children: [
                        {
                            pic: "https://ts1.cn.mm.bing.net/th?id=OIP-C.DHLDx5xB7vGHrkhq7vVmQAHaE7&w=189&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                            title: "隆江猪脚饭",
                            num: 0,
                            price: 25.0,
                            id: 0,
                            add: true,
                        },
                        {
                            pic: "https://ts1.cn.mm.bing.net/th?id=OIP-C.DHLDx5xB7vGHrkhq7vVmQAHaE7&w=189&h=185&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
                            title: "隆江猪脚饭",
                            num: 0,
                            price: 25.0,
                            id: 1,
                            add: true,
                        },
                        ],
                    },
                    {
                        text: "超级折扣",
                        children: [
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "无骨酸菜鱼+肥牛双拼",
                            num: 0,
                            price: 25.0,
                            id: 5,
                            add: true,
                        },
                        {
                            pic: "https://img1.baidu.com/it/u=1599947592,1695977044&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=440",
                            title: "香辣水煮鱼+肥牛双拼",
                            num: 0,
                            price: 25.0,
                            id: 6,
                            add: true,
                        },
                        ],
                    },
                    ],
                },
                },
                {
                name: "评价",
                data: {
                    content: "评价",
                },
                },
                {
                name: "商家",
                data: {
                    content: "商家",
                },
                },
            ],
        }
    }
}