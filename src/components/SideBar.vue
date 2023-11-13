<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SideBar",
    props: {

    },

})
</script>

<template>
    <div class="p-4 bg-emerald-700 w-full md:w-2/12">
        <h2 class="sm:text-left font-bold text-sm text-white sm:mb-6 mb-10">MENU</h2>
        <ul class="sm:text-left">
            <li><font-awesome-icon icon="fa-solid fa-house" />Dashboard</li>
            <li><font-awesome-icon icon="fa-solid fa-cart-shopping" />Orders</li>
            <li><font-awesome-icon icon="fa-solid fa-users" />Clientes</li>
            <li><font-awesome-icon icon="fa-solid fa-table" />Tasks</li>
            <li><font-awesome-icon icon="fa-solid fa-truck-fast" />Finance</li>
        </ul>
    </div>
</template>

<style>
li {
    color: white;
    margin: 14px 0px;
}

li:hover {
    color: rgb(0, 0, 0);
    cursor: pointer;
}

li> :first-child {
    margin-right: 10px;
}
</style>