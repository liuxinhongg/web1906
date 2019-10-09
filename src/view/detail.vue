<template>
  <div>
      <el-row class="detailbox">
        <el-col :span="12" v-for="(item, index) in tableinfo" :key="index" >
            <el-card :body-style="{ padding: '0px' }">
            <img :src="item.pict_url" class="image">
            <div style="padding: 14px;">
                <h3><font color="red"> {{item.cat_leaf_name}}</font></h3>
                <div class="bottom clearfix">
                    <p class="pricebox">
                        <span>现价：{{item.reserve_price}}</span>
                        <span>原价：{{item.zk_final_price}}</span>                        
                    </p>
                </div>
            </div>
            </el-card>
        </el-col>
      </el-row>
  </div>

</template>

<script>
export default {
    data() {
        return {
           info:'', 
           tableinfo:[]
        }
    },
    methods:{
        getinfo(){
            this.$http.get('/api/w/client/findGoodsDetail?info='+this.info).then(res=>{
                console.log(res);
                this.tableinfo=res.data.data.detail.tbk_item_info_get_response.results.n_tbk_item;
            })
        }
    },
    created(){
        this.info=this.$route.query.info;
        console.log(this.info);
        this.getinfo();
    }
}
</script>

<style>
.detailbox{
    width: 80%;
    margin: 30px auto;

}
.pricebox{
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
  }
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 400px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
