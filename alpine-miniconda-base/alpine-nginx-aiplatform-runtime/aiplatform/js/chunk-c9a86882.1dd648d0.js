(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9a86882"],{"0714":function(e,t,n){},"0b0e":function(e,t,n){},1799:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auto-pagination"},[n("a-pagination",{attrs:{pageSizeOptions:e.pageSizeOptions,showSizeChanger:e.showSizeChanger,pageSize:e.pageSize,total:e.total,current:e.current,showQuickJumper:e.showQuickJumper,itemRender:e.itemRenderdefault},on:{change:e.change,showSizeChange:e.showSizeChange},scopedSlots:e._u([{key:"buildOptionText",fn:function(t){return[n("span",[e._v(e._s(t.value)+"条/页")])]}}])})],1)},i=[],o={name:"Pagination",data:function(){return{}},methods:{itemRenderdefault:function(e,t,n){var a=this.$createElement;return"prev"===t?a("a",["上一页"]):"next"===t?a("a",["下一页"]):n},showSizeChange:function(e,t){this.$emit("showSizeChange",e,t)},change:function(e){this.$emit("change",e)}},props:{pageSizeOptions:{type:Array,default:function(){return["10","20","30"]}},showSizeChanger:{default:!1},showQuickJumper:{default:!1},pageSize:{default:10},total:{default:0},current:{default:1}}},s=o,r=(n("b5cd"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,"7e05edfa",null);t["a"]=c.exports},"21a6":function(e,t,n){(function(n){var a,i,o;(function(n,s){i=[],a=s,o="function"===typeof a?a.apply(t,i):a,void 0===o||(e.exports=o)})(0,(function(){"use strict";function t(e,t){return"undefined"==typeof t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function a(e,t,n){var a=new XMLHttpRequest;a.open("GET",e),a.responseType="blob",a.onload=function(){r(a.response,t,n)},a.onerror=function(){console.error("could not download file")},a.send()}function i(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(a){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var s="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=s.saveAs||("object"!=typeof window||window!==s?function(){}:"download"in HTMLAnchorElement.prototype?function(e,t,n){var r=s.URL||s.webkitURL,c=document.createElement("a");t=t||e.name||"download",c.download=t,c.rel="noopener","string"==typeof e?(c.href=e,c.origin===location.origin?o(c):i(c.href)?a(e,t,n):o(c,c.target="_blank")):(c.href=r.createObjectURL(e),setTimeout((function(){r.revokeObjectURL(c.href)}),4e4),setTimeout((function(){o(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(i(e))a(e,n,s);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){o(r)}))}}:function(e,t,n,i){if(i=i||open("","_blank"),i&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof e)return a(e,t,n);var o="application/octet-stream"===e.type,r=/constructor/i.test(s.HTMLElement)||s.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||o&&r)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=e:location=e,i=null},l.readAsDataURL(e)}else{var d=s.URL||s.webkitURL,u=d.createObjectURL(e);i?i.location=u:location.href=u,i=null,setTimeout((function(){d.revokeObjectURL(u)}),4e4)}});s.saveAs=r.saveAs=r,e.exports=r}))}).call(this,n("c8ba"))},"25e5":function(e,t,n){"use strict";var a=n("925d"),i=n.n(a);i.a},"2fbc":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auto-breadcrumb"},[n("a-breadcrumb",{attrs:{separator:">",routes:e.routes},scopedSlots:e._u([{key:"itemRender",fn:function(t){var a=t.route,i=(t.params,t.routes),o=t.paths;return[i.indexOf(a)===i.length-1||0===i.indexOf(a)?n("span",[e._v(" "+e._s(a.breadcrumbName)+" ")]):n("router-link",{attrs:{to:"/"+o.join("/")}},[e._v(" "+e._s(a.breadcrumbName)+" ")])]}}])}),e.isShowCommonQus?n("div",[n("span",{staticClass:"right-tips",on:{click:e.handleShowQues}},[e._v("常见问题?")])]):e._e(),e.isShowModelStrategy?n("div",[n("span",{staticClass:"right-tips goto"},[e._v("模型训练攻略>>")])]):e._e()],1)},i=[],o={data:function(){return{}},props:["routes","isShowCommonQus","isShowModelStrategy","handleShowQues"],methods:{goTo:function(e){this.$router.push({name:e})}}},s=o,r=(n("25e5"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,"5f60bff4",null);t["a"]=c.exports},"477a":function(e,t,n){"use strict";var a=n("6466"),i=n.n(a);i.a},6466:function(e,t,n){},"925d":function(e,t,n){},a980:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auto-empty"},[n("img",{attrs:{src:e.EmptyImg,alt:""}}),n("div",{staticClass:"empty-train"},[n("div",{staticClass:"top"},[e._v(e._s(e.emptyData.topTitle))]),n("div",[e._v(" "+e._s(e.emptyData.beforeContent)+" "),n("span",{staticClass:"create-train",on:{click:e.goto}},[e._v(e._s(e.emptyData.btnContent))])])])])},i=[],o=n("b45c"),s=n.n(o),r={data:function(){return{EmptyImg:s.a}},methods:{goto:function(){console.log(),console.log(this.emptyData.goToPath),this.$router.push(this.emptyData.goToPath)}},props:["emptyData"]},c=r,l=(n("e845"),n("2877")),d=Object(l["a"])(c,a,i,!1,null,"90eeee98",null);t["a"]=d.exports},b45c:function(e,t,n){e.exports=n.p+"img/empty.aed2f263.png"},b5cd:function(e,t,n){"use strict";var a=n("0714"),i=n.n(a);i.a},e845:function(e,t,n){"use strict";var a=n("0b0e"),i=n.n(a);i.a},fdb2:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"model-details"},[n("Breadcrumb",{attrs:{routes:e.routes}}),n("div",{staticClass:"model-details-wrap"},[n("a-radio-group",{attrs:{defaultValue:e.serviceType,buttonStyle:"solid"},on:{change:e.changeServiceType}},e._l(e.applicationEnum,(function(t,a){return n("a-radio-button",{key:a,attrs:{value:t.value}},[e._v(e._s(t.label))])})),1),n("a-row",{directives:[{name:"show",rawName:"v-show",value:e.data.length>0,expression:"data.length > 0"}],staticClass:"second-row",attrs:{type:"flex",justify:"space-between"}},[n("a-col",[e._v("该模型下共有"+e._s(e.verisonSum)+"个版本"),e.publishedVersion?n("span",[e._v("，其中"+e._s(e.publishedVersion&&e.publishedVersion.version)+"版本已发布")]):e._e()]),n("a-col",[n("a-button",{staticClass:"newtrainbtn",attrs:{type:"primary"},on:{click:e.gotoTrain}},[e._v("训练新版本")]),n("a-button",{attrs:{disabled:0===e.selectedRowKeys.length},on:{click:e.batchDelete}},[e._v("批量删除")])],1)],1),n("EmptyModel",{directives:[{name:"show",rawName:"v-show",value:0===e.data.length,expression:"data.length === 0"}],attrs:{emptyData:e.emptyData}}),n("a-table",{directives:[{name:"show",rawName:"v-show",value:e.data.length>0,expression:"data.length > 0"}],attrs:{columns:e.columns,dataSource:e.data,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},pagination:!1,loading:e.loading,expandedRowKeys:e.curExpandedRowKeys,rowKey:function(e){return e.id}},scopedSlots:e._u([{key:"version",fn:function(t){return n("div",{staticStyle:{cursor:"pointer",width:"80px"}},[n("span",[e._v(e._s(t))])])}},{key:"detail",fn:function(t,a){return["—"===t?n("span",[e._v("—")]):n("div",[n("span",[e._v("top1准确率 "+e._s(t["top1"]+"%"))]),n("br"),n("span",[e._v("top5准确率 "+e._s(t["top5"]+"%"))]),n("br"),n("router-link",{attrs:{to:{name:"modelReport",params:{id:a.action.modelId,name:a.action.modelName,versionKey:a.action.key,versionname:a.action.version,serviceType:e.serviceType}}}},[e._v("完整评估结果")])],1)]}},{key:"action",fn:function(t,a){return n("div",{staticClass:"actionColum"},[t.stopTrain?n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.stopTrain(t.key)}}},[e._v("停止训练")]):e._e(),t.applyPublic?n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.publish({id:e.modelId,key:t.key,serviceType:t.serviceType,version:a.version,name:e.modelName})}}},[e._v("申请发布")]):e._e(),t.check?n("router-link",{attrs:{to:{name:"check",params:{id:e.modelId,key:t.key,serviceType:t.serviceType}}}},[e._v("校验")]):e._e(),t.train?n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.train(e.modelId,t.key,t.serviceType)}}},[e._v(e._s(("训练终止"===a.trainState?"重新":"")+"训练"))]):e._e(),t.lookDetail?n("router-link",{attrs:{to:{name:"trainDataset",params:{id:t.modelId,modelName:t.modelName,key:t.key,version:t.version}}}},[e._v("查看训练集")]):e._e(),t.delete?n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.deleteVersion(t.key)}}},[e._v("删除")]):e._e(),2===t.serviceType&&"已发布"===a.publishState?n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.downLoadFile(t.key)}}},[e._v("下载SDK")]):e._e(),t.stopPublic?n("a",{attrs:{href:"javascript:;"},on:{click:function(n){return e.stopPublic(t.key)}}},[e._v("停止发布")]):e._e()],1)}}])},[n("template",{slot:"footer"},[n("Pagination",{attrs:{pageSize:e.pageSize,current:e.current,total:e.total},on:{change:e.changePage,showSizeChange:e.onShowSizeChange}})],1)],2)],1)],1)},i=[],o=n("2fbc"),s=n("a980"),r=n("1799");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=n("21a6"),p=[{title:"版本",dataIndex:"version",key:"version",scopedSlots:{customRender:"version"},align:"left"},{title:"类型",dataIndex:"modelSize",scopedSlots:{customRender:"modelSize"},align:"left"},{title:"训练状态",dataIndex:"trainState",key:"trainState",scopedSlots:{customRender:"trainState"},align:"left"},{title:"发布状态",dataIndex:"publishState",key:"publishState",align:"left"},{title:"模型效果",dataIndex:"detail",key:"detail",scopedSlots:{customRender:"detail"},align:"left"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"left"}],h={name:"",data:function(){var e=this.$route.params,t=e.id,n=e.serviceType,a=e.name,i=JSON.parse(localStorage.getItem("userInfo")),o=i.token,s=1;return n&&(s=n),{routes:[{path:"/",breadcrumbName:"模型中心"},{path:"/model-list",breadcrumbName:"模型列表"},{path:"/model-list/detail/:id/:name",breadcrumbName:""}],emptyData:{topTitle:"暂无模型版本",beforeContent:"",btnContent:"立即训练",goToPath:{name:"train",params:{modelId:t,serviceType:s}}},verisonSum:0,modelId:t,modelNameP:a,token:o,serviceType:s,publishedVersion:"",data:[],columns:p,current:1,total:0,pageSize:10,pageSizeOptions:["10","20","30","40","50"],loading:!1,selectedRowKeys:[],batchDeleteBtnStatus:!1,modelName:"",expandedRowKeys:[],innerData:[],curExpandedRowKeys:[],applicationEnum:[],checkedRow:0}},created:function(){var e=this,t=this.$route.params;this.modelId=t.id,this.modelName=t.name,this.routes[2]["breadcrumbName"]=t.name,this.routes[2]["path"]="/model-list/detail/".concat(t.id,"/").concat(t.name),this.getModelVersionData(t.id,this.serviceType,10,0),this.$api.trainModel.getApplicationTypeList().then((function(t){200===t.code&&(e.applicationEnum=t.data.map((function(e){return{label:e.name,value:e.id}})))})),this.lookPublishment(this.serviceType,this.modelId)},components:{Breadcrumb:o["a"],EmptyModel:s["a"],Pagination:r["a"]},methods:{gotoTrain:function(){var e=this.serviceType,t=this.modelId;this.$router.push({name:"train",params:{modelId:t,serviceType:e}})},lookPublishment:function(e,t){var n=this;this.$api.modelList.lookPublishment(e,t).then((function(e){e.success&&e.data?n.publishedVersion=e.data:n.publishedVersion=""}))},publish:function(e){var t=e.id,n=e.key,a=e.serviceType,i=e.version,o=e.name,s=this.publishedVersion,r=this;s?this.$confirm({title:"信息提示",content:(s.httpUrl?"当前模型的上线服务为".concat(s.httpUrl):"当前模型为".concat(this.modelNameP))+"，相应的模型版本为".concat(s.version,"，是否确认要替换为").concat(i,"?"),onOk:function(){r.$router.push({name:"public",params:{id:t,key:n,serviceType:a,version:i,publishedVersion:s.id}})},onCancel:function(){},okText:"确定",cancelText:"取消",centered:!0}):this.$router.push({name:"public",params:{id:t,key:n,serviceType:a,name:o,publishedVersion:s.id}})},getModelVersionData:function(e,t,n,a){var i=this;this.loading=!0,this.$api.modelList.getModelVersionList(e,t,n,a).then((function(e){200===e.code&&(i.loading=!1,i.data=e.data.content,i.verisonSum=e.data.count,i.total=e.data.count,i.selectedRowKeys=[],i.data.forEach((function(e){e.action={},"训练中"===e.trainState&&"未发布"===e.publishState&&(e.action.stopTrain=!0,e.action.viewDataset=!0,e.action.lookDetail=!0),"训练完成"===e.trainState&&"未发布"===e.publishState&&(e.action.applyPublic=!0,e.action.check=!0,e.action.train=!0,e.action.viewDataset=!0,e.action.lookDetail=!0,e.action.delete=!0),"训练终止"===e.trainState&&"未发布"===e.publishState&&(e.action.train=!0,e.action.delete=!0),"数据准备中"===e.trainState&&"未发布"===e.publishState&&(e.action.applyPublic=!1,e.action.check=!1,e.action.train=!1,e.action.viewDataset=!1,e.action.lookDetail=!1,e.action.delete=!1),"训练失败"===e.trainState&&"未发布"===e.publishState&&(e.action.lookDetail=!0,e.action.delete=!0),"训练完成"===e.trainState&&"已发布"===e.publishState&&(e.action.check=!0,e.action.train=!0,e.action.viewDataset=!0,e.action.lookDetail=!0,e.action.delete=!0),"训练完成"===e.trainState&&"发布中"===e.publishState&&(e.action.check=!0,e.action.viewDataset=!0,e.action.lookDetail=!0,e.action.stopPublic=!0),"offlineServices"===i.serviceType&&(e.action.check=!1),e.action.modelId=i.modelId,e.action.modelName=i.modelName,e.action.key=e.id,e.action.version=e.version,e.action.serviceType=i.serviceType,e.detail||(e.detail="—")})))}))},onShowSizeChange:function(e,t){this.pageSize=t,this.getModelVersionData(this.$route.params.id,this.serviceType,this.pageSize,0)},downLoadFile:function(e){var t=this;this.publishedVersion&&this.$api.modelList.verificationDownload(this.publishedVersion.id).then((function(e){e.success&&u.saveAs("".concat(window.location.origin,"/aiplatform/modelpublish/download/sdkzip/").concat(t.publishedVersion.id),"SDK_API.zip",{type:"text/plain;charset=utf-8"})}))},changePage:function(e){this.current=e,this.getModelVersionData(this.$route.params.id,this.serviceType,this.pageSize,this.current-1)},changeServiceType:function(e){var t=this.emptyData,n=this.modelId,a=e.target.value;this.serviceType=a,this.current=1,this.publishedVersion="",t.goToPath={name:"train",params:{modelId:n,serviceType:a}},this.getModelVersionData(this.$route.params.id,a,this.pageSize,0),this.lookPublishment(a,n)},onSelectChange:function(e){this.selectedRowKeys=e},batchDelete:function(){var e=this.selectedRowKeys.join(",");this.deleteVersion(e)},stopTrain:function(e){var t=this;this.$confirm({title:"信息提示",content:"是否确定需要停止训练？",onOk:function(){t.$api.modelList.stopTrain(e).then((function(e){0===e.code&&t.getModelVersionData(t.$route.params.id,t.serviceType,t.pagination.pageSize,t.pagination.current)}))},okText:"确定",cancelText:"取消",onCancel:function(){},centered:!0})},deleteVersion:function(e){var t=this;this.$confirm({title:"信息提示",content:"确定是否需要删除？",onOk:function(){t.$api.modelList.delete(e).then((function(n){200===n.code&&(t.$message.success("删除版本"+e+"成功"),t.getModelVersionData(t.$route.params.id,t.serviceType,t.pageSize,0))}))},onCancel:function(){},okText:"确定",cancelText:"取消",centered:!0})},stopPublic:function(e){var t=this;this.$confirm({title:"信息提示",content:"是否确定需要停止发布"+e,onOk:function(){t.$api.modelList.stopPublic(e).then((function(n){0===n.code&&(t.$message.success("停止发布"+e+"成功"),t.getModelVersionData(t.$route.params.id,t.serviceType,t.pagination.pageSize,0))}))},onCancel:function(){},okText:"确定",cancelText:"取消",centered:!0})},applyPublic:function(e){var t=this;this.$api.modelList.applyPublic(e).then((function(n){0===n.code&&(t.$message.success("申请发布"+e+"成功"),t.getModelVersionData(t.$route.params.id,t.serviceType,t.pagination.pageSize,0))}))},train:function(e,t,n){this.$router.push({name:"train",params:{modelId:Number(e),key:t,serviceType:n}})},expand:function(e,t){var n=this;this.expandedRowKeys=[],e&&(this.expandedRowKeys=[t.id],this.$api.modelList.getModelSizeList(this.expandedRowKeys[0]).then((function(e){if(200===e.code){var t=e.data.content,a=t.map((function(e){return l({},e,{action:{modelSizeId:e.id}})}));n.innerData=a}})))},packup:function(){this.curExpandedRowKeys=[]},handleExpand:function(e){if(this.curExpandedRowKeys.length>0){var t=this.curExpandedRowKeys.indexOf(e.id);t>-1?this.curExpandedRowKeys.splice(t,1):(this.curExpandedRowKeys.splice(0,this.curExpandedRowKeys.length),this.curExpandedRowKeys.push(e.id))}else this.curExpandedRowKeys.push(e.id);this.expand(!0,e),this.checkedRow=e.id}}},m=h,f=(n("477a"),n("2877")),v=Object(f["a"])(m,a,i,!1,null,"7b8745ec",null);t["default"]=v.exports}}]);