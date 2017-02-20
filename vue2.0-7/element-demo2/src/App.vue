<template>
  <div id="app">
    <el-button @click="get">普通按钮</el-button>
     <div>
      {{myMessage}}
    </div>
    <br>
    <br>
    <el-button type='primary'>普通按钮</el-button>
    <el-radio class="radio" v-model="radio" label="1">备选项</el-radio>
    <el-radio class="radio" v-model="radio" label="2">备选项</el-radio>
    <!-- 日历 时间 -->
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <!-- rate评分 -->
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value2"></el-rate>
    </div>
    <!-- 分页 -->
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
      <!-- Tabs -->
    <el-tabs type="card" closable>
      <el-tab-pane label="用户管理">用户管理

        <el-badge :value="12" class="item">
          <el-button size="small">评论</el-button>
        </el-badge>
        <el-badge :value="3" class="item">
          <el-button size="small">回复</el-button>
        </el-badge>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理
        <el-switch
          v-model="value3"
          on-text=""
          off-text="">
        </el-switch>
        <el-switch
          v-model="value4"
          on-color="#13ce66"
          off-color="#ff4949">
        </el-switch>
      </el-tab-pane>
      <el-tab-pane label="角色管理">角色管理
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="日期"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>

      </el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <!-- 自己写的按钮 -->
    <myButton @click.native="get"></myButton>
   
  </div>
</template>

<script>
import myButton from './components/Button.vue'
import axios from 'axios'

export default {
  components:{
    myButton
  },
  name: 'app',
  data () {
    return {
      myMessage:'默认数据',
      msg: 'Welcome to Your Vue.js App',
      radio:'1',
      value1:'',
      value2:null,
      value3: true,
      value4: true,
      tableData:[{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted(){
    this.get('a.txt')
  },
  methods:{
    get(){
      axios.get('a.txt').then(function(res){
          this.myMessage=res.data;
      }.bind(this)).catch(function(err){
        console.log(err);

      });
    }
  }
}
</script>

<style>
#app{
  margin-left: 20%;
}
#app>*{
  padding: 10px;
}

.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
