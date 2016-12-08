<template>
    <transition name="fade" appear>
        <section v-if="visible" @click="handle" class="weui-mask"></section>
    </transition>
</template>

<script>
    export default {
        name: 'mask',
        data () {
            return {
                visible: true
            }
        },
        props: {
            clickFn: Function,
            clickClose: Boolean 
        },
        methods: {
            handle () {
                this.clickClose && this.close()
                this.clickFn && this.clickFn(this)
            },
            close () {
                this.visible = false
            }
        }
    }
</script>

<style src="../animate/fade.css"></style>