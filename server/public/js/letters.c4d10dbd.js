(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["letters"],{"365c":function(t,e,n){"use strict";n.d(e,"f",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"g",(function(){return m}));n("d3b7");var a=n("bc3a"),r=n.n(a);r.a.defaults.withCredentials=!0;var o=r.a.create({baseURL:"",timeout:8e3});o.interceptors.request.use((function(t){return console.log("config: ",t),t}),(function(t){return console.log(t),Promise.reject()})),o.interceptors.response.use((function(t){if(200===t.status)return t.data;Promise.reject()}),(function(t){return console.log(t),Promise.reject()}));var i=o,l=function(t){return i({url:"/send",method:"post",data:t})},c=function(t){return i({url:"/extract",method:"post",data:t})},s=function(t){return i({url:"/getPublicLetter",method:"get",params:t})},u=function(t){return i({url:"/getAllLetter",method:"get",params:t})},d=function(t){return i({url:"/byExtractGetEmail",method:"post",data:t})},p=function(t){return i({url:"/getQuestion",method:"get",params:t})},g=function(t){return i({url:"/getEmail",method:"get",params:t})},m=function(t){return i({url:"/tips",method:"post",data:t})}},5921:function(t,e,n){"use strict";n("d950")},"856f":function(t,e,n){"use strict";n.r(e);var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"letters-box"},[n("el-table",{staticClass:"table-box",attrs:{data:t.pageControl.list}},[n("el-table-column",{staticStyle:{width:"100%"},attrs:{align:"center",prop:"name",label:"昵称",width:"120"}}),n("el-table-column",{attrs:{align:"center",prop:"receiptEmail",label:"email地址",width:"220"}}),n("el-table-column",{attrs:{align:"center",prop:"createTime",label:"创建时间",width:"220"}}),n("el-table-column",{attrs:{align:"center",prop:"sendTime",label:"收信时间",width:"220"}}),n("el-table-column",{attrs:{align:"center",prop:"statusText",label:"当前状态  "}})],1),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageControl.total},on:{"current-change":t.pageChange}})],1)],1)},o=[],i=n("ade3"),l=(n("672e"),n("450d"),n("101e")),c=n.n(l),s=(n("5466"),n("ecdf")),u=n.n(s),d=(n("38a0"),n("ad41")),p=n.n(d),g=(n("b0c0"),n("159b"),n("ac1f"),n("5319"),n("365c")),m=n("5a0c"),f=n.n(m),h={components:(a={},Object(i["a"])(a,p.a.name,p.a),Object(i["a"])(a,u.a.name,u.a),Object(i["a"])(a,c.a.name,c.a),a),data:function(){return{pageControl:{page:1,pageSize:10,list:[],total:0},statusTexts:["尚未寄送","已寄送"]}},beforeMount:function(){},mounted:function(){this.loadData()},methods:{loadData:function(){var t=this,e={page:this.pageControl.page,pageSize:this.pageControl.pageSize},n=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(g["b"])(e).then((function(e){n.close(),e.statusCode?(t.pageControl.list=e.data,t.setField(),t.pageControl.total=e.totalCount):t.$message.error(e.message)})).catch((function(e){n.close(),t.$message.error(e||"获取邮件列表失败, 请稍后重试!")}))},pageChange:function(t){console.log(t),this.pageControl.page=t,this.loadData()},setField:function(){var t=this,e=this.pageControl.list;try{e.forEach((function(e){e.receiptEmail=e.receiptEmail.replace(/(\d{3})(\d+)(\d{0})/,(function(t,e,n,a){var r="";while(r.length<n.length)r+="*";return e+r+a})),e.createTime=f()(e.createTime).format("YYYY-MM-DD HH:mm"),e.sendTime=f()(e.sendTime).format("YYYY-MM-DD HH:mm"),e.statusText=t.statusTexts[e.status-1]}))}catch(n){console.log(n)}}}},b=h,C=(n("5921"),n("2877")),w=Object(C["a"])(b,r,o,!1,null,"1eb2d3e4",null);e["default"]=w.exports},d950:function(t,e,n){}}]);