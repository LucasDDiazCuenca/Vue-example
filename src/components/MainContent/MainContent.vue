<script>
import { defineComponent } from 'vue'
import VueGridLayout from 'vue-grid-layout';
import UsersComponent from "./UserComponent.vue"
import ProgressComponent from "./ProgressComponent.vue"

export default defineComponent({
    name: "MainContent",
    props: {

    },
    components:{
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        UsersComponent, ProgressComponent
    },

    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 2, h: 15, i: "Pedidos" },
                { x: 2, y: 0, w: 1, h: 15, i: "Clientes" },
                { x: 0, y: 0, w: 1, h: 15, i: "Catalogo" },
            ],
            components: [UsersComponent, ProgressComponent, "hey"]
        };
    },

})
</script>

<template>
    <div class="w-full sm:w-10/12 h-full">
        <div class="bg-emerald-200 h-full">
            <grid-layout :layout.sync="layout" 
                :col-num="3"
                :row-height="13"
                :is-draggable="true"
                :is-resizable="true"
                :is-mirrored="false"
                :vertical-compact="true"
                :margin="[8, 8]"
                :use-css-transforms="true"
                class=""
                >
                <grid-item v-for="(item, index) in layout" 
                :x="item.x" 
                :y="item.y" 
                :w="item.w" 
                :h="item.h" 
                :i="item.i" 
                :key="item.i" 
                class="">
                    
                    <component :is="components[index]" />
                    
                </grid-item>
            </grid-layout>

        </div>
    </div>
</template>
