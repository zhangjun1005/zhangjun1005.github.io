<template>
	<div>
		<div class="navBarWrapper">
			<div class="navBrand">My Resume</div>
			<div class="navItemWrapper">
				<router-link :to="{'name':'index'}" class="navItem">首页</router-link>
				<router-link :to="{'name':'aboutMe'}" class="navItem">关于我</router-link>
				<router-link :to="{'name':'experience'}" class="navItem">个人经历</router-link>
				<router-link :to="{'name':'subject'}" class="navItem">项目经验</router-link>
			</div>
			<!-- 手机模式下 -->
			<div class="navItemFold">
				<i class="el-icon-menu" @click="toggleFold"></i>
			</div>
		</div>
		<transition name="fade">
			<div class="foldWrapper" v-show="fold">
				<router-link @click.native="close" :to="{'name':'index'}" class="navItem">首页</router-link>
				<router-link @click.native="close" :to="{'name':'aboutMe'}" class="navItem">关于我</router-link>
				<router-link @click.native="close" :to="{'name':'experience'}" class="navItem">个人经历</router-link>
				<router-link @click.native="close" :to="{'name':'subject'}" class="navItem">项目经验</router-link>
			</div>
		</transition>
		
	</div>
	
</template>

<script>
	export default {
		name: 'AppHeader',
		data(){
			return {
				fold:false,
				screenWidth:document.body.clientWidth,
				timer:false,
			}
		},
		methods:{
			toggleFold(){
				this.fold = !this.fold	
			},
			close(){
				this.fold = false
			}
		},
		mounted(){
			let self = this
			window.onresize = ()=>{
				return (()=>{
					window.screenWidth = document.body.clientWidth
					self.screenWidth = window.screenWidth
				})()
			}
		},
		watch:{
			screenWidth(val){
				if(!this.timer){
					this.screenWidth = val
					if(this.screenWidth > 600){
						this.fold = false
					}
					this.timer = true
					let self = this
					setTimeout(function(){
						self.timer = false
					},20)
				}
			}
		}

	}
</script>

<style lang="less">
	
	.fade-enter-active,.fade-leave-active{
		transition:all .2s linear;
	}
	
	.fade-enter,.fade-leave-to{
		transform: translate3d(0,-100%,0);
	}

	.navBarWrapper{
		position: relative;
		z-index: 999;
		display: flex;
		justify-content: space-between;
		width: 100%;
		/*height: 0.4rem;*/
		background-color: #2C3E4F;
		line-height: 0.5rem;
		
		.navBrand{
			padding-left:1rem;
			font-size: 0.15rem;
			font-weight: 700;
		}
		.navItemWrapper{
			display: flex;
			padding-right: 1rem;
			.navItem{
				margin-left: 0.5rem;
				font-size: 0.14rem;
				&.router-link-exact-active{
					color:rgb(240,20,20);
				}
			}
		}
		.navItemFold{
			display: none;
		}
		
	}
	.foldWrapper{
		position: absolute;
		top:0.5rem;
		z-index:10;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		background-color: #2C3E4F;
		border-top: 1px solid #fff;
		.navItem{
			margin-bottom: 0.2rem;
			font-size: 0.14rem;
			&:first-child{
				margin-top:0.2rem;
			}
			&.router-link-exact-active{
				color:rgb(240,20,20);
			}
		}
	}
	

	@media (max-width: 600px){
		.navBarWrapper{
			.navItemWrapper{
				display: none;
			}
			.navItemFold{
				display: block;
				padding-right: 1rem;
				font-size: 0.4rem;
			}
		}
		
	}

	
</style>
