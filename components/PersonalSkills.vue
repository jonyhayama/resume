<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);

const skills = [
  { name: 'HTML/CSS/JS', confidence: 9 },
  { name: 'Linux/WSL', confidence: 7 },
  { name: 'NodeJS', confidence: 5 },
  { name: 'Pure PHP', confidence: 6 },
  { name: 'ReactJS', confidence: 4 },
  { name: 'VueJS', confidence: 8 },
  { name: 'Ruby on Rails', confidence: 7 },
  { name: 'SQL', confidence: 7 },
  { name: 'WordPress', confidence: 8 },
].sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <h3>{{ __('Skills') }}</h3>
  <div class="skill-meter" v-for="skill in skills">
    <div class="skill-name">{{ skill.name }} <span class="skill-grade">{{ skill.confidence }}/10</span></div>
    <div class="skill-meter" :style="`width: ${skill.confidence}0%`"></div>
  </div>
</template>
