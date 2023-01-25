<script setup>
import videoIcon from '~/assets/icons/video.svg';
import artIcon from '~/assets/icons/creativity.svg';
import bookIcon from '~/assets/icons/open-book.svg';
import coffeeIcon from '~/assets/icons/coffee-cup.svg';
import kettlebellIcon from '~/assets/icons/kettlebell.svg';

const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);
const interests = [
  { name: __('Cinema'), icon: videoIcon },
  { name: __('Art'), icon: artIcon },
  { name: __('Reading'), icon: bookIcon },
  { name: __('Coffee'), icon: coffeeIcon },
  { name: __('Crossfit'), icon: kettlebellIcon },
];
</script>

<template>
  <h3>{{ __('Interests') }}</h3>
  <ul class="interests">
    <li v-for="interest in interests">
      <img :src="interest.icon" :alt="interest.name" :title="interest.name" />
    </li>
  </ul>
</template>