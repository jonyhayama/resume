<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);

function print() {
  window.print();
}
</script>

<template>
  <div class="buttons">
    <div>
      <a href="#print" @click.prevent="print">🖨️<span>{{ __('Print') }}</span></a>
    </div>
    <div>
      <a href="https://jony.dev">🗂️<span>{{ __('Blog') }}</span></a>
    </div>
    <div v-if="props.lang === 'en-us'">
      <NuxtLink to="/pt-br">🇧🇷<span>pt-br</span></NuxtLink>
    </div>
    <div v-if="props.lang === 'pt-br'">
      <NuxtLink to="/">🇺🇸<span>en-us</span></NuxtLink>
    </div>
  </div>
</template>