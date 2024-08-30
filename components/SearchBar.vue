<script setup lang="ts">
import type { Movie, ApiResponse } from '../interfaces/Movie';
import { ref } from 'vue';
import { defineEmits } from 'vue';

const titleMovie = ref('');
const movies = ref<Movie[]>([]);
const emit = defineEmits(['updateMovies', 'emptySearch', 'emptyResult']);

async function searchData() {
  if (titleMovie.value === '') {
    emit('emptySearch');
  } else {
    const { data } = await useFetch<ApiResponse>(`https://api.themoviedb.org/3/search/movie?query=${titleMovie.value}`, {
      query: {
        include_adult: false,
        include_video: false,
        language: 'es-MX',
        page: 1,
        sort_by: 'popularity.desc'
      },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTc2ODIzMmQxMDU1NDNkOTRlNTA2MGRiZjdjZDI0NyIsIm5iZiI6MTcyNDg5MTAyNC4yNTEzODMsInN1YiI6IjY2Y2ZiZGNiYmZiOTg3YWEzMmUyZmI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrPcQ3ZPCPlOLkLoK8M1R5jQJiSsaTLhJRFe70sPadU`,
      }
    });
    titleMovie.value = ''
    if (data.value?.results.length === 0) {
      emit('emptyResult');
    } else {
      movies.value = data.value?.results || [];
      emit('updateMovies', movies.value);
    }
  }
}
</script>

<template>
  <div class="search-bar">
    <IconField class="input-search-bar" iconPosition="left">
      <InputIcon class="pi pi-search"> </InputIcon>
      <InputText class="text-search-bar" placeholder="¡Busca tú película favorita!" v-model="titleMovie" type="text"
        v-on:keyup.enter="searchData" />
    </IconField>
    <Button severity="help" raised type="button" label="¡Buscar!" icon="pi pi-search" v-on:click="searchData" />
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
  max-width: 1000px;
  margin: auto;
  padding: 2rem 0;
  width: 100%;
  display: flex;
  gap: 1rem;
}
</style>
