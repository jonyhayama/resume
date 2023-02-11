<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);
</script>

<template>
  <div class="buttons">
    <div>
      <a href="#print" onclick="window.print();"><i class="fas fa-print"></i><span>{{ __('Print') }}</span></a>
    </div>
    <div>
      <a href="https://jony.dev"><i class="far fa-folder-open"></i><span>{{ __('Blog') }}</span></a>
    </div>
    <div v-if="props.lang === 'en-us'">
      <NuxtLink to="/pt-br">🇧🇷<span>pt-br</span></NuxtLink>
    </div>
    <div v-if="props.lang === 'pt-br'">
      <NuxtLink to="/">🇺🇸<span>en-us</span></NuxtLink>
    </div>
  </div>
</template>