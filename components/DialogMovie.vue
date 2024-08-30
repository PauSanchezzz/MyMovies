<script setup lang="ts">
import type { MovieDetails } from '../interfaces/Movie';
import { ref, defineProps, watch } from "vue";

const visible = ref(false);
const movieData = ref<MovieDetails | null>(null);

const loadMovieData = async (id: number) => {
  const { data, error } = await useFetch<MovieDetails>(`https://api.themoviedb.org/3/movie/${id}`, {
    query: { include_adult: false, include_video: false, language: 'es-MX', page: 1, sort_by: 'popularity.desc' },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTc2ODIzMmQxMDU1NDNkOTRlNTA2MGRiZjdjZDI0NyIsIm5iZiI6MTcyNDg5MTAyNC4yNTEzODMsInN1YiI6IjY2Y2ZiZGNiYmZiOTg3YWEzMmUyZmI1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrPcQ3ZPCPlOLkLoK8M1R5jQJiSsaTLhJRFe70sPadU`,
    }
  });

  if (!error.value && data.value) {
    movieData.value = data.value;
  }
};

const props = defineProps<{
  movieId: number | null
}>();

watch(() => props.movieId, (newId) => {
  if (newId !== null) {
    loadMovieData(newId);
    visible.value = true;
  }
});

const closeDialog = () => {
  visible.value = false;
};

let rating = ref(0);
let fullStars = ref(0);
let emptyStars = ref(0);

watch(() => movieData.value, (newMovieData) => {
  if (newMovieData) {
    rating.value = newMovieData.vote_average || 0;
    fullStars.value = Math.round(rating.value / 2);
    emptyStars.value = 5 - fullStars.value;
  }
});

</script>

<template>
  <div v-if="movieData">
    <Dialog v-model:visible="visible" modal :header="movieData?.title" @hide="closeDialog"
      :style="{ width: '75vw', padding: 0, background: '#f9f3ff' }"
      :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <div class="container-dialog">
        <img class="img-movie-description" :src="`https://image.tmdb.org/t/p/w500${movieData.poster_path}`" alt="">
        <div class="description-movie">
          <h1 class="title-description">{{ movieData.title }}</h1>
          <p class="information-movie">
            <b>Duración:</b> {{ movieData.runtime }} minutos |
            <b>Fecha de Estreno:</b> {{ movieData.release_date }}
          </p>
          <p class="text-description">{{ movieData.overview === "" ? "Sin descripción." : movieData.overview }}</p>
          <p class="subtitle-description">Género:</p>
          <div class="genres-movie">
            <div v-for="genre in movieData.genres" :key="genre.id">
              <p class="genre-movie">{{ genre.name }}</p>
            </div>
          </div>

          <p class="subtitle-description">Calificación:</p>
          <div class="calification-movie">
            <i v-for="n in fullStars" :key="'full-' + n" class="pi pi-star-fill"
              style="font-size: 2rem; margin-right: 0.5rem; color: #efcd25;"></i>
            <i v-for="n in emptyStars" :key="'empty-' + n" class="pi pi-star"
              style="font-size: 2rem; margin-right: 0.5rem; color: #efcd25;"></i>
            <p>{{ rating.toFixed(1) }}/10</p>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped>
.img-movie-description {
  height: 550px;
  width: 450px;
}

.container-dialog {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  place-content: center;
  place-items: center;
}

.text-description {
  text-align: justify;
}

.subtitle-description {
  padding: 1rem 0;
  font-weight: bold;
}

.genres-movie {
  display: flex;
  gap: 1rem;
}

.genre-movie {
  background-color: #d4c2ec;
  padding: 0.5rem 1rem;
  border-radius: 50px;
}

.information-movie {
  font-size: 1.2rem;
  padding: 2rem 0;
}

.calification-movie {
  display: flex;
  align-items: center;
}

.calification-movie p {
  font-size: 1.2rem;
  margin-left: 1rem;
  font-weight: bold;
}

.description-movie {
  padding: 1.5rem;
}

@media screen and (max-width: 410px) {
  .img-movie-description {
    height: 300px;
    width: 250px;
  }
}
</style>