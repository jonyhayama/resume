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
  <h3>{{ __('Interests') }}</h3>
  <ul class="interests">
    <li><img src="~/assets/icons/video.svg" :alt="__('Cinema')" :title="__('Cinema')" /></li>
    <li><img src="~/assets/icons/creativity.svg" :alt="__('Art')" :title="__('Art')" /></li>
    <li><img src="~/assets/icons/open-book.svg" :alt="__('Reading')" :title="__('Reading')" /></li>
    <li><img src="~/assets/icons/coffee-cup.svg" :alt="__('Coffee')" :title="__('Coffee')" /></li>
    <li><img src="~/assets/icons/kettlebell.svg" :alt="__('Crossfit')" :title="__('Crossfit')" /></li>
  </ul>
</template>