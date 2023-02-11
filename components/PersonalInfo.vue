<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);

function calculateAge(birthday) {
  var ageDifMs = Date.now() - new Date(birthday);
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const age = calculateAge('1988-08-02')
</script>

<template>
  <img class="photo" src="~/assets/img/jony-profile-2019-lowres.jpg" alt="Foto de Perfil" />
  <h1>Jonathan Hayama</h1>
  <h2>Web Developer</h2>

  <h3>Info</h3>
  <table class="table info-table">
    <tr>
      <th>{{ __('Age:') }}</th>
      <td>{{ age }}</td>
    </tr>
    <tr>
      <th>{{ __('Marital Status:') }}</th>
      <td>{{ __('Married') }}</td>
    </tr>
  </table>

  <h3>{{ __('Contact') }}</h3>
  <table class="table contact-table">
    <tr v-if="lang === 'en-us'">
      <th><i class="fas fa-phone"></i></th>
      <td><a href="tel:+5535988559970" target="_blank" rel="nofollow">+55 (35) 9 8855-9970</a></td>
    </tr>
    <tr v-if="lang === 'pt-br'">
      <th><i class="fab fa-whatsapp"></i></th>
      <td><a href="https://api.whatsapp.com/send?phone=5535988559970" target="_blank" rel="nofollow">(35) 98855-9970</a></td>
    </tr>
    <tr>
      <th><i class="far fa-envelope"></i></th>
      <td>jonathan.hayama@gmail.com</td>
    </tr>
    <tr>
      <th><i class="fas fa-globe-americas"></i></th>
      <td><a href="https://jony.dev" target="_blank">https://jony.dev</a></td>
    </tr>
    <tr>
      <th><i class="fas fa-map-marker-alt"></i></th>
      <td>{{ __('Varginha - MG, BRA') }}</td>
    </tr>
    <tr>
      <th><i class="fab fa-github"></i></th>
      <td><a href="https://github.com/jonyhayama" target="_blank">/jonyhayama</a></td>
    </tr>
    <tr>
      <th><i class="fab fa-linkedin"></i></th>
      <td><a href="https://www.linkedin.com/in/jonathanhayama/" target="_blank">/jonathanhayama</a></td>
    </tr>
  </table>
</template>