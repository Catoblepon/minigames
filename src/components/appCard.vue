<template>
    <div class="card">
        <font-awesome-icon :icon="minigameIcon" size="2xl" class="minigameIcon" />
        <h2>{{ minigameName }}</h2>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const props = defineProps({
    minigameName: {
        type: String,
        required: true,
    },
    minigameIcon: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
h2 {
    margin: 0;
}
</style>