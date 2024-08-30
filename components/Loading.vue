<script setup lang="ts"></script>

<template>
  <div class="loading-wrapper">
    <div class="lds-ellipsis">
      <div v-for="item in 4" :key="item"></div>
      <p class="title-loading">Cargando...</p>
    </div>
  </div>
</template>
<style scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100vw;
}

.title-loading {
  color: #41106d;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.lds-ellipsis,
.lds-ellipsis div {
  box-sizing: border-box;

}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}

.lds-ellipsis div {
  position: absolute;
  top: 33.33333px;
  width: 13.33333px;
  height: 13.33333px;
  border-radius: 50%;
  background-color: #41106d;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
}
</style>
