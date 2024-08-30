<script setup>
import { ref, onMounted } from 'vue';

const visible = ref(false);
const emit = defineEmits(['close']);

onMounted(() => {
  visible.value = true;
});

const props = defineProps({
  titleCard: {
    type: String,
    required: true,
  },
  subtitleCard: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const closeDialog = () => {
  visible.value = false;
  emit('close');
};

</script>
<template>
  <div class="card flex justify-content-center">
    <Dialog v-model:visible="visible" modal :header="titleCard" :style="{ width: '25rem' }" @hide="closeDialog">
      <div class="flex align-items-center">
        <i :class="icon" style="font-size: 2rem; margin-right: 0.5rem; color: #9333EA;"></i>
        <span style="font-size: 1.4rem; text-align: center; justify-content: center;">{{ subtitleCard }}</span>
      </div>
      <div style="display: flex; justify-content: center;">
        <Button style="background-color: #b391d6; border-color: #b391d6; margin-top:1.8rem ;" label="Ok"
          @click="closeDialog" />
      </div>
    </Dialog>
    <p class="text" v-if="visible == false">{{ message }}</p>
  </div>
</template>

<style>
.text {
  margin-top: 250px;
  text-align: center;
  font-size: 1.5rem;
  color: #41106d;
}
</style>
