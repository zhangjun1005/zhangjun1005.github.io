<template>
	<div id="experience">
		<ul class="container">
			<li class="work work_left">
				<div class="work_content">
					<h2 class="companyName">上海启明软件股份有限公司</h2>
					<p class="fz14 time">2018/10 - 2019/08</p>
					<p class="fz14 job">开发部 / 前端工程师</p>
					<p class="fz14 info">根据产品需求负责公司web类产品的界面开发</p>
					<p class="fz14 info">与后台开发工程师协作</p>
					<p class="fz14 info">完成各种数据交互、动态信息展示以及与用户的互动</p>
				</div>
			</li>

			<li class="work work_right">
				<div class="work_content">
					<h2 class="companyName">上海海洋大学</h2>
					<p class="fz14 time">2018/03 - 2021/03</p>
					<p class="fz14 job">计算机科学与技术</p>
					<p class="fz14 info">本科(专升本)</p>
				</div>
			</li>

			<li class="work work_left">
				<div class="work_content">
					<h2 class="companyName">上海中侨职业技术学院</h2>
					<p class="fz14 time">2012/09 - 2015/06</p>
					<p class="fz14 job">物流管理</p>
					<p class="fz14 info">专科</p>
					<p class="fz14 info">获得大学英语四级</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
	  name: 'experience',
	  data(){
	  	return {
	  		
	  	}
	  }
	}
</script>

<style lang="less">
	*{box-sizing: border-box;}
	#experience{
		width: 100%;
		height: calc(100% - 0.5rem);
		background:#8B7E66 url('~@/assets/image/bg.png');
		overflow: hidden;
		.container{
			position:relative;
			width: 80%;
			height: 100%;
			margin:0 auto;
			top:20px;
			&:after{
				content:"";
				position:absolute;
				width: 5px;	
				background-color: #eee;
	    		left: 50%;
			    top: 10px;
			    bottom: 0;
			    margin-left: -2px; 
			    animation:heightSlide 2s linear;
			};
			.work{
				padding:10px 30px 40px 30px;
				width: 50%;
				position: relative;
				background-color: inherit;
				&:nth-child(1):after{
					animation-duration:0s;
				}
				&:nth-child(2):after{
					animation-duration:1.3s;
				}
				&:nth-child(3):after{
					animation-duration:2s;
				}
				&:before{
					content: " ";
				    height: 0;
				    position: absolute;
				    top: 20px;
				    width: 0;
				    z-index: 1;
				}
				&:after{
					content: '';
				    position: absolute;
				    width: 30px;
				    height: 30px;
				    right: -19.75px;
				    background-color: white;
				    border: 4px solid #0065b3;
				    top: 10px;
				    border-radius: 50%;
				    animation:showIn ease;
				    z-index: 1;
				}
				.work_content{
					padding: 20px 30px;
    				background-color: #fff;
    				position: relative;
    				animation:showIn 3s linear;
    				p{
    					margin-bottom: 2px;
    				}
    				.companyName{
    					font-weight: 700;
    					font-size: 0.18rem;
    					margin-bottom: 5px;
    					color:#2C3E4F;
    				}
    				.info{
    					color:#000;
    				}
    				.time{
    					color: #FFA500;
    					margin-bottom: 5px;
    				}
    				.job{
    					color:#4876FF;
    				}
				}
			}
			.work_left{
				&:before{
					right: 22px;
				    border: medium solid transparent;
				    border-width: 8px 0px 8px 8px;
				    border-color: transparent transparent transparent white;
				    animation:showIn 3s linear;
				}
			}
			.work_right{
				margin-left: 50%;
				&:before{
					left: 22px;
				    margin-left: 0;
				    border: medium solid transparent;
				    border-width: 8px 8px 8px 0;
				    border-color: transparent white transparent transparent;
				    animation:showIn 3s linear;
				}
				&:after{
					right: auto;
    				left: -18.75px;
				}
			}
		}
	}

	@media all and (max-width: 600px){
		#experience{
			.container{
				&:after{
					left:33.75px;
				}
				.work {
			        width: 100%;
			        margin-left: 0;
			        padding-left: 64px;
			        padding-right: 20px;
			        &:before {
				        right: auto;
				        left: 56px;
				        margin-left: 0;
				        border: medium solid transparent;
				        border-width: 8px 8px 8px 0;
				        border-color: transparent white transparent transparent;
				    }
				    &:after{
						left: 15px;
				    }
			    }
		    }
		}
	}
	
	@keyframes heightSlide{
		0%{
            height: 0;
        }
        100%{
            height: 100%;
        }
	}
	
	@keyframes showIn{
		0%,70%{
			opacity: 0;
		}
		100%{
			opacity: 1;
		}
	}
</style>
