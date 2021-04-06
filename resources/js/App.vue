<template>
    <div class="container">
        <!-- ハンバーガーメニュー -->
        <div id="barger">
            <header class="barger">
                <div class="barger__menu">
                    <div class="barger__menu__line" @click="naviOpen" :class="{'is-active': active}">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </header>
            <transition name="navi">
                <nav class="navi" v-show="navi">
                    <ul class="navi__wrap">
                    <li>
                        <RouterLink to="/">
                            <span @click="naviOpen1">Home</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/product">
                            <span @click="naviOpen1">Product</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/blog">
                            <span @click="naviOpen1">Blog</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/portfolio">
                            <span @click="naviOpen1">Portfolio</span>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">
                            <span @click="naviOpen1">About</span>
                        </RouterLink>
                    </li>
                    </ul>
                </nav>
            </transition>
        </div>
        <!-- 通常表示 -->
        <nav id="nav" class="header">
            <ul>
                <li>
                    <RouterLink class="nav" to="/">
                        <span class="menu" id="title_menu"><i class="fas fa-bezier-curve"></i>  TECH</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="nav" to="/product">
                        <span class="menu sub_menu">Product</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="nav" to="/blog">
                        <span class="menu sub_menu">Blog</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="nav" to="/portfolio">
                        <span class="menu sub_menu">Portfolio</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink class="nav" to="/about">
                        <span class="menu sub_menu">About</span>
                    </RouterLink>
                </li>
            </ul>
        </nav>
        <div id="main">
            <transition name="slide" mode="out-in">
                <RouterView />
            </transition>
        </div>
    </div>
</template>


<style scoped>
.header ul {
    margin-top:30px;
    padding: 0;
}
.header ul li {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    padding-left: 7%;
}
/* 画面全体 */
.container {
    margin: 0px -8px;
}
/* 通常時のヘッダー */
.nav {
    text-decoration: none;
}
.menu {
    color: #000;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-indent: 0.05em;
    letter-spacing: 0.05em;
}
.sub_menu {
    padding: 20px;
}
#title_menu {
    font-weight: 600;
    font-size: 20px;
    padding-right:20px;
}

@media screen and (max-width: 1024px) {
    /* ヘッダー非表示 */
    .sub_menu {
        display: none;
    }
    /* ハンバーガーメニュー */
    .barger {
    width: 100%;
    background: #fff;
    }
    .barger__menu {
        width: 60px;
        height: 60px;
        position: fixed;
        z-index: 200;
        top: 15px;
        right: 0;
    }
    .barger__menu__line {
        width: 36px;
        height: 30px;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        cursor: pointer;
    }
    .barger__menu__line span {
        width: 100%;
        height: 2px;
        background: #000;
        display: block;
        transition: .6s;
        position: absolute;
    }
    .barger__menu__line span:first-child {
        top: 0;
    }
    .barger__menu__line span:nth-child(2) {
        top: 14px;
    }
    .barger__menu__line span:last-child {
        bottom: 0;
    }
    .barger__menu__line.is-active span {
        transition: .6s;
    }
    .barger__menu__line.is-active span:first-child {
        transform: rotate(45deg);
        top: 50%;
    }
    .barger__menu__line.is-active span:nth-child(2) {
        opacity: 0;
    }
    .barger__menu__line.is-active span:last-child {
        transform: rotate(-45deg);
        top: 50%;
    }
    .navi {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        position: fixed;
        z-index: 100;

    }
    .navi__wrap {
        list-style-type: none;
        text-align: center;
        padding-left: 0;
        background: #4b4b4b;
        padding: 60px;
        width: 100%;
        height: 100%;
    }
    .navi__wrap li a {
        font-size: 6vw;
        text-decoration: none;
        color: #fff;
        display: block;
        padding: 10px 100px;
    }
    .navi__wrap li a:nth-child(1) {
        margin-top: 10%;
    }
    .navi-enter, .navi-leave-to {
        opacity: 0;
    }
    .navi-enter-to, .navi-leave {
        opacity: 1;
    }
    .navi-enter-active, .navi-leave-active {
        transition: .6s;
    }
}
</style>


<style>
#title h1 span{
    font-size: 137px;
    font-family: 'Monteserrat', sans-serif;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 0;
}
#title h1 span:nth-child(even){
    color: transparent;
    text-align: left;

    -webkit-text-stroke: 2px #000;
}
</style>

<script>
export default {
    name: 'barger',
    data: function () {
        return {
            active: false,
            navi: false,
        }
    },
    methods: {
        // ハンバーガーバーアクション
        naviOpen: function() {
            this.active = !this.active;
            this.navi = !this.navi;
        },
        // ハンバーガーないメニューアクション
        naviOpen1: function() {
            this.active = !this.active;
            this.navi = !this.navi;
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },

        scrollTop: function(){
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        }
    }
}
</script>