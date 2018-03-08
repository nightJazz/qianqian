export default{
  //定义状态，相当于data数据
  state:{
    //数据结构预览
    cart:JSON.parse(localStorage.getItem('cart')) || {}

  },
  //定义修改状态的方法，为固定语法。意思为更换
  mutations: {
    //modify意思为修改  里面只能有2个参数
    //第一个为固定的state，固定传递
    //第二参数为我们自由传递，可传可不传
    modify(state,data){
      let {id,num} = data;
      localStorage.setItem('cart',JSON.stringify(this.cart))
      state.cart[id]=num;
      // console.log(state.cart);
    }
  }
}
