<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Header',
    props: {},
    data() {
        return {
            selectedUser: 'User', // Valor por defecto
        };
    },
    methods: {
        toggleUser() {
            // Cambiar entre "Lucas" y "Mikel"
            this.selectedUser = this.selectedUser === 'Lucas' ? 'Mikel' : 'Lucas';
            this.$emit('selected-user', this.selectedUser);
        },
    },
});
</script>

<template>
    <div class="flex justify-between bg-white p-4">
        <h1 class="mx-4 text-2xl font-bold text-emerald-900">Lucas App</h1>
        <div class="flex gap-3 items-center sm:w-3/12 md:w-2/12 lg:w-1/12">
            <font-awesome-icon @click="toggleUser" class="rounded-full p-3 bg-emerald-400 cursor-pointer"
                icon="fa-solid fa-user" />
            <p>{{ selectedUser }}</p>
        </div>
    </div>
</template>
