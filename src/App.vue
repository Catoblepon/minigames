<script setup>
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { ref, onMounted } from 'vue'
import Tooltip from './components/tooltip.vue';
import { RouterView, useRouter } from 'vue-router';

const darkMode = ref(localStorage.getItem("darkMode"));
const router = useRouter();

onMounted(() => {
  if (darkMode.value === "enabled") {
    document.documentElement.classList.add("darkMode");
  }
  });

function toggleDarkMode() {
  if(darkMode.value !== "enabled") {
    document.documentElement.classList.add("darkMode");
    localStorage.setItem("darkMode", "enabled");
  }
  else {
    document.documentElement.classList.remove("darkMode");
    localStorage.setItem("darkMode", null);
  }
  darkMode.value = localStorage.getItem("darkMode");
}

function coveringIcon(icon) {
  if(darkMode.value === "enabled" && icon === "moon") return "hiddenIcon";
  if(darkMode.value !== "enabled" && icon === "sun") return "hiddenIcon";
  return null;
}

function emptyStorage() {
  localStorage.clear();
  document.documentElement.classList.remove("darkMode");
}

function navigateTo(route) {
  router.push(route)
}

</script>

<template>
  <div class="navBar">
    <font-awesome-layers class="fa-xl hiddenAnimation" @click="toggleDarkMode()">
      <font-awesome-icon icon="moon" :class="coveringIcon('moon')"/>
      <font-awesome-icon icon="sun" :class="coveringIcon('sun')"/>
    </font-awesome-layers>
    <Tooltip @click="emptyStorage()"
      tooltipText="trash"
      :tooltipIcon="true"
      tooltipSize="xl"
      tooltipSide="ttBottom"
      tooltipInfo="Clicking on this will delete all your saved data."
    />
    <font-awesome-icon icon="home" size="xl" @click="navigateTo('/')"/>
  </div>
  <div class="page">
    <RouterView />
  </div>
</template>

<style scoped>

.page {
  width: 75%;
  margin: auto;
  background-color: var(--bg-light);
  text-align: center;
  padding: 20px 10px;
}

.navBar {
  display: grid;
  grid-template: 32px / repeat(12, 1fr);
  position: sticky;
  top: 0px;
  justify-items: center;
  width: 75%;
  margin: auto;
  background-color: var(--bg-light);
  padding: 10px 10px;
  margin-bottom: 10px;
  border-radius: 0px 0px 20px 20px;
  cursor: pointer;
}

.hiddenAnimation {
  transition: color 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.hiddenAnimation .hiddenIcon {
  color: var(--bg-light);
  z-index: 0;
  opacity: 0;
}

.hiddenAnimation:hover {
  color: var(--bg-light);
}

.hiddenAnimation:hover .hiddenIcon {
  color: var(--bg-dark);
  z-index: 1;
  opacity: 1;
}
</style>
