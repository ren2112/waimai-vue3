<script setup>
</script>

<template>
<div class="content-right">
    <div class="sidebar-creator card">
        <div class="creator-hd">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chuangzuozhongxin"></use>
            </svg>
            <span class="creator-hd-title">创作中心</span>
            <div class="creator-hd-drafts">草稿箱（2）</div>
        </div>
        <div class="creator-bd">
            <ul>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-chuangzuozhongxin"></use>
                    </svg>
                    <p>回答问题</p>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sixin"></use>
                    </svg>
                    <p>发视频</p>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shouye"></use>
                    </svg>
                    <p>写文章</p>
                </li>
                <li>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-shoucang"></use>
                    </svg>
                    <p>写想法</p>
                </li>
            </ul>
        </div>
        <div class="creator-fd">
            <div class="creator-fd-list">
                <ul>
                    <li>1</li>
                </ul>
                <ul>
                    <li>2</li>
                </ul>
                <ul>
                    <li>3</li>
                </ul>
                <ul>
                    <li>4</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 第二个卡片 -->
    <div class="card sidebar-recommend">
        <div class="recommend-hd">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <span class="recommend-hd-title">推荐关注</span>
        </div>
        <div class="recommend-bd">
            <ul>
                <li>
                    <img src="@/assets/image/pic7.jpg" alt="">
                    <div class="recommend-content">
                        <div class="recommend-head">梵高</div>
                        <div class="recommend-detail">你可能感兴趣</div>
                    </div>
                    <div class="recommend-button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        关注
                    </div>
                </li>

                <li>
                    <img src="@/assets/image/pic7.jpg" alt="">
                    <div class="recommend-content">
                        <div class="recommend-head">梵高</div>
                        <div class="recommend-detail">你可能感兴趣</div>
                    </div>
                    <div class="recommend-button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        关注
                    </div>
                </li>

                <li>
                    <img src="@/assets/image/pic7.jpg" alt="">
                    <div class="recommend-content">
                        <div class="recommend-head">梵高</div>
                        <div class="recommend-detail">你可能感兴趣</div>
                    </div>
                    <div class="recommend-button">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shoucang"></use>
                        </svg>
                        关注
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <!-- 第3个卡片 -->
    <div class="card sidebar-category">
        <div class="img-container">
        </div>
        <ul>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <p>Live</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <p>书店</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <p>圆桌</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <p>专栏</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <p>付费咨询</p>
            </li>
            <li>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <p>百科</p>
            </li>
        </ul>
    </div>

    <!-- 第4个卡片 -->
    <div class="card sidebar-namlist">
        4
    </div>
</div>
</template>

<style scoped>
ul{
    list-style: none;
}
svg{
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.creator-bd ul li p{
    margin: 7px 0;
    font-size: 12px;
}

.creator-bd ul li:nth-child(1) svg{
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: #E0ECFF;
    border-radius: 50%;
}
.creator-bd ul li:nth-child(2) svg{
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: #FFF2E1;
    border-radius: 50%;
}
.creator-bd ul li:nth-child(3) svg{
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: #f4ffb4;
    border-radius: 50%;
}
.creator-bd ul li:nth-child(4) svg{
    width: 30px;
    height: 30px;
    padding: 5px;
    background-color: #b6fbff;
    border-radius: 50%;
}

.img-container{
    width: 100%;
    height: 100px;
    background: url('@/assets/image/pic1.png') no-repeat;
    background-size: 100% auto;
}

.sidebar-category ul{
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

.sidebar-category ul li{
    width: 33.3%;
    padding-bottom: 10px;
}

.sidebar-category ul li p{
    margin: 5px 0;
    padding: 0;
    font-size: 13px;
    color: #808080;
}

.sidebar-category ul svg{
    width: 30px;
    height: 30px;

}

</style>
