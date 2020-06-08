import{Utils as t,Api as e}from"k-utils-js";import i from"moment";import{isNil as n,isEmpty as r,omit as a,pathOr as s,path as u,assocPath as o,clone as p}from"ramda";import d from"vue/dist/vue.esm";import l from"vuex";function c(t,e,i,n,r,a,s,u,o,p){"boolean"!=typeof s&&(o=u,u=s,s=!1);var d,l="function"==typeof i?i.options:i;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,r&&(l.functional=!0)),n&&(l._scopeId=n),a?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,o(t)),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=d):e&&(d=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,u(t))}),d)if(l.functional){var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var m=l.beforeCreate;l.beforeCreate=m?[].concat(m,d):[d]}return i}var m=c({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"custom-control custom-checkbox"},[i("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.unchecked_value}}),t._v(" "),"checkbox"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",class:t.inputClass,attrs:{name:t.name,id:t.id,type:"checkbox"},domProps:{value:t.value,checked:Array.isArray(t.inputValue)?t._i(t.inputValue,t.value)>-1:t.inputValue},on:{focus:function(e){t.inputTouched=!0},change:function(e){var i=t.inputValue,n=e.target,r=!!n.checked;if(Array.isArray(i)){var a=t.value,s=t._i(i,a);n.checked?s<0&&(t.inputValue=i.concat([a])):s>-1&&(t.inputValue=i.slice(0,s).concat(i.slice(s+1)))}else t.inputValue=r}}},"input",this.$attrs,!1)):"radio"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",class:t.inputClass,attrs:{name:t.name,id:t.id,type:"radio"},domProps:{value:t.value,checked:t._q(t.inputValue,t.value)},on:{focus:function(e){t.inputTouched=!0},change:function(e){t.inputValue=t.value}}},"input",this.$attrs,!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",class:t.inputClass,attrs:{name:t.name,id:t.id,type:this.$attrs.type},domProps:{value:t.value,value:t.inputValue},on:{focus:function(e){t.inputTouched=!0},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"input",this.$attrs,!1)),t._v(" "),t.displayValidationError?i("div",{staticClass:"invalid-feedback",attrs:{id:t.id+"__error_message"}},[t._v(" "+t._s(t.inputError)+"  ")]):t._e()])},staticRenderFns:[]},void 0,{inheritAttrs:!1,props:{unchecked_value:{type:String,required:!0},name:{type:String,require:!0},id:{type:String,require:!0},value:{type:String,required:!0}},computed:{displayValidationError:function(){return this.inputTouched&&this.inputError},inputClass:function(){return{"is-invalid":this.displayValidationError}},inputError:function(){var e=this.$store.getters.getError(this.$props.name);return this.inputTouched?t.isBlank(e)?null:e:null},inputTouched:{get:function(){return this.$store.getters.getTouched(this.$props.name)},set:function(t){console.log("set touch",t,this.$props.name),this.$store.commit("setTouched",{value:t,name:this.$props.name})}},inputValue:{get:function(){var t=this.$store.getters.getValue(this.$props.name);return!0===t||t===this.$props.name},set:function(t){console.log("update",t,this.$props.name),this.$store.dispatch("update",{value:t?this.$props.value:this.$props.unchecked_value,name:this.$props.name})}}}},void 0,!1,void 0,!1,void 0,void 0,void 0),h=c({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.inputGroupClass},[t.prepend?i("div",{staticClass:"input-group-prepend",attrs:{id:t.id+"__prepend"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.prepend)}})]):t._e(),t._v(" "),i("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.inputValue}}),t._v(" "),"checkbox"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputFormattedValue,expression:"inputFormattedValue"}],ref:"input",class:t.inputClass,attrs:{id:t.id,type:"checkbox"},domProps:{checked:Array.isArray(t.inputFormattedValue)?t._i(t.inputFormattedValue,null)>-1:t.inputFormattedValue},on:{focus:function(e){t.inputTouched=!0},change:function(e){var i=t.inputFormattedValue,n=e.target,r=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.inputFormattedValue=i.concat([null])):a>-1&&(t.inputFormattedValue=i.slice(0,a).concat(i.slice(a+1)))}else t.inputFormattedValue=r}}},"input",this.$attrs,!1)):"radio"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputFormattedValue,expression:"inputFormattedValue"}],ref:"input",class:t.inputClass,attrs:{id:t.id,type:"radio"},domProps:{checked:t._q(t.inputFormattedValue,null)},on:{focus:function(e){t.inputTouched=!0},change:function(e){t.inputFormattedValue=null}}},"input",this.$attrs,!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputFormattedValue,expression:"inputFormattedValue"}],ref:"input",class:t.inputClass,attrs:{id:t.id,type:this.$attrs.type},domProps:{value:t.inputFormattedValue},on:{focus:function(e){t.inputTouched=!0},input:function(e){e.target.composing||(t.inputFormattedValue=e.target.value)}}},"input",this.$attrs,!1)),t._v(" "),t.append?i("div",{staticClass:"input-group-append",attrs:{id:t.id+"__append"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.append)}})]):t._e(),t._v(" "),t.displayValidationError?i("div",{staticClass:"invalid-feedback",attrs:{id:t.id+"__error_message"}},[t._v(" "+t._s(t.inputError)+"  ")]):t._e()])},staticRenderFns:[]},void 0,{inheritAttrs:!1,props:{append:{type:String},name:{type:String,require:!0},id:{type:String,require:!0},prepend:{type:String}},computed:{displayValidationError:function(){return this.inputTouched&&this.inputError},inputClass:function(){return{"form-control":!0,"is-invalid":this.displayValidationError,datetimepicker:!0}},inputError:function(){return this.inputTouched?this.$store.getters.getError(this.$props.name):null},inputGroupClass:function(){return{"input-group":!0}},inputTouched:{get:function(){return this.$store.getters.getTouched(this.$props.name)},set:function(t){this.$store.commit("setTouched",{value:t,name:this.$props.name})}},inputValue:{get:function(){return this.$store.getters.getValue(this.$props.name)},set:function(t){this.$store.dispatch("update",{value:t,name:this.$props.name})}},inputFormattedValue:{get:function(){var t=this.$store.getters.getValue(this.$props.name),e=i(t,"YYYY-MM-DD");return e.isValid()?e.format("DD/MM/YYYY"):""},set:function(t){if(n(t)||r(t)||t.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/)){var e=i(t,"DD/MM/YYYY");this.$store.dispatch("update",{value:e.isValid()?e.format("YYYY-MM-DD"):"",name:this.$props.name})}}}},mounted:function(){this.$nextTick((function(){var t={format:"d/m/Y",formatDate:"d/m/Y",timepicker:!1,scrollInput:!1,onChangeDateTime:function(t,e){this.inputFormattedValue=this.$refs.input.value}.bind(this)};window.$(this.$refs.input).datetimepicker(t)}))}},void 0,!1,void 0,!1,void 0,void 0,void 0),v=c({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.inputGroupClass},[t.prepend?i("div",{staticClass:"input-group-prepend",attrs:{id:t.id+"__prepend"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.prepend)}})]):t._e(),t._v(" "),i("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.inputValue}}),t._v(" "),"checkbox"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputFormattedValue,expression:"inputFormattedValue"}],ref:"input",class:t.inputClass,attrs:{id:t.id,type:"checkbox"},domProps:{checked:Array.isArray(t.inputFormattedValue)?t._i(t.inputFormattedValue,null)>-1:t.inputFormattedValue},on:{focus:function(e){t.inputTouched=!0},change:function(e){var i=t.inputFormattedValue,n=e.target,r=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.inputFormattedValue=i.concat([null])):a>-1&&(t.inputFormattedValue=i.slice(0,a).concat(i.slice(a+1)))}else t.inputFormattedValue=r}}},"input",this.$attrs,!1)):"radio"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputFormattedValue,expression:"inputFormattedValue"}],ref:"input",class:t.inputClass,attrs:{id:t.id,type:"radio"},domProps:{checked:t._q(t.inputFormattedValue,null)},on:{focus:function(e){t.inputTouched=!0},change:function(e){t.inputFormattedValue=null}}},"input",this.$attrs,!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputFormattedValue,expression:"inputFormattedValue"}],ref:"input",class:t.inputClass,attrs:{id:t.id,type:this.$attrs.type},domProps:{value:t.inputFormattedValue},on:{focus:function(e){t.inputTouched=!0},input:function(e){e.target.composing||(t.inputFormattedValue=e.target.value)}}},"input",this.$attrs,!1)),t._v(" "),t.append?i("div",{staticClass:"input-group-append",attrs:{id:t.id+"__append"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.append)}})]):t._e(),t._v(" "),t.displayValidationError?i("div",{staticClass:"invalid-feedback",attrs:{id:t.id+"__error_message"}},[t._v(" "+t._s(t.inputError)+"  ")]):t._e()])},staticRenderFns:[]},void 0,{inheritAttrs:!1,props:{append:{type:String},name:{type:String,require:!0},id:{type:String,require:!0},prepend:{type:String}},computed:{displayValidationError:function(){return this.inputTouched&&this.inputError},inputClass:function(){return{"form-control":!0,"is-invalid":this.inputTouched&&this.inputError,datetimepicker:!0}},inputError:function(){return this.inputTouched?this.$store.getters.getError(this.$props.name):null},inputGroupClass:function(){return{"input-group":!0}},inputTouched:{get:function(){return this.$store.getters.getTouched(this.$props.name)},set:function(t){this.$store.commit("setTouched",{value:t,name:this.$props.name})}},inputValue:{get:function(){return this.$store.getters.getValue(this.$props.name)},set:function(t){this.$store.dispatch("update",{value:t,name:this.$props.name})}},inputFormattedValue:{get:function(){var t=this.$store.getters.getValue(this.$props.name),e=i(t,"YYYY-MM-DD HH:mm");return e.isValid()?e.format("DD/MM/YYYY HH:mm"):""},set:function(t){if(n(t)||r(t)||t.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4} [0-9]{2}:[0-9]{2}$/)){var e=i(t,"DD/MM/YYYY HH:mm");this.$store.dispatch("update",{value:e.isValid()?e.format("YYYY-MM-DD HH:mm"):"",name:this.$props.name})}}}},mounted:function(){this.$nextTick((function(){var t={format:"d/m/Y H:i",formatTime:"H:i",formatDate:"d/m/Y",step:15,scrollInput:!1,onChangeDateTime:function(t,e){this.inputFormattedValue=this.$refs.input.value}.bind(this)};window.$(this.$refs.input).datetimepicker(t)}))}},void 0,!1,void 0,!1,void 0,void 0,void 0),f=c({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.inputGroupClass},[t.prepend?i("div",{staticClass:"input-group-prepend",attrs:{id:t.id+"__prepend"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.prepend)}})]):t._e(),t._v(" "),"checkbox"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.inputClass,attrs:{id:t.id,name:t.name,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{focus:function(e){t.inputTouched=!0},change:function(e){var i=t.inputValue,n=e.target,r=!!n.checked;if(Array.isArray(i)){var a=t._i(i,null);n.checked?a<0&&(t.inputValue=i.concat([null])):a>-1&&(t.inputValue=i.slice(0,a).concat(i.slice(a+1)))}else t.inputValue=r}}},"input",this.$attrs,!1)):"radio"===this.$attrs.type?i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.inputClass,attrs:{id:t.id,name:t.name,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{focus:function(e){t.inputTouched=!0},change:function(e){t.inputValue=null}}},"input",this.$attrs,!1)):i("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.inputClass,attrs:{id:t.id,name:t.name,type:this.$attrs.type},domProps:{value:t.inputValue},on:{focus:function(e){t.inputTouched=!0},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"input",this.$attrs,!1)),t._v(" "),t.append?i("div",{staticClass:"input-group-append",attrs:{id:t.id+"__append"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.append)}})]):t._e(),t._v(" "),t.displayValidationError?i("div",{staticClass:"invalid-feedback",attrs:{id:t.id+"__error_message"}},[t._v(" "+t._s(t.inputError)+"  ")]):t._e()])},staticRenderFns:[]},void 0,{inheritAttrs:!1,props:{append:{type:String},name:{type:String,require:!0},id:{type:String,require:!0},prepend:{type:String}},computed:{displayValidationError:function(){return this.inputTouched&&this.inputError},inputClass:function(){return{"form-control":!0,"is-invalid":this.inputTouched&&this.inputError}},inputError:function(){return this.inputTouched?this.$store.getters.getError(this.$props.name):null},inputGroupClass:function(){return{"input-group":!0}},inputTouched:{get:function(){return this.$store.getters.getTouched(this.$props.name)},set:function(t){this.$store.commit("setTouched",{value:t,name:this.$props.name})}},inputValue:{get:function(){return this.$store.getters.getValue(this.$props.name)},set:function(t){this.$store.dispatch("update",{value:t,name:this.$props.name})}}}},void 0,!1,void 0,!1,void 0,void 0,void 0),g=c({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{"accept-charset":t.$props.acceptCharset,action:t.$props.action,"data-values":t.$props.dataValues,method:t.$props.method,enctype:t.$props.enctype},on:{submit:t.handleSubmit,"ajax:beforeSend":t.ignoreRailsUjs}},[t._t("default")],2)},staticRenderFns:[]},void 0,{props:{acceptCharset:{type:String,required:!0,default:"UTF-8"},action:{type:String,required:!0},enctype:{type:String},method:{type:String,required:!0,default:"post"}},methods:{handleSubmit:function(t){this.$store.getters.getError(this.$store.getters.getMeta("modelName")+"._is_valid")||(t.preventDefault(),this.$store.commit("setTouched",{value:!0,name:this.$store.getters.getMeta("modelName")+"._submit"}))},ignoreRailsUjs:function(t){this.$store.getters.getError(this.$store.getters.getMeta("modelName")+"._is_valid")||t.preventDefault()}}},"data-v-32f7a524",!1,void 0,!1,void 0,void 0,void 0),_=c({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.inputGroupClass},[t.prepend?i("div",{staticClass:"input-group-prepend",attrs:{id:t.id+"__prepend"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.prepend)}})]):t._e(),t._v(" "),i("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.inputClass,attrs:{id:t.id,name:t.name},on:{focus:function(e){t.inputTouched=!0},change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inputValue=e.target.multiple?i:i[0]}}},"select",this.$attrs,!1),[t._t("default")],2),t._v(" "),t.append?i("div",{staticClass:"input-group-append",attrs:{id:t.id+"__append"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.append)}})]):t._e(),t._v(" "),t.displayValidationError?i("div",{staticClass:"invalid-feedback",attrs:{id:t.id+"__error_message"}},[t._v(" "+t._s(t.inputError)+"  ")]):t._e()])},staticRenderFns:[]},void 0,{inheritAttrs:!1,props:{append:{type:String},name:{type:String,require:!0},id:{type:String,require:!0},prepend:{type:String}},computed:{displayValidationError:function(){return this.inputTouched&&this.inputError},inputClass:function(){return{"custom-select":!0,"is-invalid":this.inputTouched&&this.inputError}},inputError:function(){return this.inputTouched?this.$store.getters.getError(this.$props.name):null},inputGroupClass:function(){return{"input-group":!0}},inputTouched:{get:function(){return this.$store.getters.getTouched(this.$props.name)},set:function(t){this.$store.commit("setTouched",{value:t,name:this.$props.name})}},inputValue:{get:function(){return this.$store.getters.getValue(this.$props.name)},set:function(t){this.$store.dispatch("update",{value:t,name:this.$props.name})}}}},void 0,!1,void 0,!1,void 0,void 0,void 0),$=c({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.inputGroupClass},[t.prepend?i("div",{staticClass:"input-group-prepend",attrs:{id:t.id+"__prepend"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.prepend)}})]):t._e(),t._v(" "),i("textarea",t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],class:t.inputClass,attrs:{id:t.id,name:t.name},domProps:{value:t.inputValue},on:{focus:function(e){t.inputTouched=!0},input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"textarea",this.$attrs,!1)),t._v(" "),t.append?i("div",{staticClass:"input-group-append",attrs:{id:t.id+"__append"}},[i("span",{staticClass:"input-group-text",domProps:{innerHTML:t._s(t.append)}})]):t._e(),t._v(" "),t.displayValidationError?i("div",{staticClass:"invalid-feedback",attrs:{id:t.id+"__error_message"}},[t._v(" "+t._s(t.inputError)+"  ")]):t._e()])},staticRenderFns:[]},void 0,{inheritAttrs:!1,props:{append:{type:String},id:{type:String,require:!0},name:{type:String,require:!0},prepend:{type:String}},computed:{displayValidationError:function(){return this.inputTouched&&this.inputError},inputClass:function(){return{"form-control":!0,"is-invalid":this.inputTouched&&this.inputError}},inputError:function(){return this.inputTouched?this.$store.getters.getError(this.$props.name):null},inputGroupClass:function(){return{"input-group":!0}},inputTouched:{get:function(){return this.$store.getters.getTouched(this.$props.name)},set:function(t){this.$store.commit("setTouched",{value:t,name:this.$props.name})}},inputValue:{get:function(){return this.$store.getters.getValue(this.$props.name)},set:function(t){this.$store.dispatch("update",{value:t,name:this.$props.name})}}}},void 0,!1,void 0,!1,void 0,void 0,void 0),V=function(i){var n,r,c=i.additionalComponents;void 0===c&&(c={});var V=i.authenticityToken,y=i.element,T=i.httpMethod;void 0===T&&(T="POST");var C=i.plugins;void 0===C&&(C=[]);var E=i.validationUrl,k=i.values;void 0===k&&(k={}),d.use(l);var F={"k-form":g,"k-input":f,"k-textarea":$,"k-select":_,"k-date":h,"k-datetime":v,"k-check_box":m},b=Object.keys(k)[0],x={values:(n={},n[b]=a(["errors"],k[b]),n),errors:(r={},r[b]=s({},[b,"errors"],k),r),touched:{},meta:{modelName:b,authenticityToken:V,validationUrl:E,httpMethod:T}};this.store=new l.Store({state:x,plugins:C,getters:{getValue:function(e){return function(i){var n=t.dotify(i);return u(n.split("."),e.values)}},getError:function(e){return function(i){var n=t.dotify(i);return u(n.split("."),e.errors)}},getTouched:function(e){return function(i){var n=t.dotify(i);return u(n.split("."),e.touched)||u([b,"_submit"],e.touched)}},getMeta:function(e){return function(i){var n=t.dotify(i);return u(n.split("."),e.meta)}}},mutations:{setValue:function(e,i){var n=t.dotify(i.name);e.values=o(n.split("."),i.value,e.values)},setTouched:function(e,i){var n=t.dotify(i.name);e.touched=o(n.split("."),i.value,e.touched)},setError:function(e,i){var n=t.dotify(i.name);e.errors=o(n.split("."),i.value,e.errors)}},actions:{refresh:function(t){var i=Object.assign({utf8:"✓",authenticity_token:t.state.meta.authenticityToken,_method:t.state.meta.httpMethod},p(t.state.values));i[b]._prevent_save=!0,e.sendRequest({url:t.state.meta.validationUrl,data:i,method:t.state.meta.httpMethod,onSuccess:function(e){t.commit("setError",{value:e.data[b].errors,name:b})},onError:function(t){console.log("There was a problem with validating the data"),console.log(t),console.log(JSON.stringify(t,null,2))},delay:!0})},update:function(t,e){t.commit("setValue",e),t.dispatch("refresh")}}}),this.app=new d({el:y,store:this.store,inheritAttrs:!1,components:Object.assign(F,c),props:{}})},y=Object.freeze({__proto__:null,CheckBox:m,Date:h,Datetime:v,Field:f,Form:g,Select:_,Textarea:$,FormStore:V});var T={install:function t(e){t.installed||(t.installed=!0,Object.keys(y).forEach((function(t){e.component(t,y[t])})))}},C=null;"undefined"!=typeof window?C=window.Vue:"undefined"!=typeof global&&(C=global.Vue),C&&C.use(T);export default T;export{m as CheckBox,h as Date,v as Datetime,f as Field,g as Form,V as FormStore,_ as Select,$ as Textarea};
