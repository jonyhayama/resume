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
  <h3>{{ __('Skills') }}</h3>
  <div class="skill-meter">
    <div class="skill-name">CorelDraw <span class="skill-grade">7/10</span></div>
    <div class="skill-meter" style="width:70%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">Elixir <span class="skill-grade">3/10</span></div>
    <div class="skill-meter" style="width:30%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">HTML/CSS <span class="skill-grade">9/10</span></div>
    <div class="skill-meter" style="width:90%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">jQuery <span class="skill-grade">8/10</span></div>
    <div class="skill-meter" style="width:80%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">Linux/WSL <span class="skill-grade">6/10</span></div>
    <div class="skill-meter" style="width:60%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">NodeJS <span class="skill-grade">6/10</span></div>
    <div class="skill-meter" style="width:60%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">Photoshop <span class="skill-grade">5/10</span></div>
    <div class="skill-meter" style="width:50%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">PHP <span class="skill-grade">9/10</span></div>
    <div class="skill-meter" style="width:90%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">ReactJS <span class="skill-grade">3/10</span></div>
    <div class="skill-meter" style="width:30%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">VueJS <span class="skill-grade">5/10</span></div>
    <div class="skill-meter" style="width:50%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">Ruby on Rails <span class="skill-grade">7/10</span></div>
    <div class="skill-meter" style="width:70%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">SQL <span class="skill-grade">8/10</span></div>
    <div class="skill-meter" style="width:80%"></div>
  </div>
  <div class="skill-meter">
    <div class="skill-name">WordPress <span class="skill-grade">9/10</span></div>
    <div class="skill-meter" style="width:90%"></div>
  </div>
</template>