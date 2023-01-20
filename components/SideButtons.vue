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
    <a href="#print" onclick="window.print();"><i class="fas fa-print"></i><span>{{ __('Print') }}</span></a>
    <a href="https://jony.dev"><i class="far fa-folder-open"></i><span>{{ __('Blog') }}</span></a>
  </div>
</template>