import Vue from 'vue/dist/vue.esm'
import Vuex from 'vuex'
import * as R from 'ramda'
import { Api } from 'k-utils-js'
import CheckBox from './check_box.vue'
import Date from './date.vue'
import Datetime from './datetime.vue'
import Field from './field.vue'
import Form from './form.vue'
import Select from './select.vue'
import Textarea from './textarea.vue'

class FormStore  {

  constructor({
    additionalComponents = {},
    authenticityToken,
    element,
    httpMethod = 'POST',
    plugins = [],
    validationUrl,
    values= {},
  }) {
    Vue.use(Vuex)

    let defaultComponents = {
      'k-form': Form,
      'k-input': Field,
      'k-textarea': Textarea,
      'k-select': Select,
      'k-date': Date,
      'k-datetime': Datetime,
      'k-check_box': CheckBox
    }

    const modelName = Object.keys(values)[0];

    let initialState = {
      values: {
        [modelName]:  R.omit(['errors'], values[modelName])
      },
      errors: {
        [modelName]: R.pathOr({}, [modelName, "errors"], values)
      },
      touched: {},
      meta: {
        modelName: modelName,
        authenticityToken: authenticityToken,
        validationUrl: validationUrl,
        httpMethod: httpMethod,
      }
    }

    this.store = new Vuex.Store({
      state: initialState,
      plugins: plugins,
      getters:{
        getValue: (state) => (name) => {
          let path = name.replace('[', '.').replace(']','')
          return R.path(path.split('.'), state.values )
        },
        getError: (state) => (name) => {
          let path = name.replace('[', '.').replace(']','')
          return R.path(path.split('.'), state.errors )
        },
        getTouched: (state) => (name) => {
          let path = name.replace('[', '.').replace(']','')
          return (R.path(path.split('.'), state.touched ) || R.path([modelName, '_submit'], state.touched ))
        },
        getMeta: (state) => (name) => {
          let path = name.replace('[', '.').replace(']','')
          return R.path(path.split('.'), state.meta )
        },
      },
      mutations: {
        setValue: function(state, payload) {
          //let path = this.dotify(payload.name)
          //console.log(payload)
          let path = payload.name.replace('[', '.').replace(']','')
          //console.log(path)
          state.values = R.assocPath(path.split('.'), payload.value, state.values )
        },
        setTouched: function(state, payload) {
          //let path = this.dotify(payload.name)

          let path = payload.name.replace('[', '.').replace(']','')
          state.touched = R.assocPath(path.split('.'), payload.value, state.touched )
        },
        setError: function(state, payload) {
          //let path = this.dotify(payload.name)

          let path = payload.name.replace('[', '.').replace(']','')
          state.errors = R.assocPath(path.split('.'), payload.value, state.errors )
        },
      },
      actions: {
        refresh: function(context) {
          let onSuccess = response => {
            context.commit('setError', {
              value: response.data[modelName].errors,
              name: modelName
            })
          };

          let onError = (response) => {
            console.log('There was a problem with validating the data');
            console.log(response)
            //This exclusively to be able to see this in CI console reports (instead of '[object Object]'):
            console.log(JSON.stringify(response, null, 2))
          };

          let data = Object.assign({
            utf8: '✓',
            authenticity_token: context.state.meta.authenticityToken,
            _method: context.state.meta.httpMethod,
          }, R.clone(context.state.values) )

          data[modelName]._force_rollback = true

          Api.sendRequest({url: context.state.meta.validationUrl, data, method: context.state.meta.httpMethod, onSuccess, onError, delay: true})
        },
        update: function(context, payload) {
          context.commit('setValue', payload)
          context.dispatch('refresh')
        }
      }

    });

    console.log(element)
    console.log()
    this.app = new Vue({
      el: element,
      store: this.store,
      inheritAttrs: false,
      components: Object.assign(defaultComponents, additionalComponents),
      props: {},
    })
  }
}

export default FormStore;