<template>
	<div id="news">
		<h3>我是新闻页</h3>
		<ul>
			<li v-for='(val,index) in news'>
				{{val}}
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'news',
		data(){
			return {
				news:['11111','22222','33333','444444']
				
			}
		}
	}

</script>
<style>
	#news ul li{
		border-bottom: 2px solid #f60;
	}
</style>