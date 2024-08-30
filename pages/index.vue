<script setup lang="ts">
import type { Movie, ApiResponse } from '../interfaces/Movie';
import { ref } from 'vue';

const loading = ref(true);
const selectedMovieId = ref<number | null>(null)
const movies = ref<Movie[]>([]);
const originalMovies = ref<Movie[]>([]);
const isSearchActive = ref(false);
const isSearchEmpty = ref(false);
const isResultEmpty = ref(false);

const { data, error } = useFetch<ApiResponse>('https://api.themoviedb.org/3/discover/movie', {
  lazy: true,
  query: { include_adult: false, include_video: false, language: 'es-MX', page: 1, sort_by: 'popularity.desc' },
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTc2ODIzMmQxMDU1NDNkOTRlNTA2MGRiZjdjZDI0NyIsIm5iZiI6MTcyNDg5MTAyNC4yNTEzODMsInN1YiI6IjY2Y2ZiZGNiYmZiOTg3YWEzMmUyZmI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrPcQ3ZPCPlOLkLoK8M1R5jQJiSsaTLhJRFe70sPadU`,
  }
})

watchEffect(() => {
  if (data.value) {
    loading.value = false;
    movies.value = data.value.results || [];
    originalMovies.value = data.value.results || [];
  }
});

function extractYear(dateString: string): string {
  return dateString.split('-')[0];
}

const openDialog = (id: number) => {
  selectedMovieId.value = id
}

function updateMoviesList(updatedMovies: Movie[]) {
  movies.value = updatedMovies;
  isSearchActive.value = true;
  isSearchEmpty.value = false;
}

function resetMovies() {
  movies.value = originalMovies.value;
  isSearchActive.value = false;
  isSearchEmpty.value = false;
}

function handleEmptySearch() {
  isSearchEmpty.value = true;
}

function resetEmptySearch() {
  isSearchEmpty.value = false;
}

function handleEmptyResult() {
  isResultEmpty.value = true;
}

function resertHandleEmptyResult() {
  isResultEmpty.value = false;
}
</script>

<template>
  <div class="manuBar">
    <div class="content-manuBar">
      <SearchBar @updateMovies="updateMoviesList" @emptySearch="handleEmptySearch" @emptyResult="handleEmptyResult" />
      <Button v-if="isSearchActive" class="refresh-button" label="" icon="pi pi-home" severity="success" raised
        @click="resetMovies" />
    </div>
  </div>

  <div class="image-container">
    <img class="image-introduction" src="../public/images/cinema.jpg" alt="">
    <p class="overlay-text">¡Sumérgete en el mundo del cine!<br><b>Encuentra la película perfecta para cada
        momento.</b>
    </p>
  </div>

  <Loading v-if="loading && !error" />

  <AlertError v-if="error" :titleCard="'¡Error!'" :subtitleCard="'¡Error al cargar las películas!'"
    :message="'Lo sentimos. Actualmente no hay contenido disponible para ti. Inténtalo más tarde.'" />

  <DialogMovie :movieId="selectedMovieId" />

  <div v-if="isSearchEmpty" class="empty-search-message">
    <AlertError v-if="movies" :titleCard="'¡Campo Vacio!'" :subtitleCard="'Ingresa el titulo de la pelicula.'"
      :message="''" :icon="'pi pi-thumbs-down'" @close="resetEmptySearch" />
  </div>

  <div v-if="isResultEmpty" class="empty-search-message">
    <AlertError v-if="movies" :titleCard="'¡Sin Resultados!'" :subtitleCard="'Busqueda sin resultados.'" :message="''"
      :icon="'pi pi-exclamation-triangle'" @close="resertHandleEmptyResult" />
  </div>

  <div class="movies-list">
    <MovieCard v-for="(movie, index) in movies" :key="movie.id" :title="movie.title"
      :subtitle="extractYear(movie.release_date)" :image="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
      @click="openDialog(movie.id)" />
  </div>
</template>

<style scoped>
.manuBar {
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  position: sticky;
  background-color: rgba(201, 189, 218, 0.8);
  backdrop-filter: blur(10px);
  padding: 0 1.5rem;
}

.content-manuBar {
  display: flex;
  align-items: center;
  max-width: 1080px;
  margin: auto;
}

.movies-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  place-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
  margin-top: 1.5rem;
}

.refresh-button {
  margin-left: 0.3rem;
  padding: 0.8rem;
}


.image-introduction {
  width: 100%;
  height: 20rem;
  filter: blur(4px);
  object-fit: cover;
}

.image-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #FCF9FF;
  font-size: 1.8rem;
  text-align: center;
}

@media screen and (max-width: 410px) {
  .image-introduction {
    height: 8rem;
    filter: blur(1.5px);
  }
}

@media screen and (max-width: 475px) {
  .overlay-text {
    font-size: 1rem;
  }
}
</style>
