(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25677667"],{"5bf7":function(a,t,e){"use strict";e("a1e6")},a1e6:function(a,t,e){},d60c:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("base-map",{on:{lmap:a.getMap}}),e("div",{staticClass:"chang-map"},[e("el-radio-group",{attrs:{fill:"#ffa500"},on:{change:a.changeMap},model:{value:a.curMap,callback:function(t){a.curMap=t},expression:"curMap"}},[e("el-radio-button",{attrs:{label:"amap"}},[a._v("高德地图 ")]),e("el-radio-button",{attrs:{label:"tdt"}},[a._v("天地图")])],1)],1)],1)},s=[],c=(e("d81d"),e("829f")),p={name:"",components:{BaseMap:c["default"]},data:function(){return{map:null,curMap:"amap",mapLayers:null}},methods:{getMap:function(a,t){this.map=a,this.mapLayers=t},changeMap:function(a){var t=this.mapLayers[2],e=this.mapLayers[0];switch(a){case"amap":t.remove(this.map),e.addTo(this.map);break;case"tdt":e.remove(this.map),t.addTo(this.map);break}}},mounted:function(){this.changeMap()}},i=p,o=(e("5bf7"),e("2877")),r=Object(o["a"])(i,n,s,!1,null,"29a7b46e",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-25677667.21ee72a4.js.map