<template>
    <div>
        <button @click="connectWallet">{{ address }}</button>
    </div>
</template>
  
<script lang="ts">
import ConnectWalletButton from './ConnectWalletButton';

export default ConnectWalletButton;
</script>