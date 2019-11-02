<template>
   <div :class="inputGroupClass">
      <div v-if="prepend"  class="input-group-prepend">
         <span class="input-group-text" v-html="prepend"></span>
      </div>

      <textarea  v-bind="this.$attrs" :class="inputClass" v-model="inputValue" v-on:focus="inputTouched=true" :name="name"/>

      <div v-if="append" class="input-group-append">
         <span class="input-group-text" v-html="append"></span>
      </div>

      <div v-if="inputTouched" class="invalid-feedback"> {{ inputError }}  </div>
   </div>

 </template>


<script>
    export default {
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
              get () {

                 return this.$store.getters.getTouched(this.$props.name)
              },
              set (value) {
                 this.$store.commit('setTouched', {
                            value: value,
                            name: this.$props.name
                         }
                 )
              }
           },
           inputValue: {
                get () {

                    return this.$store.getters.getValue(this.$props.name)
                },
                set (value) {
                    this.$store.dispatch('update', {
                            value: value,
                            name: this.$props.name
                        }
                    )
                }
            },

        }
    }
</script>

