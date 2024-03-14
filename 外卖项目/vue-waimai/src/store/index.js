import { createStore } from "vuex"; 
// 跨组件的数据需要vuex
export default createStore({
    state:{
        cartList:[],//购物车数据
        isDelete:true,//确定header组件 购物车点击编辑时 底部组件的展示
        edit:true,//1时显示编辑，0时显示完成编辑
        orderList:[],//结算的商品列表,只负责当前订单的
        orderListEnd:[],//负责全部（包括之前订单）订单
        userAddress:[
            {
                id: 1001,
                name: 'jason',
                tel: '15874859686',
                province: '广东省',
                city: '深圳市',
                county: '南山区',
                addressDetail: '深圳湾',
                isDefault: true,
                areaCode: '110101',
              },
              {
                id: 1002,
                name: 'allen',
                tel: '15874859685',
                province: '湖北省',
                city: '武汉市',
                county: '武昌区',
                addressDetail: '黄鹤楼',
                isDefault: false,
                areaCode: '110101',
              },
        ]
    },
    mutations:{
        addcart(state,value){
            state.cartList=value
        },
        // 购物车编辑页面的信号转换
        changeDelete(state){
            state.isDelete=!state.isDelete
        },
        // 删除购物车的函数
        delete(state,value){
            state.cartList=value
        },
        // 编辑与完成的信号转换
        edit(state,value){
            // console.log(222);
            // 当删完了，将编辑展示而不是完成
            if(value){
                state.edit=true;
            }
            else state.edit=!state.edit
        },
        // 结算
        pay(state,value){
            state.orderList=value
        },
        // 将当前订单与往届订单结合
        orderListEd(state){
            state.orderListEnd=state.orderListEnd.concat(state.orderList)
        },
        // 新增地址
        addaddress(state,value){
            // 数组为引用类型时原数组发生改变，所以map遍历的数组存在结构体时修改结构体里面的值会改变原数组
            state.userAddress.map(item=>{
                if(value.isDefault){
                    item.isDefault=false;
                }
            })
            // 需要新增id，因为vant的地址编辑没有id
            value.id= 1001+state.userAddress.length
            state.userAddress.push(value)
        },
        // 编辑地址
        editaddress(state,value){
            // map遍历会生成新数组
            state.userAddress = state.userAddress.map(item=>{
                if(value.isDefault){
                    item.isDefault=false;
                }
                // 用于判断当前遍历的地址项是否是被编辑的地址项。如果是，则返回传入的 value 对象，表示更新了该地址项；否则返回原始的 item，保持地址项不变。
                return item.id===value.id?value:item
            })
        },
        // 删除地址
        deleteaddress(state,value){
            state.userAddress=state.userAddress.filter(item=>{
                return !(item.id===value.id)
            })
            // 删完发现把默认地址删除则将第一个地址改为默认地址
            if(value.isDefault){
                state.userAddress[0].isDefault=true
            }
        }
    },
    actions:{}
})