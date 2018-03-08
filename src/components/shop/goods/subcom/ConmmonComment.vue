<template>
  <!--网友评论-->
  <div class="comment-box">
    <!--取得评论总数-->
    <form id="commentForm" name="commentForm" class="form-box" @submit.prevent="setdate">
      <div class="avatar-box">
        <i class="iconfont icon-user-full"></i>
      </div>
      <div class="conn-box">
        <div class="editor">
          <textarea id="txtContent" v-model="commenttxt.commenttxt" name='txtContent' sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
          <span class="Validform_checktip"></span>
        </div>
        <div class="subcon">
          <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
          <span class="Validform_checktip"></span>
        </div>
      </div>
    </form>
    <ul id="commentList" class="list-box">
       <p  v-if="top.length ==0" style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
      <li v-for="(item,i) in top" :key="i">
        <div class="avatar-box">
          <i class="iconfont icon-user-full"></i>
        </div>
        <div class="inner-box">
          <div class="info">
            <span>{{item.user_name}}</span>
            <span>{{item.add_time}}</span>
          </div>
          <p>{{item.content}}</p>
        </div>
      </li>


    </ul>

  </div>

</template>

<script>
export default {
  props:['id'],
  data(){
    return{
      top:[],
      commenttxt:{
        commenttxt:''
      }
    }
  },
  methods: {
    //获取评论
    getdate(){
      let urls=`${this.$api.commentList}goods/${this.id}?pageIndex=1&pageSize=10`
      this.$http.get(urls).then(res=>{
        if(res.data.status==0){
          this.top=res.data.message
        }
      })
    },
    //写评论
    setdate(){
      let urls=`/site/validate/comment/post/goods/102`
      console.log(this.commenttxt);
      this.$http.post(urls,this.commenttxt).then(res=>{
        if(res.data.status==0){
          this.commenttxt.commenttxt='';
          this.getdate();
          console.log(123);
        }else{
          // console.log(1456);
        }
      })
    }
  },
  created(){
    this.getdate();

  },
  //重新调用页面
  watch:{
    id(){
      this.getdate();
    }
  }
}
</script>

<style scoped>

</style>
