<template>
    <div class="custom-control custom-checkbox">
        <input type="hidden"  :name="name" :value="unchecked_value"/>
        <input ref="input" v-bind="this.$attrs"  :name="name" v-model="inputValue" v-on:focus="inputTouched=true" :value="value"/>
        <div v-if="inputTouched" class="invalid-feedback"> {{ inputError }}  </div>
    </div>
</template>


<script>
    export default {
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
                    let value = this.$store.getters.getValue(this.$props.name)
                    return ((value === true) || (value === this.$props.name))
                },
                set (value) {
                    this.$store.dispatch('update', {
                            value: value ? this.$props.value : this.$props.unchecked_value,
                            name: this.$props.name
                        }
                    )
                }
            },
        },
    }
</script>

