<template>
	<div class="block">
   
    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				value2:'',
				pickerOptions1: {
         		disabledDate(time) {
            		return time.getTime() < Date.now() - 8.64e7;
          }
        },
			}
		}
	}

</script>