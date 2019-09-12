<template>
	<div id="subject">
		<div class="content">
			<ul class="subject-list">
				<li class="subject-list-item">
					<div class="item-title">铭依阳光宝微信公众号</div>
					<p class="item-detail">项目描述:该项目主要分为用户管理、学生管理、运动记录管理、历史纪录查询、信息展示等模块</p>
					<div class="item-skill">采用技术:<span class="skill">vue.js，axios，vux，ECharts</span></div>
				</li>

				<li class="subject-list-item">
					<div class="item-title">江苏省体育局微信小程序</div>
					<p class="item-detail">项目描述:该项目主要内容为公文管理、公文查询、通知公告、日程安排、党建信息等模块</p>
					<div class="item-skill">采用技术:<span class="skill">wepy</span></div>
				</li>

				<li class="subject-list-item">
					<div class="item-title">中以创新园后台管理系统</div>
					<p class="item-detail">项目描述:该项目主要负责中以创新园前台页面内容管理，主要内容分为后台登陆、登出、新闻、技术及需求、展示、成功案例等模块</p>
					<div class="item-skill">采用技术:<span class="skill">vue.js，axios，element-ui</span></div>
				</li>

			</ul>
			<div class="switch">
				<div class="el-icon-arrow-left" @click="switchSubject"></div>
				<div class="el-icon-arrow-right" @click="switchSubject"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  	name: 'subject',
	  	data(){
	  		return {
	  			workIndex:0,
	  		}
	  	},
		methods:{
		  	setWorkDraw(){
	  			const subjectDom = document.getElementsByClassName('subject-list')[0];
	  			const children = subjectDom.children;
	  			for (let i = 0; i < children.length; i++) {
				   children[i].style.transform = `translateX(${0.2 * i}rem) translateZ(${-0.2 * i}rem) scale(${1 - i * 0.05}, ${1 - i * 0.05})`;
				}
	  		},
	  		switchSubject($event){
	  			const subjectDom = document.getElementsByClassName('subject-list')[0];
	  			const children = subjectDom.children;
	  			const tag = $event.target.className;
	  			if (tag === 'el-icon-arrow-left' && this.workIndex !== 0) {
			    	--this.workIndex;
			    } else if (tag === 'el-icon-arrow-right' && this.workIndex !== children.length - 1) {
			        ++this.workIndex;
			        children[this.workIndex - 1].style.transform = `translateX(-3.1rem)`;
			    }
			    for (let i = this.workIndex; i < children.length; i++) {
			       children[i].style.transform = `translateX(${0.2 * (i - this.workIndex)}rem) translateZ(${-0.2 * (i - this.workIndex)}rem) scale(${1 - (i - this.workIndex) * 0.05}, ${1 -
			        (i - this.workIndex) * 0.05})`;
			    }
			    // console.log(this.workIndex)
	  		}
		},
		mounted(){
			this.setWorkDraw();
		}
	}
</script>

<style lang="less">
	#subject{
		width: 100%;
		height: calc(100% - 0.5rem);
		background:#36648B url('~@/assets/image/bg.png');
		overflow: hidden;
		.content{
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 80%;
			height: 100%;
			margin:0 auto;
			.subject-list{
				transform-style: preserve-3d;
				width: 300px;
				padding: 0;
				height: 60vh;
				transition: transform 2s;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				color: #000;
				.subject-list-item{
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		            box-sizing: border-box;
		            border-radius: 12px;
		            padding: 20px;
		            height: 60vh;
		            position: absolute;
		            text-align: justify;
		            transition: transform 0.5s;
		            background: rgba(255, 255, 255, 0.98);
		            .item-title{
		            	margin:40px 0;
		            	text-align: center;
		            	color:#4985a0;
		            	font-size: 20px;
		            }
		            .item-detail{
		            	color:#000;
		            	font-size: 18px;
		            	margin-bottom: 20px;
		            }
		            .item-skill{
		            	color:#000;
		            	font-size: 18px;
		            	.skill{
		            		color:#E87E04;
		            	}
		            }
				}
			}
			.switch{
				display: flex;
				width: 80%;
				margin:0 auto;
				margin-top: 1rem;
				justify-content: space-around;
				.el-icon-arrow-left,.el-icon-arrow-right{
					cursor: pointer;
					font-size: 30px;
					border-radius: 50%;
					border:1px solid #fff;
				}
			}
		}
	}
</style>
