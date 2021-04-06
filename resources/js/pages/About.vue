<template>
    <div id="about">
        <div id = "start">
        <div class="about_content">
            <!-- <transition> -->
            <h2 class="about-title">Tech Intern</h2>
            <!-- </transition> -->
            <p>インターンで出会った仲間たちによるクリエータチームです。それぞれの長所を活かして、様々なproductを製作します。</p>
            <a class="button" v-on:click= "is_Active = true" href="#member_about">Member</a>
        </div>
        </div>
        <div id="title">
        </div>
        <div id="member_about">
            
            <div  id="first" class="member">
              <a href="#oshiro">
                <div  v-bind:class="{'active_first':is_Active}">
                  <div><img src="../../images/oshiro_circle.png"></div>
                  <div class = "description">Kaito Oshiro</div>
                  </div>
              </a>
            </div>
            
            <div id="second" >
                <div id="second_left" class="member" >
                    <a href="#tsugami">
                      <div v-bind:class="{'active_second':is_Active}">
                        <div><img src="../../images/tsugami_circle.png"></div>
                        <div class = "description">Tomoya Tsugami</div>
                      </div>
                    </a>
                </div>
                <div id="second_right" class="member" >
                    <a href="#satsu">
                      <div  v-bind:class="{'active_third':is_Active}">
                        <div><img src="../../images/satsu_circle.png"></div>
                        <div class = "description">Satsu Yamamoto</div>
                      </div>
                    </a>
                </div>
            </div>
            <div id="third" class="member">
                <div id="third_left" class="member" >
                    <a href="#matsuzaka" >
                      <div v-bind:class="{'active_fourth':is_Active}">
                        <div><img src="../../images/matsuzaka_circle.png"></div>  
                        <div class = "description">Kengo Matsuzaka</div>
                      </div>
                    </a>
                </div>
                <div id="third_right" class="member" >
                    <a href="#nabika">
                      <div  v-bind:class="{'active_fifth':is_Active}">
                        <div><img src="../../images/nabika_circle.png"></div>
                        <div class = "description">Tomohiro Nabika</div>
                      </div>
                    </a>
                </div>
            </div>
        </div>
        <div id = "indivisual">
            <table width = 100%>
              <div id = "oshiro" class="syokai">
                <tr ALIGN=CENTER VALIGN=TOP>
                  <td width = 50%>
                    <div>
                     <img src="../../images/oshiro.jpg">
                    </div>
                  </td>
                  <td width = 10% height = 100%>
                    <div class="member_title">
                    <table class ="title" align=left>
                            <tr>
                              <td>Name</td>
                            </tr>
                            <tr>
                              <td>Year of birth</td>
                            </tr>
                            <tr>
                              <td>Advantage</td>
                            </tr>
                            <tr>
                              <td>Inscription</td>
                            </tr>
                     </table>
                     </div>
                  </td>
                  <td width = 40% height = 100%>
                      <div class="member_content">
                          <table class = "content" height = 100%> 
                            <tr>
                              <td>Kaito　Oshiro</td>
                            </tr>
                            <tr>
                              <td>1998</td>
                            </tr>
                            <tr>
                              <td>朝寝坊</td>
                            </tr>
                            <tr>
                              <td>Done is better than perfect</td>
                            </tr>
                          </table>
                      </div>
                  </td>
                </tr>
              </div>
            </table>
            <table width = 100%>
              <div id = "tsugami" class="syokai">
                <tr ALIGN=CENTER VALIGN=TOP>
                  <td width = 10% height = 100%>
                    <div class="member_title">
                    <table class ="title" align=left>
                            <tr>
                              <td>Name</td>
                            </tr>
                            <tr>
                              <td>Year of birth</td>
                            </tr>
                            <tr>
                              <td>Advantage</td>
                            </tr>
                            <tr>
                              <td>Inscription</td>
                            </tr>
                     </table>
                     </div>
                  </td>
                  <td width = 40% height = 100%>
                      <div class="member_content">
                          <table class = "content" height = 100%> 
                            <tr>
                              <td>Tomoya Tsugami</td>
                            </tr>
                            <tr>
                              <td>1997</td>
                            </tr>
                            <tr>
                              <td>散歩</td>
                            </tr>
                            <tr>
                              <td>日日是好日</td>
                            </tr>
                          </table>
                      </div>
                  </td>
                  <td width = 50% height = 100%>
                    <div>
                     <img src="../../images/tsugami.png">
                    </div>
                  </td>
                </tr>
              </div>
            </table>
             <table width = 100%>
              <div id = "satsu" class="syokai">
                <tr ALIGN=CENTER VALIGN=TOP>
                  <td width = 50% height = 100%>
                    <div>
                     <img src="../../images/satsu.jpeg">
                    </div>
                  </td>
                  <td width = 10% height = 100%>
                    <div class="member_title">
                    <table class ="title" align=left>
                             <tr>
                              <td>Name</td>
                            </tr>
                            <tr>
                              <td>Year of birth</td>
                            </tr>
                            <tr>
                              <td>Advantage</td>
                            </tr>
                            <tr>
                              <td>Inscription</td>
                            </tr>
                     </table>
                     </div>
                  </td>
                  <td width = 40% height = 100%>
                      <div class="member_content">
                          <table class = "content" height = 100%> 
                            <tr>
                              <td>Satsu Yamamoto</td>
                            </tr>
                            <tr>
                              <td>1997</td>
                            </tr>
                            <tr>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                            </tr>
                          </table>
                      </div>
                  </td>
                </tr>
              </div>
            </table>
            <table width = 100%>
              <div id = "matsuzaka" class="syokai">
                <tr ALIGN=CENTER VALIGN=TOP>
                  <td width = 10% height = 100%>
                    <div class="member_title">
                    <table class ="title" align=left>
                            <tr>
                              <td>Name</td>
                            </tr>
                            <tr>
                              <td>Year of birth</td>
                            </tr>
                            <tr>
                              <td>Advantage</td>
                            </tr>
                            <tr>
                              <td>Inscription</td>
                            </tr>
                     </table>
                     </div>
                  </td>
                  <td width = 40% height = 100%>
                      <div class="member_content">
                          <table class = "content" height = 100%> 
                            <tr>
                              <td>Kengo Matsuzaka</td>
                            </tr>
                            <tr>
                              <td>1998</td>
                            </tr>
                            <tr>
                              <td>暇つぶし</td>
                            </tr>
                            <tr>
                              <td>井戸育ち</td>
                            </tr>
                          </table>
                      </div>
                  </td>
                  <td width = 50% height = 100%>
                    <div>
                     <img src="../../images/matsuzaka.jpg">
                    </div>
                  </td>
                </tr>
              </div>
            </table>
            <table width = 100%>
              <div id = "nabika" class="syokai">
                <tr ALIGN=CENTER VALIGN=TOP>
                  <td width = 50% height = 100%>
                    <div>
                     <img src="../../images/nabika.jpg">
                    </div>
                  </td>
                  <td width = 10% height = 100%>
                    <div class="member_title">
                    <table class ="title" align=left>
                            <tr>
                              <td>Name</td>
                            </tr>
                            <tr>
                              <td>Year of birth</td>
                            </tr>
                            <tr>
                              <td>Advantage</td>
                            </tr>
                            <tr>
                              <td>Inscription</td>
                            </tr>
                     </table>
                     </div>
                  </td>
                  <td width = 40% height = 100%>
                      <div class="member_content">
                          <table class = "content" height = 100%> 
                            <tr>
                              <td>Tomohiro Nabika</td>
                            </tr>
                            <tr>
                              <td>1999</td>
                            </tr>
                            <tr>
                              <td>数学</td>
                            </tr>
                            <tr>
                              <td>安全第一</td>
                            </tr>
                          </table>
                      </div>
                  </td>
                </tr>
              </div>
            </table>
        </div>
        
    </div>
</template>
<style scoped>
.description {
  color:#000;
}

#start {
    background-image: url(../../images/about_wrapper.jpg);
    background-size:cover;
    background-position:center top;
    background-repeat: no-repeat;
    min-height: 90vh;
}
#member_about {
    background-image: url(../../images/member.png);
    background-size:cover;
    background-position:center top;
    background-repeat: no-repeat;
}
#first {
    margin-left: auto;
    margin-right: auto;
    padding-top: 5%;
    text-align: center;
}
#first img{
    height:30%;
    width:10%;
}
#second_left {
    text-align: center;
    margin-left:15%;
    margin-right: 1%;
    width:50%;
}
#second_right{
    margin-left:1%;
    margin-right: 15%;
    text-align: center;
    width:50%;
}
#second {
    margin-top:3%;
    margin-bottom:7%;
    display:flex;
    align-items: center;
    height:100%;
}
#second img{
    height:30%;
    width:30%;
}
#third_left{
    text-align: center;
    margin-left:30%;
    margin-right: 1%;
    width:50%;
    margin-bottom: 5%;
}
#third_left img{
    height:50%;
    width:50%;
}
#third_right{
    margin-left:1%;
    margin-right: 30%;
    text-align: center;
    width:50%;
    margin-bottom: 5%;
}
#third_right img{
    height:50%;
    width:50%;
}
#third{
    display:flex;
    align-items: center;
    height:100%;
}

.about_content {
    text-align:center;
    padding-top: 13%
}
.about_content p {
    font-size: 1.125rem;
    margin: 10px 0 50px;
}
.about-title{
    font-size: 5rem;
    margin: 5px 0 5px
}
.button {
    font-size: 1.375rem;
    background: #0bd;
    color: #fff;
    border-radius: 5px;
    padding: 18px 32px;
}
.button:hover {
    background:#0090aa;
}
.syokai img{
    width:100%;
    vertical-align: bottom;
}

#indivisual {
    height:350%;
}
.main{
    height:500%;
}
.member_title table td{
    padding-bottom:100px;
}
.member_content table td{
    padding:60px 0% 20px;
    margin:0;
}
.member_content table{
    font-size:200%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.active_first {
	/* じわっと画像が表示される */
    opacity:0;
 	animation: fadeIn 3s ease 0s 1 forwards;
    -webkit-animation: fadeIn 3s ease 0s 1 forwards;
}
.active_second {
	/* じわっと画像が表示される */
    opacity:0;
 	animation: fadeIn 3s ease 1.5s 1 forwards;
    -webkit-animation: fadeIn 3s ease 1.5s 1 forwards;
}
.active_third {
	/* じわっと画像が表示される */
    opacity:0;
 	animation: fadeIn 3s ease 1s 1 forwards;
    -webkit-animation: fadeIn 3s ease 1s 1 forwards;
}
.active_fourth {
	/* じわっと画像が表示される */
    opacity:0;
 	animation: fadeIn 3s ease 0.5s 1 forwards;
    -webkit-animation: fadeIn 3s ease 0.5s 1 forwards;
}
.active_fifth {
	/* じわっと画像が表示される */
    opacity:0;
 	animation: fadeIn 3s ease 2s 1 forwards;
    -webkit-animation: fadeIn 3s ease 2s 1 forwards;
}

 
/* じわっと画像が表示される ---------　一度追加していたら不要*/
@keyframes fadeIn { /*上のbody内で呼び出しているアニメーションと名前をそろえる*/
    0% {opacity: 0} /* 始め */
    100% {opacity: 1} /* 終わり */
}
 
/*古いブラウザ用　---------　一度追加していたら不要*/
@-webkit-keyframes fadeIn {
    0% {opacity: 0}
    100% {opacity: 1}
}



</style>
<script>
export default {
    data() {
        return{
            is_Active: false,
        }
    } 
}
</script>