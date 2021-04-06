<template>
    <div id="home">
        <div class="display">
            <div class="home">
                <div id="title" class="messages">
                    <span>
                        Everybody
                    </span>
                    <br>
                    <span>
                        has
                    </span>
                    <br>
                    <span>
                        talent
                    </span>
                </div>
                <div class="arrowWrap">
                    <div class="arrowInner">
                    <p>SCROLL DOWN</p>
                    <div class="arrow"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- product -->
        <div class="common">
            <ul>
                <li class="common_block">
                    <div class="common_message">
                        <h1>product</h1>
                        <p>
                            「アイディアを形にしたい」
                            <br>
                            そんな思いから結成したチーム。開発した物を見てもらえると光栄です。
                        </p>
                        <RouterLink class="nav" to="/product">
                            <span @click="scrollTop" class="menu sub_menu">visit</span>
                        </RouterLink>
                    </div>
                </li>
                <li class="common_block">
                    <img src="../../images/product1.jpg" alt="">
                </li>
            </ul>
        </div>
        <!-- blog -->
        <div class="common">
            <ul>
                <li class="common_block">
                    <div class="common_message">
                        <h1>blog</h1>
                        <p>
                            自分たちの記事をブログとして書いています。
                            <br>
                            よろしければ見ていってください。
                        </p>
                        <RouterLink class="nav" to="/blog">
                            <span @click="scrollTop" class="menu sub_menu">visit</span>
                        </RouterLink>
                    </div>
                </li>
                <li class="common_block">
                    <img src="../../images/blog1.jpg" alt="">
                </li>
            </ul>
        </div>
        <!-- portfolio -->
        <div class="common">
            <ul>
                <li class="common_block">
                    <div class="common_message">
                        <h1>portfolio</h1>
                        <p>
                            メンバーそれぞれのポートフォリオ
                            <br>
                            それをまとめています。
                        </p>
                        <RouterLink class="nav" to="/portfolio">
                            <span @click="scrollTop" class="menu sub_menu">visit</span>
                        </RouterLink>
                    </div>
                </li>
                <li class="common_block">
                    <img src="../../images/portfolio1.jpg" alt="">
                </li>
            </ul>
        </div>
        <!-- about -->
        <div class="common">
            <ul>
                <li class="common_block">
                    <div class="common_message">
                        <h1>about</h1>
                        <p>
                            私たちの紹介です。
                        </p>
                        <RouterLink class="nav" to="/about">
                            <span @click="scrollTop" class="menu sub_menu">visit</span>
                        </RouterLink>
                    </div>
                </li>
                <li class="common_block">
                    <img src="../../images/about1.jpg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
/* COMMON */
#home {
    font-family: garamond-premier-pro-display, serif;
    background: url(../../images/home1.jpg);
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    z-index: 1;
    font-size: 62.5%;
}

/* スクロールダウン */
.arrowWrap {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 200px;
}

.arrowInner p {
    color: #fff;
    font-size: 12px;
    text-align: end;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

.arrow {
    width: 1px;
    height: 100px;
    margin: 50px auto 0;
    background-color: rgb(7, 7, 7);
    position: relative;
    overflow: hidden;
}

.arrow::before {
    content: '';
    width: 1px;
    height: 100px;
    margin: 50px auto 0;
    background-color: #fff;
    position: absolute;
    top: -150px;
    left: 0;
    -webkit-animation: arrow 2.5s ease 0s infinite normal;
    animation: arrow 2.5s ease 0s infinite normal;
}

@keyframes arrow {
    0% {
        -webkit-transform: translate3d(-50%, 0, 0);
        transform: translate3d(-50%, 0, 0);
    }

    60% {
        -webkit-transform: translate3d(-50%, 100px, 0);
        transform: translate3d(-50%, 100px, 0);
    }

    100% {
        -webkit-transform: translate3d(-50%, 100px, 0);
        transform: translate3d(-50%, 100px, 0);
    }
}

/* HOME */
.home {
    width: 100%;
    height: 70vh;
    padding-top: 150px;
    z-index: 10;
    position: relative;
}
.home .messages span {
    font-size: 5vw;
    font-family: garamond-premier-pro-display, serif;
    line-height: 1;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 20px;
    color: #ffffff;
    margin: 0% 10% 60%;
    margin-top: 40%;
}

/* common */
.common {
    padding: 10% 8%;
    text-align: center;
    background-color: rgb(252, 239, 249);
}
.common:nth-child(even) {
    background-color: #fff;
}
.common_block {
    align-self: center;
    margin: 2em;
    width: 40%;
}
.common_block .common_message {
    line-height: auto;
}
.common p {
    font-size: 1.5vw;
    color: gray;
    margin: auto;
}
.common h1 {
    font-size: 3vw;
}
.common ul {
    padding: 0;
    display: flex;
}
.common ul li {
    list-style: none;
}
.common ul li img {
    width: 161.5%;
    flex-direction: row-reverse;
    margin: 0;
}
.nav .menu {
    display: inline-block;
    width: 200px;
    text-align: center;
    font-size: 16px;
    color: #999;
    text-decoration: none;
    font-weight: bold;
    padding: 12px 24px;
    margin: 4% auto;
    position: relative;
    border: 2px solid #999;
    transition: .4s;
}

.nav .menu:hover {
    border: 2px solid transparent;
    color: #999;
    opacity: .6;
}

.nav .menu:before, .nav .menu:after {
    width: 100%;
    height: 100%;
    z-index: 3;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    transform: scale(0);
    transition: .5s;
}

.nav .menu:before {
    border-bottom: 2px solid #999;
    border-left: 2px solid #999;
    transform-origin: 100% 0%;
}

.nav .menu:after {
    border-top: 2px solid #999;
    border-right: 2px solid #999;
    transform-origin: 0% 100%;
}

.nav .menu:hover:after,
.nav .menu:hover:before {
    transform: scale(1);
}


@media screen and (max-width: 1024px) {
    .common ul li img {
        width: 156.5%;
    }
}

@media screen and (max-width: 768px) {
    .common ul li img {
        width: 150.5%;
    }
}

@media screen and (max-width: 414px) {
    .common ul {
        display: block;
    }
    .nav .menu {
        width: 20%;
        padding: 6px 12px;
    }
    .common ul li img, .common_message{
        padding-top: 10%;
        width: 100vw;
    }
    .common {
        padding: 0;
        background-color: #fff;
    }
    .common ul {
        margin: 0;
    }
    .common h1 {
        font-size: 4vw;
    }
    .common p {
        font-size: 3.5vw;
        margin: auto 10%;
    }
    .common ul li {
        text-align: center;
        margin-left: 0px;
    }
    .v_line_fix {
        margin-top: 70%;
    }
}
</style>

<script>
export default {
    methods: {
        scrollTop: function(){
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        }
    }
}
</script>

