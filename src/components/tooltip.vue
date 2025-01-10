<template>
    <div class="tooltip"> 
        <div v-if="tooltipIcon"><font-awesome-icon :icon="tooltipText" :size="tooltipSize"/></div>
        <div v-else>{{ tooltipText }}</div>
        <span class="tooltiptext" :class="tooltipSide">{{ tooltipInfo }}</span>
    </div>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const props = defineProps({
  tooltipText: {
    type: String,
    required: true,
  },
  tooltipIcon: {
    type: Boolean,
    default: false,
  },
  tooltipSize: {
    type: String,
    default: "",
  },
  tooltipInfo: {
    type: String,
    required: true,
  },
  tooltipSide: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>
.tooltip {
    position: relative;
    display: inline-block;
    width: fit-content;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: var(--bg-medium);
    color: var(--text-normal);
    border: 2px solid var(--bg-dark);
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    position: absolute;
    z-index: 1;
}

.tooltiptext.ttRight {
    top: -50%;
    left: 150%;
}

.tooltiptext.ttRight::after  {
  top: 40%;
  right: 100%;
  border-color: transparent var(--bg-dark) transparent transparent;
}

.tooltiptext.ttLeft {
    top: -50%;
    right: 150%;
}

.tooltiptext.ttLeft::after  {
  top: 40%;
  left: 100%;
  border-color: transparent transparent transparent var(--bg-dark);
}

.tooltiptext.ttTop {
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
    margin-bottom: 10px;
}

.tooltiptext.ttTop::after  {
  top: 100%;
  left: 50%;
  margin-left: -10px;
  border-color: var(--bg-dark) transparent transparent transparent;
}

.tooltiptext.ttBottom {
    top: 100%;
    left: 50%;
    margin-left: -60px;
    margin-top: 10px;
}

.tooltiptext.ttBottom::after {
    bottom: 100%;
    left: 50%;
    margin-left: -10px;
    border-color:  transparent transparent var(--bg-dark) transparent;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  border-width: 8px;
  border-style: solid;
}

.tooltip:hover .tooltiptext {
    visibility: visible;  
}
</style>