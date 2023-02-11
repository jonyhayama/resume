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
  <h2><i class="fas fa-graduation-cap"></i>{{ __('Education') }}</h2>
  <table>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2019
      </td>
      <td>
        <strong>{{ __('SWADA - Secure Web Application Development Awareness') }}</strong>
        <br /><a href="http://www.scippinternational.org" target="_blank" rel="nofollow">{{ __('SCIPP International') }}</a> |
        {{ __('Online Course') }}
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2015
      </td>
      <td>
        <strong>{{ __('Web Application Technologies Specialist') }}</strong>
        <br /><a href="http://unopar.com.br/" target="_blank" rel="nofollow">Universidade Norte do Paraná</a> |
        {{ __('Online Course') }}
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2011
      </td>
      <td>
        <strong><a href="https://www.zend.com/en/yellow-pages/ZEND018644" target="_blank" rel="nofollow">{{ __('Zend Certified Engineer 5.3') }}</a></strong>
        <br /><a href="https://www.zend.com/" target="_blank" rel="nofollow">Zend Technologies</a> | Cupertino-CA,
        USA
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2011
      </td>
      <td>
        <strong>{{ __('Preparatory course for Zend Certified Engineer 5.3') }}</strong>
        <br />PHPrime Training | Belo Horizonte-MG
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2010
      </td>
      <td>
        <strong>{{ __('Analysis and Systems Development') }}</strong>
        <br /><a href="https://unis.edu.br/" target="_blank" rel="nofollow">UNIS-MG</a> | Varginha-MG
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2007
      </td>
      <td>
        <strong>{{ __('ESL (English as a Second Language) - Level: Advanced') }}</strong>
        <br /><a href="http://newyorkidiomas.com.br/" target="_blank" rel="nofollow">New York Idiomas</a> |
        Varginha-MG
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>2004
      </td>
      <td>
        <strong>Webdesign</strong>
        <br /><a href="http://grupoicc.com.br/" target="_blank" rel="nofollow">ICC Informática</a> | Varginha-MG
      </td>
    </tr>
  </table>
</template>