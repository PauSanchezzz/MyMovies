<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Card class="movie-card" style="width: 15rem; overflow: hidden">
    <template #header>
      <img alt="user header" class="movie-card-image" :src="props.image" />
    </template>
    <template #title>{{ props.title }}</template>
    <template #subtitle>{{ props.subtitle }}</template>
  </Card>
</template>

<style scoped>
.movie-card-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.movie-card:hover {
  box-shadow: 0 0 12px 5px rgba(147, 51, 234, 0.2);
  transition: 0.3s;
  scale: 1.1;
}
.movie-card{
  background: #f9f3ff
}
</style>
