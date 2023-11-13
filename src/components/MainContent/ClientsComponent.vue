<script>
import { defineComponent } from 'vue'
import loadUsers from '../../logic/loadUsers';



export default defineComponent({
    name: "ClientsComponent",
    props: {
    
    },
    components: {

    },
    methods: {
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
    <div class="container items-center justify-center w-full h-full  bg-white rounded-lg shadow overflow-x-auto">
        <div class="w-full px-4 py-5 border-b sm:px-6">
            <h3 class="text-2xl text-gray-800">
                Clients Database
            </h3>
        </div>
        <ul class="flex flex-col divide-y divide">
            <li v-for="user in users[0].data[0]" class="flex flex-row">
                <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                        <a href="#" class="relative block">
                            <img alt="profil" v-bind:src="user.image"
                                class="mx-auto object-cover rounded-full h-10 w-10 " />
                        </a>
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                        <div class="font-medium text-black">
                            {{ user.firstname }}
                        </div>
                        <div class="text-sm text-gray-600">
                            {{ user.email }}
                        </div>
                    </div>
                    <div class="text-xs text-gray-600">
                        {{ user.website }}
                    </div>
                    <button class="flex justify-end w-24 text-right">
                        <svg width="20" fill="currentColor" height="20" class="text-gray-500 hover:text-gray-800 "
                            viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </li>
            
        </ul>
    </div>
</template>