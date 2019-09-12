<template>
	<div id="index">
		<div class="container">
			<div class="main">
				<div class="desc desc1">Hi , 我 叫 张 君</div>
				<span class="desc desc2">{{str2}} <i class="type-cursor">|</i> </span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	  name: 'index',
	  data(){
	  	return {
	  		str1:'立 志 成 为 一 名 优 秀 的 前 端 工 程 师',
	  		str2:'',
	  		i:0,
	  		timer:0,
	  	}
	  },
	  methods:{
	  	typing(){
	  		if(this.i <= this.str1.length){
	  			this.str2 = this.str1.slice(0,this.i++)
	  			this.timer = setTimeout(()=>{
	  				this.typing()
	  			},100)
	  		}else{
	  			clearTimeout(this.timer)
	  		}
	  	}
	  },
	  mounted(){
	  	this.typing()
	  },

	}
</script>

<style lang="less">
	#index{
		width: 100%;
		height: calc(100% - 0.5rem);
		animation: changeBack 20s infinite;
		.container{
			width: 80%;
			height: 100%;
			margin:0 auto;
			.main{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				.desc{
					font-size: 0.2rem;
					color:#2C3E4F;
				}
				.desc1{
					margin-bottom: 0.8rem;
					font-weight: 500;
					font-size: 0.5rem;
					animation: show 2s;
				}
				.type-cursor{
					font-style: normal;
					animation: flash 1s infinite;
				}
			}
		}
	}

	@keyframes flash{
		0%{
			opacity: 0;
		}
		50%{
			opacity: 1;
		}
		100%{
			opacity: 0;
		}
	}

	@keyframes changeBack{
		0%{
			background: url('~@/assets/image/index1.jpg') no-repeat center/cover;
		}
		50%{
			background: url('~@/assets/image/index2.jpg') no-repeat center/cover;
		}
		100%{
			background: url('~@/assets/image/index1.jpg') no-repeat center/cover;
		}
	}

	@keyframes show{
		0%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
</style>
