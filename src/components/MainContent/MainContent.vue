<script>

import { defineComponent } from 'vue'
import VueGridLayout from 'vue-grid-layout';
//Components
import OrdersComponent from "./OrdersComponent.vue"
import ProgressComponent from "./ProgressComponent.vue"
import FinanceComponent from './FinanceCardComponent.vue';
import ClientsComponent from './ClientsComponent.vue'
//Functions
import saveUsers from '../../logic/saveUsers'
import loadUsers from '../../logic/loadUsers'
import fetchMockedData from '../../logic/fetchMockedData'

export default defineComponent({
    name: "MainContent",
    props: {
        user: {
            required: true,
        }
    },
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
        OrdersComponent, ProgressComponent, FinanceComponent, ClientsComponent
    },

    methods: {
        saveUsers, loadUsers,
        handleSelectedUser(user) {
            console.log(user)
        },
    },
    watch: {
        user() {
            console.log(this.user)
        }
    },
    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 4, h: 18, i: "Orders" },
                { x: 4, y: 0, w: 2, h: 13, i: "Progress" },
                { x: 4, y: 0, w: 2, h: 10, i: "Finance" },
                { x: 0, y: 0, w: 4, h: 19.5, i: "Clients" },
            ],
            draggable: true,
            resizable: true,
            responsive: true,
            index: 0,
            eventLog: [],
            users: [
                { user: "Lucas", components: [OrdersComponent, ProgressComponent, FinanceComponent, ClientsComponent], data: [] },
                { user: "Mikel", components: [OrdersComponent, ProgressComponent, FinanceComponent, ClientsComponent], data: [] }
            ],
            layoutComponents: ['OrdersComponent', 'ProgressComponent', 'FinanceComponent', 'ClientsComponent'],
            currentUser: "",
        };
    },
    beforeMount() {
        (async () => {
            try {
                console.log("antes de montado")
                let freshUsers = loadUsers()

                if (!freshUsers) {
                    saveUsers(this.users)
                    let newFreshUsers = loadUsers()

                    let mockedData = await fetchMockedData()

                    newFreshUsers[0].data.push(mockedData[0])
                    newFreshUsers[1].data.push(mockedData[1])
                    saveUsers(newFreshUsers)
                }

            } catch (error) {
                console.log("Los users no se han cargado");
            }
        })()
    }

})
</script>

<template>
    <div class="w-full sm:w-10/12 h-full">

        <div class="bg-emerald-200 h-full">
            <grid-layout :layout.sync="layout" :col-num="6" :row-height="13" :is-draggable="true" :is-resizable="true"
                :is-mirrored="false" :responsive="responsive" :vertical-compact="true" :margin="[8, 8]"
                :use-css-transforms="true">
                <grid-item v-for="(item, index) in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i"
                    :key="item.i" drag-allow-from=".vue-draggable-handle" drag-ignore-from=".no-drag" class="">

                    <div class="vue-draggable-handle"></div>
                    <div class="no-drag"></div>

                    <component :is="layoutComponents[index]" />
                </grid-item>
            </grid-layout>
        </div>
    </div>
</template>

<style>
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 3px;
    left: 2px;
    padding: 0 8px 8px 0;
    background-origin: content-box;
    background-color: rgb(8, 138, 88);
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    z-index: 30;
    box-shadow: 2px 2px 13px #213d32;
}
</style>