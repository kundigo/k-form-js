<template>
  <form
          v-bind:accept-charset="$props.acceptCharset"
          v-bind:action="$props.action"
          v-bind:data-values="$props.dataValues"
          v-bind:method="$props.method"
          v-bind:enctype="$props.enctype"
          v-on:submit="handleSubmit"
  >
    <slot></slot>
  </form>
</template>

<script>
  export default {

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
        if (!this.$store.getters.getError(`${this.$store.getters.getMeta('modelName')}._is_valid`)) {
          event.preventDefault();
          this.$store.commit('setTouched', {
                    value: true,
                    name: `${this.$store.getters.getMeta('modelName')}._submit`
                  }
          )
        }
      }
    }

  }

</script>

<style scoped>
</style>
