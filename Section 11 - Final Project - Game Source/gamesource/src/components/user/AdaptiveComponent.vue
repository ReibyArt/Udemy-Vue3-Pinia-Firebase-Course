<template>
  <div class="adaptive-component" :class="{ 'mobile-layout': isMobile }">
    <h2>{{ title }}</h2>
    <div class="content">
      <img src='/src/assets/images/S.T.A.L.K.E.R.Shadow of Chernobyl.jpg' alt="Пример изображения" class="content-image">
      <div class="text-content">
        <p>{{ description }}</p>
        <button @click="handleClick" class="action-button">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Адаптивный компонент'
  },
  description: {
    type: String,
    default: 'Этот компонент адаптируется под разные размеры экрана.'
  },
  imageUrl: {
    type: String,
    default: 'src/assets/images/cyberpunk.jpg'
  },
  buttonText: {
    type: String,
    default: 'Нажми меня'
  }
});

const emit = defineEmits(['button-clicked']);

const isMobile = ref(false);

function checkScreenSize() {
  isMobile.value = window.innerWidth < 768;
}

function handleClick() {
  emit('button-clicked');
  console.log("button click!");
}

onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  console.log("On Mounted!");
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>

<style scoped>
.adaptive-component {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.adaptive-component h2 {
  color: #333;
  margin-bottom: 20px;
}

.content {
  display: flex;
  gap: 30px;
  align-items: center;
}

.content-image {
  width: 300px;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
}

.text-content {
  flex: 1;
}

.action-button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #369f6e;
}

/* Мобильная версия */
@media (max-width: 767px) {
  .content {
    flex-direction: column;
  }
  
  .content-image {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
}

/* Альтернативный вариант с классом вместо медиа-запроса */
.mobile-layout .content {
  flex-direction: column;
}

.mobile-layout .content-image {
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
}
</style>
