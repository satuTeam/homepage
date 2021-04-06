<template>
	<div>
		<div v-for="project in ProductProjects" v-bind:key="project.id" class="project">
			<div class="project-icon">
				<img :src="project.icon">
				<div class="project-mask">
					<div class="project-caption">
						{{ project.caption }}
					</div>
				</div>
			</div>
			<div class=project-name>
				{{ project.name }}
			</div>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			ProductProjects: [
				{"id": 1, "name": "ホームページ開発プロジェクト", "icon":require("../../../svg/website.svg"), "caption":"coming soon"},
				{"id": 2, "name": "GAME制作", "icon":require("../../../svg/game.svg"), "caption":"coming soon"},
				{"id": 3, "name": "アプリ開発", "icon":require("../../../svg/app.svg"), "caption":"coming soon"},
				{"id": 4, "name": "人工知能", "icon":require("../../../svg/AI.svg"), "caption":"coming soon"}
			],
		}
	},
}
</script>

<style scoped>
.project-icon {
	width: 50%;
	overflow:	hidden;
	position:	relative;	/* 相対位置指定 */
	margin: auto;
}
.project-icon .project-caption {
	font-size: 6vw;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
	color:			#fff;
}
.project-icon .project-mask {
	width: 100%;
	height: 100%;
	position: absolute;	/* 絶対位置指定 */
	top: 0;
	left: 0;
	opacity: 0;	/* マスクを表示しない */
	background-color:	rgba(0,0,0,0.4);	/* マスクは半透明 */
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
.project-icon:hover .project-mask {
	opacity: 1;	/* マスクを表示する */
}

.project-name {
	font-size: 4.5vw;
	text-align: center;
}

.project {
	margin: 10% 0;
	white-space: nowrap;
}

div.project-icon > img {
    max-width: 100%;
    height: auto;
}
</style>