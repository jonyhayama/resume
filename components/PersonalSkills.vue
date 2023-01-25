<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);

const skills = [
  { name: 'CorelDraw', confidence: 7 },
  { name: 'Elixir', confidence: 3 },
  { name: 'HTML/CSS', confidence: 9 },
  { name: 'jQuery', confidence: 8 },
  { name: 'Linux/WSL', confidence: 6 },
  { name: 'NodeJS', confidence: 6 },
  { name: 'Photoshop', confidence: 5 },
  { name: 'PHP', confidence: 9 },
  { name: 'ReactJS', confidence: 3 },
  { name: 'VueJS', confidence: 5 },
  { name: 'Ruby on Rails', confidence: 7 },
  { name: 'SQL', confidence: 8 },
  { name: 'WordPress', confidence: 9 },
].sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <h3>{{ __('Skills') }}</h3>
  <div class="skill-meter" v-for="skill in skills">
    <div class="skill-name">{{ skill.name }} <span class="skill-grade">{{ skill.confidence }}/10</span></div>
    <div class="skill-meter" :style="`width: ${skill.confidence}0%`"></div>
  </div>
</template>
