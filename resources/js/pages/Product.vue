<template>
    <div id="product">
        <div id="title">
            <h1>
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>t</span>
            </h1>
        </div>
        <Project class="product-triangle" />
    </div>
</template>

<script>
import Project from './productComponents/Project.vue' //importするだけでcssが適用される

export default {
  components: {
    Project,
  }
}
</script>

<style>
div#product > div#title > h1 > span {
    font-size: 10vw;
    margin: 0 0.5%;
}

div#product > div#title > h1{
    text-align: center;
    color: #62a9ecaf;
	white-space: nowrap;
}

.product-triangle {
    display: table;
    width: 100%;
    background-color: #97c7f3af;
    transform: skewY(-5deg);
    margin-top: 4vw;
}
.product-triangle > * {
    transform: skewY(5deg);
}
</style>