<template>
    <h1>Minigames!</h1>
    <div class="grid-three">
            <app-card
              minigameName = "Tic Tac Toe"
              minigameIcon = "table-cells"
              @click="navigateTo('tictactoe')"
            />
            <app-card
              minigameName = "Guess the number"
              minigameIcon = "arrow-down-9-1"
              @click="navigateTo('guessthenumber')"
            />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import appCard from './components/appCard.vue';
const router = useRouter();

function navigateTo(route) {
  console.log('Navigating to:', '/' + route);
  router.push('/' + route).catch(err => {
    console.error('Navigation error:', err);
  })
}
</script>

<style scoped>
.grid-three {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
}
</style>