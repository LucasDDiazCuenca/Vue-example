<script>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue';
import SideBar from "./components/SideBar.vue"
import MainContent from "./components/MainContent/MainContent.vue"

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
        Header,
        SideBar,
        MainContent
    },
    methods: {
        handleSelectedUser(user){
            this.user = user
        }
    },
    data() {
        return {
            user: null
        }
    }
})
</script>

<template>
    <div id="app">
        <Header @selected-user="handleSelectedUser"></Header>

        <div class="flex flex-wrap w-full h-full">
            <SideBar></SideBar>
            <MainContent :user="user"></MainContent>
        </div>



    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #f0eef5;
    height: 92.5vh;
}
</style>
