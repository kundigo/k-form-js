<script>
import { KFormJsSample } from './entry';
export default {
    name:  'KFormJsLibDev', // vue library dev component
    components: {
        KFormJsSample,
    },
}
</script>

<template>
    <div class="k-form-js-lib-dev">
        <k-form-js-sample></k-form-js-sample>
    </div>
</template>

<style scoped>
    .k-form-js-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
