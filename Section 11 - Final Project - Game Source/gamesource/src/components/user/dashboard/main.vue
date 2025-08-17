<template>
  <div>
    <AdaptiveComponent 
      title="Твои статьи будут тут"
      description="Находится в разработке и отладке для мобильных версий"
      button-text="Получить Бонус"
      @button-clicked="showAlert"
    />
  </div>
</template>

<script setup>
import AdaptiveComponent from '@/components/user/AdaptiveComponent.vue';

function showAlert() {
  alert('Тебя обманули! Тут пока ничего нет!');
}
</script>