<template>
    <div :class="inputGroupClass">
        <div v-if="prepend"  class="input-group-prepend">
            <span class="input-group-text" v-html="prepend"></span>
        </div>

        <input type="hidden"  :name="name" :value="inputValue"/>
        <input  ref="input" v-bind="this.$attrs" :class="inputClass" v-model="inputFormattedValue" v-on:focus="inputTouched=true"/>

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
            inputFormattedValue: {
                get () {
                    let value = this.$store.getters.getValue(this.$props.name)
                    let date = moment(value, 'YYYY-MM-DD')
                    if (date.isValid()) {
                        return date.format('DD/MM/YYYY')
                    } else {
                        return ""
                    }
                },
                set (value) {

                    if (!value.match(/^[0-9]{2}[/][0-9]{2}[/][0-9]{4}$/)){
                        // user is typing a new date, wait for him to finish
                        // TODO: use a more restrictive regexp
                        return
                    }

                    let date = moment(value, 'DD/MM/YYYY')

                    this.$store.dispatch('update', {
                            value: date.isValid() ? date.format('YYYY-MM-DD') : '',
                            name: this.$props.name
                        }
                    )
                }
            },

        },
        mounted: function() {
            this.$nextTick(function () {
                // the handleChange prop is sent to the plugin because it's the only way
                // to intercept changes made by the user by using the datetime picker plugin
                //let dateTimeOptions = Object.assign(this.props.dateTimeOptions, {onChangeDateTime: this.props.handleChange});
                let handleChange = function(_date, _input) {
                    this.inputFormattedValue = this.$refs.input.value
                }.bind(this)

                let dateTimeOptions = {
                    format: 'd/m/Y',
                    formatDate: 'd/m/Y',
                    timepicker: false,
                    scrollInput: false,
                    onChangeDateTime: handleChange
                };

                $(this.$refs.input).datetimepicker(dateTimeOptions);
            })
        }
    }
</script>

