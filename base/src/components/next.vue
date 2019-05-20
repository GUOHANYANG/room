<template>
    <section>
        <p>{{name}}</p>
        <input type="text" v-model='msg'>
        <p>{{msg}}</p>
    </section>
</template>
<script>
export default {
    data(){
        return {
           msg:''
        }
    },
    created(){
        var _this =this
        console.log(this.$store.state.userInfo)
        bus.$on('getMsg',(val)=>{
            console.log(val)
            this.msg = val
        })
    },
    destroyed(){
        bus.$off('getMsg')
    },
    computed:{
        name(){
            return this.$store.state.userInfo
        }
    }
}
</script>


