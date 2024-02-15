<template>
  <div>
    <p>Received message from child: {{ childMsg }}</p>
    <ChildComponent @increase-by="(msg) => console.log(msg)" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

const childMsg = ref('');
function escribe(msg) {
  console.log(msg);
}
const handleMessage = (msg) => {
  childMsg.value = msg;
  console.log('Received message from child:', msg);
};
</script>
