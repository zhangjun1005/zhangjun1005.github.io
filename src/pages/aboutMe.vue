<template>
	<div id="aboutMe">
		<div class="container">
			
			<el-row class="iconWrapper">
				<el-col :span="6" class="icon-item">
			  		<i class="iconfont icon-nianling"></i>
			  		<p class="info">年龄 / {{age}}</p>
			  	</el-col>
			  	<el-col :span="6" class="icon-item">
			  		<i class="iconfont icon-xueli"></i>
			  		<p class="info">学历 / 本科</p>
			  	</el-col>
			  	<el-col :span="6" class="icon-item">
			  		<i class="iconfont icon-zuobiao"></i>
			  		<p class="info">坐标 / 上海</p>
			  	</el-col>
			  	<el-col :span="6" class="icon-item">
			  		<i class="iconfont icon-fangwuzhuangtai-kong"></i>
			  		<p class="info">状态 / 离职</p>
			  	</el-col>
			</el-row>
			<el-row class="descWrapper">
				<div class="descItem">非科班出生,只因对技术的热爱,开始自学</div>
				<div class="descItem delay200">勇于尝试新鲜事物,对于未知,敢于探索</div>
				<div class="descItem delay400">有较强的学习能力,具备独立分析解决问题能力</div>
				<div class="descItem delay600">有很好的团队合作能力,喜欢在合作中成长</div>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'aboutMe',
	  data(){
	  	return {
	  		age:0,
	  	}
	  },
	  methods:{
	  	getAge(year,month,day){
	  		let now = new Date()
	  		let dec = now.getFullYear() - year
	  		//处理闰年
	  		if(month === 2 && day === 29 && !this.isLeap(now.getFullYear())){
	  			day = 28
	  		}
	  		let birthdayThisyear = new Date(now.getFullYear(),month - 1,day)
	  		if(birthdayThisyear > now){
				dec --;
			}
			this.age = dec
	  	},
	  	isLeap(year){
	  		if(year % 100 === 0 && year % 400 === 0 || year % 100 !== 0 && year % 4 === 0){
				return true;
			}else{
				return false;
			}
	  	}
	  },
	  mounted(){
	  	this.getAge(1993,10,5)
	  }
	}
</script>

<style lang="less">
	#aboutMe{
		width: 100%;
		height: calc(100% - 0.5rem);
		background:	#828282 url('~@/assets/image/bg.png');
		overflow: hidden;
		.container{
			width: 80%;
			height: 100%;
			margin:0 auto;
			.iconWrapper{
				width: 100%;
				height: 60%;
				transform: translateY(10%);
				.icon-item{
					text-align: center;
					transform: scale(0.97);
					border:1px solid rgba(255,239,219,.3);
					box-shadow: 0.1rem 0.1rem 0.1rem #363636;
					padding:1rem 0;
					.iconfont{
						font-size: 1rem;
					}
					.info{
						margin-top: 0.3rem;
						font-size: 0.18rem;
					}
				}
			}
			.descWrapper{
				display: flex;
				flex-direction: column;
				justify-content: space-around;
				text-align: center;
				width: 100%;
				height: 40%;
				.descItem{
					font-weight: 700;
					font-size: 0.18rem;
					animation:flyUp 0.5s;
				}
				.delay200{
					animation-delay: 0.5s;
					animation-fill-mode: backwards!important;
				}
				.delay400{
					animation-delay: 1s;
					animation-fill-mode: backwards!important;
				}
				.delay600{
					animation-delay: 1.5s;
					animation-fill-mode: backwards!important;
				}
			}
		}
	}
	
	@media (max-width: 1024px){
		.icon-item{
			width: 50%!important;
		}
	}

	@keyframes flyUp{
		0%{
			transform: translateY(1000%);
			opacity: 0;
		}
		100%{
			transform: translateY(0);
			opacity: 1;
		}
	}

</style>
