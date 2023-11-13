<script>
import { defineComponent } from 'vue'
import loadUsers from '../../logic/loadUsers';



export default defineComponent({
    name: "OrdersComponent",
    props: {

    },
    components:{
        
    },

    data() {
        return {
            users:null
        };
    },
    beforeMount(){
        let freshUsers = loadUsers()
        this.users = freshUsers
    }

})
</script>



<template>
    <div class="container w-full h-full overflow-x-auto">
        <div class="w-full h-full">
            <div class="w-full h-full">
                <div class="inline-block min-w-full h-full overflow-hidden rounded-lg shadow bg-white" >
                    <p class="text-2xl my-4">Orders</p>
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th scope="col"
                                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Users
                                </th>
                                <th scope="col"
                                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Order Noº
                                </th>
                                <th scope="col"
                                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    Created at
                                </th>
                                <th scope="col"
                                    class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                    status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users[0].data[0]">
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <div class="flex items-center">
                                        <div class="flex-shrink-0">
                                            <a href="#" class="relative block">
                                            </a>
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {{ user.firstname }}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ user.ip }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {{ new Date(user.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: '2-digit' }) }}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <span
                                        class="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                                        <span aria-hidden="true"
                                            class="absolute inset-0 bg-green-200 rounded-full opacity-50">
                                        </span>
                                        <span class="relative">
                                            active
                                        </span>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>