// components/Tabs/Tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //从父组件中接收数据
    aaa:{
      type:String,
      value:""
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    tabs:[
      {
        id:0,
        name:"首页",
        isActive:true
      },
      {
        id:1,
        name:"原创",
        isActive:false
      },{
        id:2,
        name:"分类",
        isActive:false
      },{
        id:3,
        name:"关于",
        isActive:false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemTap(e){
      const {index}=e.currentTarget.dataset;
      console.log(index);
      let tabs=this.data.tabs;
      //【】.foreach遍历数组，遍历数组时候修改了v，也会导致原数组修改。
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData({
        tabs
      });
    }
  }
})
