<template>
  <div class="toggle-switch">
    <span v-if="labelBefore" class="toggle-label textLeft" :class="size">{{ labelBefore }}</span>
    <label class="switch" :class="size">
      <input type="checkbox" v-model="localModel" @change="emitChange" />
      <span class="slider round" :class="size"></span>
    </label>
    <span v-if="labelAfter" class="toggle-label textRight" :class="size">{{ labelAfter }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  labelBefore: {
    type: String,
    default: "",
  },
  labelAfter: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "small",
  }
});

// Define emits
const emit = defineEmits(['update:modelValue']);

// Computed property for v-model binding
const localModel = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

// Emit change event
const emitChange = () => {
  emit('update:modelValue', localModel.value);
};
</script>

<style scoped>
.toggle-switch {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: fit-content;
  gap: 5px;
}

.switch {
  position: relative;
}

.switch.small {
  width: 34px;
  height: 20px;
}

.switch.big {
  width: 51px;
  height: 28px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--text-normal);
  transition: 0.4s;
  border-radius: 20px;
}

.slider::before {
  position: absolute;
  content: "";
  background-color: var(--bg-dark);
  transition: 0.4s;
  border-radius: 50%;
}

.slider.small::before {
  left: 3px;
  bottom: 3px;
  height: 14px;
  width: 14px;
}

.slider.big::before {
  left: 3px;
  bottom: 4px;
  height: 20px;
  width: 20px;
}

input:checked + .slider::before {
  background-color: var(--text-normal);
}

input:checked + .slider {
  background-color: var(--bg-medium);
}

input:checked + .slider.small::before {
  transform: translateX(14px);
}

input:checked + .slider.big::before {
  transform: translateX(24px);
}

.toggle-label.small {
  font-size: 14px;
}

.toggle-label.big {
  font-size: 24px;
}

</style>
