<template>
  <div>
      <el-row class="contentbox">
        <el-col :span="5" v-for="(item, index) in goodslist" :key="index" style="margin:10px 20px;">
            <el-card >
                <img :src="item.pict_url" class="image" @click="jump(item.item_id)">
                <div style="padding: 14px;">
                    <span>{{item.category_name}}</span>
                    <div class="bottom clearfix">
                    <p class="pricebox">
                        <span>现价：{{item.reserve_price}}</span>
                        <span>原价：{{item.zk_final_price}}</span>                        
                    </p>
                    <!-- <time class="time">{{ item.coupon_end_time }}</time> -->
                        <a :href="item.coupon_share_url"><el-button type="success">领劵</el-button></a> 
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
            goodslist:[]
        }
    },
    methods:{
        jiekou(){
            this.$http.get("/api/w/client/index").then(res=>{
                console.log(res);
                // this.goodslist=res.data.data.goodsListc.tbk_dg_material_optional_response.result_list.map_data;
                // console.log(this.goodslist)
            })
        },
        jump(info){
            console.log(info);
            this.$router.push('/detail?info='+info);
        }
    },
    mounted(){
        this.jiekou();
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
.contentbox{
    width: 90%;
    margin: 20px auto;
}
.time {
    font-size: 13px;
    color: #999;
  }
  .pricebox{
      width: 100%;
      height: 40px;
      line-height: 40px;
      display: flex;
      justify-content: space-between;
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
    height: 200px;
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
