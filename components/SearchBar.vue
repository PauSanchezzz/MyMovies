<script setup lang="ts"></script>

<template>
  <div class="search-bar">
    <IconField class="input-search-bar" iconPosition="left">
      <InputIcon class="pi pi-search"> </InputIcon>
      <InputText class="text-search-bar" placeholder="¡Busca tú película favorita!" />
    </IconField>
    <Button severity="help" raised type="button" label="¡Buscar!" icon="pi pi-search" />
  </div>
</template>

<style scoped>
.text-search-bar {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
}

.input-search-bar {
  width: 100%;
}

.search-bar {
  width: 100%;
  display: flex;
  gap: 1rem;
}
</style>
