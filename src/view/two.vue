<template>
  <div>

  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    /* 
        beforecreated：el 和 data 并未初始化
        created:完成了 data 数据的初始化，el没有
        beforeMount：完成了 el 和 data 初始化
        mounted ：完成挂载
        update:我们单击页面中的“更新数据”按钮，将数据更新。
        下面就能看到data里的值被修改后，将会触发update的操作。
        beforeUpdate:是指view层的数据变化前，不是data中的数据改变前触发。因为Vue是数据驱动的
        beforeDestory： 你确认删除XX吗？ 
        destoryed ：当前组件已被删除，清空相关内容
    */
    beforeCreate(){
        console.log("我是在没有加载页面数据前执行的");
    },
    created(){
        console.log("我是页面创建完成调用的")
    },
    beforeMount(){
        console.log("挂载前数据已经初始化");
    },
    mounted(){
        console.log("挂载结束数据已经初始化");
    },
    beforeUpdate() {
        console.log("更新前状态,是页面渲染新数据之前");
    },
    updated(){
        console.log("更新前更新完成状态");        
    },
    beforeDestroy() {
        console.log("销毁前");                
    },
    destroyed(){
        console.log("销毁完成状态");                
    }
}
</script>

<style>

</style>
