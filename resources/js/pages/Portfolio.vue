<template>
    <div id="portfolio">
        <div id="title">
            <h1>
                <span>portfolio</span>
            </h1>
        </div>
        <main>
            <section class="cards">
                <div class="card">
                    <div class="card_image-container">
                        <img class="image" src="../../images/tomoya.png" alt="RPG">
                    </div>
                    <div class="card-content">
                        <p class="card_title text--medium">
                            TOMO'S PORTFOLIO
                            <div class="card_info">
                                <p class="text--medium">by Tomoya</p>
                                <a href="https://tomoya1997.github.io/portfolio/" class="card__price text--medium">GO</a>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_image-container">
                        <img class="image" src="../../images/KaiFolio.png" alt="RPG">
                    </div>
                    <div class="card-content">
                        <p class="card_title text--medium">
                            KaiFolio
                            <div class="card_info">
                                <p class="text--medium">by Kaito</p>
                                <a href="https://kaitoohsiro.github.io/KaiFolio/index.html" class="card__price text--medium">GO</a>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_image-container">
                        <img class="image" src="../../images/c_m.jpg" alt="RPG">
                    </div>
                    <div class="card-content">
                        <p class="card_title text--medium">
                            Coming soon
                            <div class="card_info">
                                <p class="text--medium">by Matsuzaka</p>
                                <!-- <a href="" class="card__price text--medium">GO</a> -->
                            </div>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_image-container">
                        <img class="image" src="../../images/c_m.jpg" alt="RPG">
                    </div>
                    <div class="card-content">
                        <p class="card_title text--medium">
                            Coming soon
                            <div class="card_info">
                                <p class="text--medium">by Nabika</p>
                                <!-- <a href="" class="card__price text--medium">GO</a> -->
                            </div>
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="card_image-container">
                        <img class="image" src="../../images/c_m.jpg" alt="RPG">
                    </div>
                    <div class="card-content">
                        <p class="card_title text--medium">
                            Coming soon
                            <div class="card_info">
                                <p class="text--medium">by Satsu</p>
                                <!-- <a href="" class="card__price text--medium">GO</a> -->
                            </div>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
#portfolio {
    width: 100vw;
    min-height: 100vh;
    background-color: black;
    background: url("../../images/portfolio.png");
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment: fixed;
}
.body {
    min-height: 100vh;
    width: 100%; 
}
#title {
    color: #ecf0f1;
}
@media only screen and (max-width:812px){
    #title h1 span {
        font-size: 3rem;
    }
}
main {
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
    grid-gap: 40px;
    padding: 60px 0;
}
.text--medium {
    font-family: 'Open Suns', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ecf0f1;
}
.cards {
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 60px));
    grid-gap: 40px;
}
.card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.card:hover {
    transform: translateY(-7px);
}
.card_image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    position: relative;
}
.card_image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card-content {
    padding: 20px;
}
.card_title {
    margin-bottom: 20px;
}
.card_info {
    display: flex;
    align-self: end;
    align-items: center;
}
.card__price {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
}
@media only screen and (max-width: 1000px){
    .card {
        grid-column-end: span 6;
    }
}
@media only screen and (max-width: 700px){
    main {
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 12;
    }
}
@media only screen and (max-width: 500px){
    main {
        height: 100%;
        width: 100%;
        grid-template-columns: 10px repeat(6, 1fr) 10px;
        grid-gap: 10px;
        display: flex;
        justify-content: center;
    }
    .cards {
        width: 100vw;
        grid-column: 2 / sapn 6;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 6;
    }
}
</style>