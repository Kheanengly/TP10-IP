<template>
    <div>
      <a-input-search v-model:value="value" placeholder="input search loading deault" loading />
      <br />
      <br />
      <a-input-search
        v-model:value="value"
        placeholder="input search loading with enterButton"
        loading
        enter-button
      />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
setup() {
    const value = ref<string>('');
    return {
    value,
    };
},
});
</script>