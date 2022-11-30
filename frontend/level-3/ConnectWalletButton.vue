<template>
    <div>
        <button @click="connectWallet">{{ address }}</button>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data: () => ({
        address: '',
    }),

    methods: {
        connectWallet() {},
    },
})
</script>