(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fff5ede"],{2496:function(t,e,o){},"2fdb":function(t,e,o){"use strict";var r=o("5ca1"),i=o("d2c8"),s="includes";r(r.P+r.F*o("5147")(s),"String",{includes:function(t){return!!~i(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"4bdb":function(t,e,o){"use strict";var r=o("2496"),i=o.n(r);i.a},6762:function(t,e,o){"use strict";var r=o("5ca1"),i=o("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("9c6c")("includes")},c3fb:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"p-grid crud-demo"},[o("div",{staticClass:"p-col-12"},[o("div",{staticClass:"card"},[o("Toast"),o("Toolbar",{staticClass:"p-mb-4"},[o("template",{slot:"left"},[o("Button",{staticClass:"p-button-success p-mr-2",attrs:{label:"New",icon:"pi pi-plus"},on:{click:t.openNew}}),o("Button",{staticClass:"p-button-danger",attrs:{label:"Delete",icon:"pi pi-trash",disabled:!t.selectedProducts||!t.selectedProducts.length},on:{click:t.confirmDeleteSelected}})],1),o("template",{slot:"right"},[o("FileUpload",{staticClass:"p-mr-2 p-d-inline-block",attrs:{mode:"basic",accept:"image/*",maxFileSize:1e6,label:"Import",chooseLabel:"Import"}}),o("Button",{staticClass:"p-button-help",attrs:{label:"Export",icon:"pi pi-upload"},on:{click:function(e){return t.exportCSV(e)}}})],1)],2),o("DataTable",{ref:"dt",attrs:{value:t.products,selection:t.selectedProducts,dataKey:"id",paginator:!0,rows:10,filters:t.filters,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products"},on:{"update:selection":function(e){t.selectedProducts=e}},scopedSlots:t._u([{key:"header",fn:function(){return[o("div",{staticClass:"table-header"},[o("h5",{staticClass:"p-m-0"},[t._v("Manage Products")]),o("span",{staticClass:"p-input-icon-left"},[o("i",{staticClass:"pi pi-search"}),o("InputText",{attrs:{placeholder:"Search..."},model:{value:t.filters["global"],callback:function(e){t.$set(t.filters,"global",e)},expression:"filters['global']"}})],1)])]},proxy:!0}])},[o("Column",{attrs:{selectionMode:"multiple",headerStyle:"width: 3rem"}}),o("Column",{attrs:{field:"code",header:"Code",sortable:""}}),o("Column",{attrs:{field:"name",header:"Name",sortable:""}}),o("Column",{attrs:{header:"Image"},scopedSlots:t._u([{key:"body",fn:function(t){return[o("img",{staticClass:"product-image",attrs:{src:"assets/layout/images/product/"+t.data.image,alt:t.data.image}})]}}])}),o("Column",{attrs:{field:"price",header:"Price",sortable:""},scopedSlots:t._u([{key:"body",fn:function(e){return[t._v("\n\t\t\t\t\t\t\t"+t._s(t.formatCurrency(e.data.price))+"\n\t\t\t\t\t\t")]}}])}),o("Column",{attrs:{field:"category",header:"Category",sortable:""}}),o("Column",{attrs:{field:"rating",header:"Reviews",sortable:""},scopedSlots:t._u([{key:"body",fn:function(t){return[o("Rating",{attrs:{value:t.data.rating,readonly:!0,cancel:!1}})]}}])}),o("Column",{attrs:{field:"inventoryStatus",header:"Status",sortable:""},scopedSlots:t._u([{key:"body",fn:function(e){return[o("span",{class:"product-badge status-"+e.data.inventoryStatus.toLowerCase()},[t._v(t._s(e.data.inventoryStatus))])]}}])}),o("Column",{scopedSlots:t._u([{key:"body",fn:function(e){return[o("Button",{staticClass:"p-button-rounded p-button-success p-mr-2",attrs:{icon:"pi pi-pencil"},on:{click:function(o){return t.editProduct(e.data)}}}),o("Button",{staticClass:"p-button-rounded p-button-warning",attrs:{icon:"pi pi-trash"},on:{click:function(o){return t.confirmDeleteProduct(e.data)}}})]}}])})],1),o("Dialog",{staticClass:"p-fluid",style:{width:"450px"},attrs:{visible:t.productDialog,header:"Product Details",modal:!0},on:{"update:visible":function(e){t.productDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("Button",{staticClass:"p-button-text",attrs:{label:"Cancel",icon:"pi pi-times"},on:{click:t.hideDialog}}),o("Button",{staticClass:"p-button-text",attrs:{label:"Save",icon:"pi pi-check"},on:{click:t.saveProduct}})]},proxy:!0}])},[t.product.image?o("img",{staticClass:"product-image",attrs:{src:"assets/layout/images/product/"+t.product.image,alt:t.product.image}}):t._e(),o("div",{staticClass:"p-field"},[o("label",{attrs:{for:"name"}},[t._v("Name")]),o("InputText",{class:{"p-invalid":t.submitted&&!t.product.name},attrs:{id:"name",required:"true",autofocus:""},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name","string"===typeof e?e.trim():e)},expression:"product.name"}}),t.submitted&&!t.product.name?o("small",{staticClass:"p-invalid"},[t._v("Name is required.")]):t._e()],1),o("div",{staticClass:"p-field"},[o("label",{attrs:{for:"description"}},[t._v("Description")]),o("Textarea",{attrs:{id:"description",required:"true",rows:"3",cols:"20"},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1),o("div",{staticClass:"p-field"},[o("label",{staticClass:"p-mb-3"},[t._v("Category")]),o("div",{staticClass:"p-formgrid p-grid"},[o("div",{staticClass:"p-field-radiobutton p-col-6"},[o("RadioButton",{attrs:{id:"category1",name:"category",value:"Accessories"},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),o("label",{attrs:{for:"category1"}},[t._v("Accessories")])],1),o("div",{staticClass:"p-field-radiobutton p-col-6"},[o("RadioButton",{attrs:{id:"category2",name:"category",value:"Clothing"},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),o("label",{attrs:{for:"category2"}},[t._v("Clothing")])],1),o("div",{staticClass:"p-field-radiobutton p-col-6"},[o("RadioButton",{attrs:{id:"category3",name:"category",value:"Electronics"},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),o("label",{attrs:{for:"category3"}},[t._v("Electronics")])],1),o("div",{staticClass:"p-field-radiobutton p-col-6"},[o("RadioButton",{attrs:{id:"category4",name:"category",value:"Fitness"},model:{value:t.product.category,callback:function(e){t.$set(t.product,"category",e)},expression:"product.category"}}),o("label",{attrs:{for:"category4"}},[t._v("Fitness")])],1)])]),o("div",{staticClass:"p-formgrid p-grid"},[o("div",{staticClass:"p-field p-col"},[o("label",{attrs:{for:"price"}},[t._v("Price")]),o("InputNumber",{attrs:{id:"price",mode:"currency",currency:"USD",locale:"en-US"},model:{value:t.product.price,callback:function(e){t.$set(t.product,"price",e)},expression:"product.price"}})],1),o("div",{staticClass:"p-field p-col"},[o("label",{attrs:{for:"quantity"}},[t._v("Quantity")]),o("InputNumber",{attrs:{id:"quantity",integeronly:""},model:{value:t.product.quantity,callback:function(e){t.$set(t.product,"quantity",e)},expression:"product.quantity"}})],1)])]),o("Dialog",{style:{width:"450px"},attrs:{visible:t.deleteProductDialog,header:"Confirm",modal:!0},on:{"update:visible":function(e){t.deleteProductDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(e){t.deleteProductDialog=!1}}}),o("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check"},on:{click:t.deleteProduct}})]},proxy:!0}])},[o("div",{staticClass:"confirmation-content"},[o("i",{staticClass:"pi pi-exclamation-triangle p-mr-3",staticStyle:{"font-size":"2rem"}}),t.product?o("span",[t._v("Are you sure you want to delete "),o("b",[t._v(t._s(t.product.name))]),t._v("?")]):t._e()])]),o("Dialog",{style:{width:"450px"},attrs:{visible:t.deleteProductsDialog,header:"Confirm",modal:!0},on:{"update:visible":function(e){t.deleteProductsDialog=e}},scopedSlots:t._u([{key:"footer",fn:function(){return[o("Button",{staticClass:"p-button-text",attrs:{label:"No",icon:"pi pi-times"},on:{click:function(e){t.deleteProductsDialog=!1}}}),o("Button",{staticClass:"p-button-text",attrs:{label:"Yes",icon:"pi pi-check"},on:{click:t.deleteSelectedProducts}})]},proxy:!0}])},[o("div",{staticClass:"confirmation-content"},[o("i",{staticClass:"pi pi-exclamation-triangle p-mr-3",staticStyle:{"font-size":"2rem"}}),t.product?o("span",[t._v("Are you sure you want to delete the selected products?")]):t._e()])])],1)])])},i=[],s=(o("8e6e"),o("ac6a"),o("456d"),o("6762"),o("2fdb"),o("bd86")),a=(o("7f7f"),o("e9c0"));function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function n(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){Object(s["a"])(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var l={data:function(){return{products:null,productDialog:!1,deleteProductDialog:!1,deleteProductsDialog:!1,product:{},selectedProducts:null,filters:{},submitted:!1}},productService:null,created:function(){this.productService=new a["a"]},mounted:function(){var t=this;this.productService.getProducts().then((function(e){return t.products=e}))},methods:{formatCurrency:function(t){return t.toLocaleString("en-US",{style:"currency",currency:"USD"})},openNew:function(){this.product={},this.submitted=!1,this.productDialog=!0},hideDialog:function(){this.productDialog=!1,this.submitted=!1},saveProduct:function(){this.submitted=!0,this.product.name.trim()&&(this.product.id?(this.$set(this.products,this.findIndexById(this.product.id),this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Updated",life:3e3})):(this.product.id=this.createId(),this.product.code=this.createId(),this.product.image="product-placeholder.svg",this.product.inventoryStatus="INSTOCK",this.products.push(this.product),this.$toast.add({severity:"success",summary:"Successful",detail:"Product Created",life:3e3})),this.productDialog=!1,this.product={})},editProduct:function(t){this.product=n({},t),this.productDialog=!0},confirmDeleteProduct:function(t){this.product=t,this.deleteProductDialog=!0},deleteProduct:function(){var t=this;this.products=this.products.filter((function(e){return e.id!==t.product.id})),this.deleteProductDialog=!1,this.product={},this.$toast.add({severity:"success",summary:"Successful",detail:"Product Deleted",life:3e3})},findIndexById:function(t){for(var e=-1,o=0;o<this.products.length;o++)if(this.products[o].id===t){e=o;break}return e},createId:function(){for(var t="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o=0;o<5;o++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},exportCSV:function(){this.$refs.dt.exportCSV()},confirmDeleteSelected:function(){this.deleteProductsDialog=!0},deleteSelectedProducts:function(){var t=this;this.products=this.products.filter((function(e){return!t.selectedProducts.includes(e)})),this.deleteProductsDialog=!1,this.selectedProducts=null,this.$toast.add({severity:"success",summary:"Successful",detail:"Products Deleted",life:3e3})}}},u=l,d=(o("4bdb"),o("2877")),p=Object(d["a"])(u,r,i,!1,null,"383712d2",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-3fff5ede.4f82ba6e.js.map