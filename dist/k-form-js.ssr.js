'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _interopDefault(e){return(e&&(typeof e==='object')&&'default'in e)?e['default']:e}var moment$1=_interopDefault(require('moment')),Vue=_interopDefault(require('vue/dist/vue.esm')),Vuex=_interopDefault(require('vuex')),R=require('ramda'),kUtilsJs=require('k-utils-js');//
//
//
//
//
//
//
//
//

var script = {
    inheritAttrs: false,
    props: {
        unchecked_value: {
            type:String,
            required:true
        },
        name:{
            type:String,
            require:true
        },
        value: {
            type:String,
            required:true
        }
    },
    computed: {
        inputError: function() {
            if (this.inputTouched) {
                return this.$store.getters.getError(this.$props.name)
            } else {
                return null
            }
        },
        inputTouched: {
            get: function get () {
                return this.$store.getters.getTouched(this.$props.name)
            },
            set: function set (value) {
                this.$store.commit('setTouched', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },
        inputValue: {
            get: function get () {
                var value = this.$store.getters.getValue(this.$props.name);
                return ((value === true) || (value === this.$props.name))
            },
            set: function set (value) {
                this.$store.dispatch('update', {
                        value: value ? this.$props.value : this.$props.unchecked_value,
                        name: this.$props.name
                    }
                );
            }
        },
    },
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"custom-control custom-checkbox"},[_vm._ssrNode("<input type=\"hidden\""+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("value",_vm.unchecked_value))+"> "+((((this.$attrs).type)==='checkbox')?("<input"+(_vm._ssrAttr("name",_vm.name))+" type=\"checkbox\""+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttr("checked",Array.isArray(_vm.inputValue)?_vm._i(_vm.inputValue,_vm.value)>-1:(_vm.inputValue)))+(_vm._ssrAttrs(this.$attrs))+">"):(((this.$attrs).type)==='radio')?("<input"+(_vm._ssrAttr("name",_vm.name))+" type=\"radio\""+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttr("checked",_vm._q(_vm.inputValue,_vm.value)))+(_vm._ssrAttrs(this.$attrs))+">"):("<input"+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("type",(this.$attrs).type))+(_vm._ssrAttr("value",_vm.value))+(_vm._ssrAttr("value",(_vm.inputValue)))+(_vm._ssrAttrs(this.$attrs))+">"))+" "+((_vm.inputTouched)?("<div class=\"invalid-feedback\">"+_vm._ssrEscape(" "+_vm._s(_vm.inputError)+"  ")+"</div>"):"<!---->"))])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-56e3459c";
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var CheckBox = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$1 = {
    inheritAttrs: false,
    props: {
        append: {
            type:String,
        },
        name:{
            type:String,
            require:true
        },
        prepend: {
            type:String,
        }
    },
    computed: {
        // class: function() {
        //    return [
        //       "input-group",
        //       this.$props.class
        //    ]
        // },
        inputClass: function() {
            return {
                "form-control": true,
                "is-invalid": (this.inputTouched && this.inputError),
                "datetimepicker": true
            }
        },

        inputError: function() {
            if (this.inputTouched) {
                return this.$store.getters.getError(this.$props.name)
            } else {
                return null
            }
        },
        inputGroupClass: function() {
            return {
                "input-group": true,
            }
        },
        inputTouched: {
            get: function get () {

                return this.$store.getters.getTouched(this.$props.name)
            },
            set: function set (value) {
                this.$store.commit('setTouched', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },
        inputValue: {
            get: function get () {

                return this.$store.getters.getValue(this.$props.name)
            },
            set: function set (value) {
                this.$store.dispatch('update', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },
        inputFormattedValue: {
            get: function get () {
                var value = this.$store.getters.getValue(this.$props.name);
                var date = moment(value, 'YYYY-MM-DD');
                if (date.isValid()) {
                    return date.format('DD/MM/YYYY')
                } else {
                    return ""
                }
            },
            set: function set (value) {

                if (!value.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/)){
                    // user is typing a new date, wait for him to finish
                    // TODO: use a more restrictive regexp
                    return
                }

                var date = moment(value, 'DD/MM/YYYY');

                this.$store.dispatch('update', {
                        value: date.isValid() ? date.format('YYYY-MM-DD') : '',
                        name: this.$props.name
                    }
                );
            }
        },

    },
    mounted: function() {
        this.$nextTick(function () {
            // the handleChange prop is sent to the plugin because it's the only way
            // to intercept changes made by the user by using the datetime picker plugin
            //let dateTimeOptions = Object.assign(this.props.dateTimeOptions, {onChangeDateTime: this.props.handleChange});
            var handleChange = function(_date, _input) {
                this.inputFormattedValue = this.$refs.input.value;
            }.bind(this);

            var dateTimeOptions = {
                format: 'd/m/Y',
                formatDate: 'd/m/Y',
                timepicker: false,
                scrollInput: false,
                onChangeDateTime: handleChange
            };

            $(this.$refs.input).datetimepicker(dateTimeOptions);
        });
    }
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inputGroupClass},[_vm._ssrNode(((_vm.prepend)?("<div class=\"input-group-prepend\"><span class=\"input-group-text\">"+(_vm._s(_vm.prepend))+"</span></div>"):"<!---->")+" <input type=\"hidden\""+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("value",_vm.inputValue))+"> "+((((this.$attrs).type)==='checkbox')?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.inputFormattedValue)?_vm._i(_vm.inputFormattedValue,null)>-1:(_vm.inputFormattedValue)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"):(((this.$attrs).type)==='radio')?("<input type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.inputFormattedValue,null)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"):("<input"+(_vm._ssrAttr("type",(this.$attrs).type))+(_vm._ssrAttr("value",(_vm.inputFormattedValue)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"))+" "+((_vm.append)?("<div class=\"input-group-append\"><span class=\"input-group-text\">"+(_vm._s(_vm.append))+"</span></div>"):"<!---->")+" "+((_vm.inputTouched)?("<div class=\"invalid-feedback\">"+_vm._ssrEscape(" "+_vm._s(_vm.inputError)+"  ")+"</div>"):"<!---->"))])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-0bdb5e5e";
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Date = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );//
var script$2 = {
    inheritAttrs: false,
    props: {
        append: {
            type:String,
        },
        name:{
            type:String,
            require:true
        },
        prepend: {
            type:String,
        }
    },
    computed: {
        // class: function() {
        //    return [
        //       "input-group",
        //       this.$props.class
        //    ]
        // },
        inputClass: function() {
            return {
                "form-control": true,
                "is-invalid": (this.inputTouched && this.inputError),
                "datetimepicker": true
            }
        },

        inputError: function() {
            if (this.inputTouched) {
                return this.$store.getters.getError(this.$props.name)
            } else {
                return null
            }
        },
        inputGroupClass: function() {
            return {
                "input-group": true,
            }
        },
        inputTouched: {
            get: function get () {

                return this.$store.getters.getTouched(this.$props.name)
            },
            set: function set (value) {
                this.$store.commit('setTouched', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },
        inputValue: {
            get: function get () {

                return this.$store.getters.getValue(this.$props.name)
            },
            set: function set (value) {
                this.$store.dispatch('update', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },
        inputFormattedValue: {
            get: function get () {
                var value = this.$store.getters.getValue(this.$props.name);
                var date = moment$1(value, 'YYYY-MM-DD HH:mm');
                if (date.isValid()) {
                    return date.format('DD/MM/YYYY HH:mm')
                } else {
                    return ""
                }
            },
            set: function set (value) {
                if (!value.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4} [0-9]{2}:[0-9]{2}$/)){
                    // user is typing a new date, wait for him to finish
                    // TODO: use a more restrictive regexp
                    return
                }
                var date = moment$1(value, 'DD/MM/YYYY HH:mm');

                this.$store.dispatch('update', {
                        value: date.isValid() ? date.format('YYYY-MM-DD HH:mm') : '',
                        name: this.$props.name
                    }
                );
            }
        },

    },
    mounted: function() {
        this.$nextTick(function () {
            // the handleChange prop is sent to the plugin because it's the only way
            // to intercept changes made by the user by using the datetime picker plugin
            //let dateTimeOptions = Object.assign(this.props.dateTimeOptions, {onChangeDateTime: this.props.handleChange});
            var handleChange = function(_date, _input) {
                this.inputFormattedValue = this.$refs.input.value;
            }.bind(this);

            var dateTimeOptions = {
                format: 'd/m/Y H:i',
                formatTime: 'H:i',
                formatDate: 'd/m/Y',
                step: 15,
                scrollInput: false,
                onChangeDateTime: handleChange
            };
            $(this.$refs.input).datetimepicker(dateTimeOptions);
        });
    }
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inputGroupClass},[_vm._ssrNode(((_vm.prepend)?("<div class=\"input-group-prepend\"><span class=\"input-group-text\">"+(_vm._s(_vm.prepend))+"</span></div>"):"<!---->")+" <input type=\"hidden\""+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("value",_vm.inputValue))+"> "+((((this.$attrs).type)==='checkbox')?("<input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.inputFormattedValue)?_vm._i(_vm.inputFormattedValue,null)>-1:(_vm.inputFormattedValue)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"):(((this.$attrs).type)==='radio')?("<input type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.inputFormattedValue,null)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"):("<input"+(_vm._ssrAttr("type",(this.$attrs).type))+(_vm._ssrAttr("value",(_vm.inputFormattedValue)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"))+" "+((_vm.append)?("<div class=\"input-group-append\"><span class=\"input-group-text\">"+(_vm._s(_vm.append))+"</span></div>"):"<!---->")+" "+((_vm.inputTouched)?("<div class=\"invalid-feedback\">"+_vm._ssrEscape(" "+_vm._s(_vm.inputError)+"  ")+"</div>"):"<!---->"))])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-77437c64";
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Datetime = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$3 = {
    inheritAttrs: false,
    props: {
        append: {
           type:String,
        },
       name:{
          type:String,
          require:true
       },
       prepend: {
          type:String,
       }
    },
    computed: {
        // class: function() {
        //    return [
        //       "input-group",
        //       this.$props.class
        //    ]
        // },
       inputClass: function() {
          return {
             "form-control": true,
             "is-invalid": (this.inputTouched && this.inputError)
          }
       },

       inputError: function() {
          if (this.inputTouched) {
             return this.$store.getters.getError(this.$props.name)
          } else {
             return null
          }
       },
       inputGroupClass: function() {
          return {
             "input-group": true,
          }
       },
       inputTouched: {
          get: function get () {

             return this.$store.getters.getTouched(this.$props.name)
          },
          set: function set (value) {
             this.$store.commit('setTouched', {
                        value: value,
                        name: this.$props.name
                     }
             );
          }
       },
       inputValue: {
            get: function get () {

                return this.$store.getters.getValue(this.$props.name)
            },
            set: function set (value) {
                this.$store.dispatch('update', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },

    }
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inputGroupClass},[_vm._ssrNode(((_vm.prepend)?("<div class=\"input-group-prepend\"><span class=\"input-group-text\">"+(_vm._s(_vm.prepend))+"</span></div>"):"<!---->")+" "+((((this.$attrs).type)==='checkbox')?("<input"+(_vm._ssrAttr("name",_vm.name))+" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.inputValue)?_vm._i(_vm.inputValue,null)>-1:(_vm.inputValue)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"):(((this.$attrs).type)==='radio')?("<input"+(_vm._ssrAttr("name",_vm.name))+" type=\"radio\""+(_vm._ssrAttr("checked",_vm._q(_vm.inputValue,null)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"):("<input"+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttr("type",(this.$attrs).type))+(_vm._ssrAttr("value",(_vm.inputValue)))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"))+" "+((_vm.append)?("<div class=\"input-group-append\"><span class=\"input-group-text\">"+(_vm._s(_vm.append))+"</span></div>"):"<!---->")+" "+((_vm.inputTouched)?("<div class=\"invalid-feedback\">"+_vm._ssrEscape(" "+_vm._s(_vm.inputError)+"  ")+"</div>"):"<!---->"))])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-755eff79";
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Field = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );//
//
//
//
//
//
//
//
//
//
//
//
//

var script$4 = {

  props: {
    "acceptCharset": {
      type: String,
      required: true,
      default: 'UTF-8'
    },
    "action": {
      type: String,
      required: true,
    },
    "enctype": {
      type: String,
    },
    "method": {
      type: String,
      required: true,
      default: "post"
    }
  },
  methods:{
    "handleSubmit": function(event) {
      if (!this.$store.getters.getError(((this.$store.getters.getMeta('modelName')) + "._is_valid"))) {
        event.preventDefault();
        this.$store.commit('setTouched', {
                  value: true,
                  name: ((this.$store.getters.getMeta('modelName')) + "._submit")
                }
        );
      }
    }
  }

};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{attrs:{"accept-charset":_vm.$props.acceptCharset,"action":_vm.$props.action,"data-values":_vm.$props.dataValues,"method":_vm.$props.method,"enctype":_vm.$props.enctype},on:{"submit":_vm.handleSubmit}},[_vm._t("default")],2)};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = "data-v-1ab81bf9";
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-1ab81bf9";
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Form = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$5 = {
    inheritAttrs: false,
    props: {
        append: {
           type:String,
        },
        name:{
           type:String,
           require:true
        },
       prepend: {
          type:String,
       }
    },
    computed: {
        // class: function() {
        //    return [
        //       "input-group",
        //       this.$props.class
        //    ]
        // },
       inputClass: function() {
          return {
             //"form-control": true,
             "custom-select": true,
             "is-invalid": (this.inputTouched && this.inputError)
          }
       },

       inputError: function() {
          if (this.inputTouched) {
             return this.$store.getters.getError(this.$props.name)
          } else {
             return null
          }
       },
       inputGroupClass: function() {
          return {
             "input-group": true,
          }
       },
       inputTouched: {
          get: function get () {

             return this.$store.getters.getTouched(this.$props.name)
          },
          set: function set (value) {
             this.$store.commit('setTouched', {
                        value: value,
                        name: this.$props.name
                     }
             );
          }
       },
       inputValue: {
            get: function get () {

                return this.$store.getters.getValue(this.$props.name)
            },
            set: function set (value) {
                this.$store.dispatch('update', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },

    }
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inputGroupClass},[_vm._ssrNode(((_vm.prepend)?("<div class=\"input-group-prepend\"><span class=\"input-group-text\">"+(_vm._s(_vm.prepend))+"</span></div>"):"<!---->")+" "),_c('select',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],class:_vm.inputClass,attrs:{"name":_vm.name},on:{"focus":function($event){_vm.inputTouched=true;},"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.inputValue=$event.target.multiple ? $$selectedVal : $$selectedVal[0];}}},'select',this.$attrs,false),[_vm._t("default")],2),_vm._ssrNode(" "+((_vm.append)?("<div class=\"input-group-append\"><span class=\"input-group-text\">"+(_vm._s(_vm.append))+"</span></div>"):"<!---->")+" "+((_vm.inputTouched)?("<div class=\"invalid-feedback\">"+_vm._ssrEscape(" "+_vm._s(_vm.inputError)+"  ")+"</div>"):"<!---->"))],2)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-1caedde8";
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Select = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$6 = {
    inheritAttrs: false,
    props: {
        append: {
           type:String,
        },
        name:{
           type:String,
           require:true
        },
       prepend: {
          type:String,
       }
    },
    computed: {
        // class: function() {
        //    return [
        //       "input-group",
        //       this.$props.class
        //    ]
        // },
       inputClass: function() {
          return {
             "form-control": true,
             "is-invalid": (this.inputTouched && this.inputError)
          }
       },

       inputError: function() {
          if (this.inputTouched) {
             return this.$store.getters.getError(this.$props.name)
          } else {
             return null
          }
       },
       inputGroupClass: function() {
          return {
             "input-group": true,
          }
       },
       inputTouched: {
          get: function get () {

             return this.$store.getters.getTouched(this.$props.name)
          },
          set: function set (value) {
             this.$store.commit('setTouched', {
                        value: value,
                        name: this.$props.name
                     }
             );
          }
       },
       inputValue: {
            get: function get () {

                return this.$store.getters.getValue(this.$props.name)
            },
            set: function set (value) {
                this.$store.dispatch('update', {
                        value: value,
                        name: this.$props.name
                    }
                );
            }
        },

    }
};/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.inputGroupClass},[_vm._ssrNode(((_vm.prepend)?("<div class=\"input-group-prepend\"><span class=\"input-group-text\">"+(_vm._s(_vm.prepend))+"</span></div>"):"<!---->")+" <textarea"+(_vm._ssrAttr("name",_vm.name))+(_vm._ssrAttrs(this.$attrs))+(_vm._ssrClass(null,_vm.inputClass))+">"+_vm._ssrEscape(_vm._s(_vm.inputValue))+"</textarea> "+((_vm.append)?("<div class=\"input-group-append\"><span class=\"input-group-text\">"+(_vm._s(_vm.append))+"</span></div>"):"<!---->")+" "+((_vm.inputTouched)?("<div class=\"invalid-feedback\">"+_vm._ssrEscape(" "+_vm._s(_vm.inputError)+"  ")+"</div>"):"<!---->"))])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = "data-v-b9e563fa";
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var Textarea = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );var FormStore = function FormStore(ref) {
  var obj, obj$1;

  var additionalComponents = ref.additionalComponents; if ( additionalComponents === void 0 ) additionalComponents = {};
  var authenticityToken = ref.authenticityToken;
  var element = ref.element;
  var httpMethod = ref.httpMethod; if ( httpMethod === void 0 ) httpMethod = 'POST';
  var plugins = ref.plugins; if ( plugins === void 0 ) plugins = [];
  var validationUrl = ref.validationUrl;
  var values = ref.values; if ( values === void 0 ) values = {};
  Vue.use(Vuex);

  var defaultComponents = {
    'k-form': Form,
    'k-input': Field,
    'k-textarea': Textarea,
    'k-select': Select,
    'k-date': Date,
    'k-datetime': Datetime,
    'k-check_box': CheckBox
  };

  var modelName = Object.keys(values)[0];

  var initialState = {
    values: ( obj = {}, obj[modelName] = R.omit(['errors'], values[modelName]), obj ),
    errors: ( obj$1 = {}, obj$1[modelName] = R.pathOr({}, [modelName, "errors"], values), obj$1 ),
    touched: {},
    meta: {
      modelName: modelName,
      authenticityToken: authenticityToken,
      validationUrl: validationUrl,
      httpMethod: httpMethod,
    }
  };

  this.store = new Vuex.Store({
    state: initialState,
    plugins: plugins,
    getters:{
      getValue: function (state) { return function (name) {
        var path = name.replace('[', '.').replace(']','');
        return R.path(path.split('.'), state.values )
      }; },
      getError: function (state) { return function (name) {
        var path = name.replace('[', '.').replace(']','');
        return R.path(path.split('.'), state.errors )
      }; },
      getTouched: function (state) { return function (name) {
        var path = name.replace('[', '.').replace(']','');
        return (R.path(path.split('.'), state.touched ) || R.path([modelName, '_submit'], state.touched ))
      }; },
      getMeta: function (state) { return function (name) {
        var path = name.replace('[', '.').replace(']','');
        return R.path(path.split('.'), state.meta )
      }; },
    },
    mutations: {
      setValue: function(state, payload) {
        //let path = this.dotify(payload.name)
        //console.log(payload)
        var path = payload.name.replace('[', '.').replace(']','');
        //console.log(path)
        state.values = R.assocPath(path.split('.'), payload.value, state.values );
      },
      setTouched: function(state, payload) {
        //let path = this.dotify(payload.name)

        var path = payload.name.replace('[', '.').replace(']','');
        state.touched = R.assocPath(path.split('.'), payload.value, state.touched );
      },
      setError: function(state, payload) {
        //let path = this.dotify(payload.name)

        var path = payload.name.replace('[', '.').replace(']','');
        state.errors = R.assocPath(path.split('.'), payload.value, state.errors );
      },
    },
    actions: {
      refresh: function(context) {
        var onSuccess = function (response) {
          context.commit('setError', {
            value: response.data[modelName].errors,
            name: modelName
          });
        };

        var onError = function (response) {
          console.log('There was a problem with validating the data');
          console.log(response);
          //This exclusively to be able to see this in CI console reports (instead of '[object Object]'):
          console.log(JSON.stringify(response, null, 2));
        };

        var data = Object.assign({
          utf8: '✓',
          authenticity_token: context.state.meta.authenticityToken,
          _method: context.state.meta.httpMethod,
        }, R.clone(context.state.values) );

        data[modelName]._force_rollback = true;

        kUtilsJs.Api.sendRequest({url: context.state.meta.validationUrl, data: data, method: context.state.meta.httpMethod, onSuccess: onSuccess, onError: onError, delay: true});
      },
      update: function(context, payload) {
        context.commit('setValue', payload);
        context.dispatch('refresh');
      }
    }

  });

  console.log(element);
  console.log();
  this.app = new Vue({
    el: element,
    store: this.store,
    inheritAttrs: false,
    components: Object.assign(defaultComponents, additionalComponents),
    props: {},
  });
};/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,CheckBox: CheckBox,Date: Date,Datetime: Datetime,Field: Field,Form: Form,Select: Select,Textarea: Textarea,FormStore: FormStore});// Import vue components

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Object.keys(components).forEach(function (componentName) {
    Vue.component(componentName, components[componentName]);
  });
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}exports.CheckBox=CheckBox;exports.Date=Date;exports.Datetime=Datetime;exports.Field=Field;exports.Form=Form;exports.FormStore=FormStore;exports.Select=Select;exports.Textarea=Textarea;exports.default=plugin;