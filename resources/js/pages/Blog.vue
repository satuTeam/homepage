<template>
    <div id="blog">
        <div id="title">
            <h1>
                <span>B</span>
                <span>l</span>
                <span>o</span>
                <span>g</span>
            </h1>
        </div>
        <h2 id="comingSoon">Coming Soon Page</h2>
    </div>
</template>

<style scoped>
#blog{
    text-align: center;
    background: url(../../images/blog01.jpg);
    height: 100vh;
    background-size: cover;
    background-attachment: fixed;
}
#title h1 span:nth-child(even){
    color: transparent;
    text-align: left;
    -webkit-text-stroke: 2px #FFF;
}
#blog h1 {
    color: #fff;
    padding-top:30px;
}
#blog #comingSoon {
    margin-top: 20%;
    font-size: 6vw;
    font-family: 'Pacifico';
    color: #fff;
    font-weight: 700;
}


@media screen and (max-width: 375px) {
    #blog h1 span {
        font-size: 20vw;
    }
}
</style>