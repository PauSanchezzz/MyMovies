<script setup lang="ts"></script>

<template>
  <IconField class="search-bar" iconPosition="left">
    <InputIcon class="pi pi-search"> </InputIcon>
    <InputText class="input-search-bar" placeholder="¡Busca tú película favorita!" />
  </IconField>
</template>

<style scoped>
.input-search-bar {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}
.search-bar {
  width: 100%;
}
</style>
