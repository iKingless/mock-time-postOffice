(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["public"],{"28a1":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"public-box"},[t._l(t.pageControl.list,(function(e,a){return n("div",{key:a,staticClass:"alone"},[n("div",{staticClass:"message"},[n("span",{staticClass:"a"},[t._v("投递人: "+t._s(e.name)+" "+t._s(t._f("hiddenEmail")(e.receiptEmail)))]),n("span",[t._v(t._s(t._f("formatDate")(e.createTime))+" 寄往 "+t._s(t._f("formatDate")(e.sendTime)))])]),n("div",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}})])})),t.isExtract?t._e():n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.pageControl.total},on:{"current-change":t.pageChange}})],1)],2)},o=[],r=n("ade3"),s=(n("672e"),n("450d"),n("101e")),i=n.n(s),c=(n("b0c0"),n("365c")),u={components:Object(r["a"])({},i.a.name,i.a),data:function(){return{pageControl:{page:1,pageSize:6,list:[],total:0},isExtract:!1}},beforeMount:function(){},mounted:function(){var t=this.$storage.read("extract-data");t?(this.isExtract=!0,this.pageControl.list.push(t),this.$storage.remove("extract-data")):this.loadData()},methods:{loadData:function(){var t=this,e={page:this.pageControl.page,pageSize:this.pageControl.pageSize},n=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(c["d"])(e).then((function(e){n.close(),e.statusCode?(t.pageControl.list=e.data,t.pageControl.total=e.totalCount):t.$message.error(e.message)})).catch((function(e){n.close(),t.$message.error(e||"获取公开信列表失败, 请稍后重试!")}))},pageChange:function(t){console.log(t),this.pageControl.page=t,this.loadData()}}},l=u,d=(n("7fd0"),n("2877")),g=Object(d["a"])(l,a,o,!1,null,"1413a538",null);e["default"]=g.exports},"365c":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"h",(function(){return c})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return g})),n.d(e,"c",(function(){return p})),n.d(e,"g",(function(){return f}));n("d3b7");var a=n("bc3a"),o=n.n(a);o.a.defaults.withCredentials=!0;var r=o.a.create({baseURL:"",timeout:8e3});r.interceptors.request.use((function(t){return console.log("config: ",t),t}),(function(t){return console.log(t),Promise.reject()})),r.interceptors.response.use((function(t){if(200===t.status)return t.data;Promise.reject()}),(function(t){return console.log(t),Promise.reject()}));var s=r,i=function(t){return s({url:"/send",method:"post",data:t})},c=function(t){return s({url:"/extract",method:"post",data:t})},u=function(t){return s({url:"/getPublicLetter",method:"get",params:t})},l=function(t){return s({url:"/getAllLetter",method:"get",params:t})},d=function(t){return s({url:"/byExtractGetEmail",method:"post",data:t})},g=function(t){return s({url:"/getQuestion",method:"get",params:t})},p=function(t){return s({url:"/getEmail",method:"get",params:t})},f=function(t){return s({url:"/tips",method:"post",data:t})}},"45bd":function(t,e,n){},"7fd0":function(t,e,n){"use strict";n("45bd")}}]);