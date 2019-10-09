<template>
  <div>
        <el-table :data="tableData" style="width: 100%" >
        <el-table-column 
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column label="姓名" width="180">
          <template slot-scope="scope">
            <div>
              <img :src='scope.row.img' alt="" style="width:100px;height:100px;">
            </div>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
       <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next"
          :total="totalnum">
        </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage:1,
      pagesize:10,
      totalnum:1,
      tableData: []
    }
  },
  methods:{
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage=val;
      this.xhdq();
    },
    xhdq(){
      let data={
        showapi_appid:"46452",
        page:this.currentPage,
        maxResult:this.pagesize,
        showapi_sign:'c3bc2247155b4219bffb60cac4fd315c',
      } 
      var dataone=new FormData();
        dataone.append("showapi_appid","46452")
        dataone.append("page",this.currentPage)
        dataone.append("maxResult",this.pagesize)
        dataone.append("showapi_sign","c3bc2247155b4219bffb60cac4fd315c")
      let that=this;
       that.$http.get('http://route.showapi.com/341-2',{params:data}).then(res=>{
         console.log(res);
          // that.currentPage=res.data.showapi_res_body.currentPage;
         that.tableData=res.data.showapi_res_body.contentlist;
         that.totalnum=res.data.showapi_res_body.allNum;
       })
      
        // that.$http.post('http://route.showapi.com/341-2',dataone).then(res=>{
        //  console.log(res);
        //   that.currentPage=res.data.showapi_res_body.currentPage;
        //  that.tableData=res.data.showapi_res_body.contentlist;
        //  that.totalnum=res.data.showapi_res_body.allNum;
      //  })
    },
  },
  created(){
    this.xhdq();
  },
  mounted(){

  }
};
</script>

<style>
.box {
  width: 100%;
  height: 500px;
}
</style>

