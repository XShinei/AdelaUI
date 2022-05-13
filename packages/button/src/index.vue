<template>
  <button
    class="ad-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'ad-button--' + type : '',
      buttonSize ? 'ad-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
    <i class="ad-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'AdButton',
  });
</script>

<script setup lang="ts">
  import { computed, withDefaults } from 'vue';

  interface ButtonProps {
    type?: 'default' | 'primay' | 'text' | 'info' | 'warning' | 'danger';
    size?: 'small' | 'medium' | 'mini';
    icon?: string;
    nativeType?: 'button' | 'submit' | 'reset';
    loading?: boolean;
    disabled?: boolean;
    plain?: boolean;
    autofocus?: boolean;
    round?: boolean;
    circle?: boolean;
  }

  const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'default',
    nativeType: 'submit',
  });

  const emit = defineEmits(['click']);

  const buttonSize = computed(() => {
    return props.size;
  });

  const buttonDisabled = computed(() => {
    return props.disabled;
  });

  const handleClick = (evt) => {
    emit('click', evt)
  };

</script>