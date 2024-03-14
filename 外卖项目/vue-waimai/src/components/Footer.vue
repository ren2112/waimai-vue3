<template>
    <div class="footer">
        <div class="item">
            <router-link to="/home" class="nav-item" active-class="nav-color">
                <van-icon name="wap-home-o" size="30"/>
                首页
            </router-link>
        </div>
        <div class="item">
            <router-link to="/cart" class="nav-item" active-class="nav-color">
                <van-icon name="shopping-cart-o" size="30"/>
                购物车
            </router-link>
        </div>
        <div class="item">
            <router-link to="/order" class="nav-item" active-class="nav-color">
                <van-icon name="coupon-o" size="30"/>
                订单
            </router-link>
        </div>
        <div class="item">
            <router-link to="/mine" class="nav-item" active-class="nav-color">
                <van-icon name="manager-o" size="30"/>
                我的
            </router-link>
        </div>
    </div>
</template>

<style lang="less" scoped>
.footer{
    display: flex;
    background: #fff;
    border-top: #eee;
    font-size: 12px;
    .item{
        // 等分宽度
        flex: 1;
        .nav-color{
            color: #ffc400;

        }
        .nav-item{
            display: flex;
            // 纵向
            flex-flow: column;
            // 水平居中
            align-items: center;
        }
        
    }
}
</style>
