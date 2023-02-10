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
  <h2><i class="fas fa-briefcase"></i>{{ __('Work Experience') }}</h2>
  <table>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Aug/2020 ~ Current') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Home Office') }}
      </td>
      <td>
        <strong>{{ __('Developer at') }} <a href="https://www.bairesdev.com/" target="_blank"
            rel="nofollow">BairesDev</a></strong>
        <br />{{ __('Nearshore Software Outsourcing company') }}
        <div>
          {{ __('External Client: TeraKeet, mainly workwing with') }} <a href="https://rubyonrails.org/" target="_blank"
            rel="nofollow">Ruby on Rails</a> and <a href="https://vuejs.org/" target="_blank"
            rel="nofollow">VueJS</a>
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Jan/2016 ~ Current') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Home Office') }}
      </td>
      <td>
        <strong>{{ __('Freelance PHP Developer') }}</strong>
        <br />{{ __('Website creation using') }} <a href="https://wordpress.org/" target="_blank" rel="nofollow">WordPress</a>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Apr/2019 ~ Aug/2020') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('São Paulo-SP, BRA') }}
      </td>
      <td>
        <strong>{{ __('Ruby on Rails Developer at') }} <a href="http://move2.com.br" target="_blank"
            rel="nofollow">Move2</a></strong>
        <br />{{ __('Startup Accelerator') }}
        <div>
          {{ __('Engaged in: Doutor Direto, Influenciae, 99 Fórmulas, YouShow, Distrito') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Dec/2018 ~ Mar/2019') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Curitiba-PR, BRA') }}
      </td>
      <td>
        <strong>{{ __('PHP Developer at') }} <a href="http://ebanx.com.br" target="_blank" rel="nofollow">EBANX</a> {{ __('(actually worked with Elixir)') }}</strong>
        <br />{{ __('Payment Process Startup') }}
        <div>
          {{ __('Dev Finance Team') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Sep/2015 ~ Dec/2015') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Rio do Sul-SC, BRA') }}
      </td>
      <td>
        <strong>{{ __('PHP Developer at') }} <a href="https://www.ipm.com.br/" target="_blank" rel="nofollow">IPM</a></strong>
        <br />{{ __('Software House') }}
        <div>
          {{ __('Sector: Fiscal Web') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Apr/2014 ~ Sep/2015') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Varginha-MG, BRA') }}
      </td>
      <td>
        <strong>{{ __('Professor at') }} <a href="https://unis.edu.br/" target="_blank" rel="nofollow">UNIS-MG</a></strong>
        <br />{{ __('University') }}
        <div>
          {{ __('Subjects: Object Oriented Programming I and II, Algorithms and Programming Logic, Computing applied to logistics') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Oct/2012 ~ Ago/2015') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Varginha-MG, BRA') }}
      </td>
      <td>
        <strong>{{ __('PHP Developer at') }} <a href="https://www.agenciasupimpa.com.br/" target="_blank"
            rel="nofollow">Supimpa</a></strong>
        <br />{{ __('Digital Agency') }}
        <div>
          {{ __('Engaged in: americapizza.com.br, texhyundai.com.br, aciv.com.br, lojastal.com.br, reidoseletronicos.com.br, among others.') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Mar/2011 ~ Oct/2012') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Varginha-MG, BRA') }}
      </td>
      <td>
        <strong>{{ __('PHP Developer at') }} <a href="https://tupacomunicacao.com.br/pt/home/" target="_blank"
            rel="nofollow">Tupã Comunicação</a></strong>
        <br />{{ __('Ad Agency') }}
        <div>
          {{ __('Engaged in: componente3.com.br, borgesefonseca.com.br, among others.') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Mar/2011 ~ Ago/2011') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Varginha-MG, BRA') }}
      </td>
      <td>
        <strong>{{ __('PHP Developer at') }} <a href="http://q1agenciadigital.com.br" target="_blank"
            rel="nofollow">Q1</a></strong>
        <br />{{ __('Digital Agency') }}
        <div>
          {{ __('Engaged in: paroquiadodivino.com.br, topcarlavras.com.br, among others.') }}
        </div>
      </td>
    </tr>
    <tr>
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Apr/2007 ~ Mar/2012') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Varginha-MG, BRA') }}
      </td>
      <td>
        <strong>{{ __('Program Assistant at') }} <a href="http://workandtravel.com.br/" target="_blank" rel="nofollow">One
            Up</a></strong>
        <br />{{ __('Travel Agency') }}
        <div>
          {{ __('Duties: Gather and revise documents, send documents to Visa Sponsors, help participants to schedule their visa appointments and fill out the required documents.') }}
        </div>
      </td>
    </tr>
    <tr class="hidden">
      <td>
        <i class="far fa-calendar-alt"></i>{{ __('Mar/2004 ~ Dez/2006') }}
        <br /><i class="far fa-calendar-alt"></i>{{ __('Abr/2007 ~ Set/2007') }}
        <br /><i class="fa fa-map-marker-alt"></i>{{ __('Varginha-MG, BRA') }}
      </td>
      <td>
        <strong>{{ __('Teacher at') }} <a href="http://grupoicc.com.br/" target="_blank" rel="nofollow">ICC
            Informática</a></strong>
        <br />{{ __('Computing School') }}
        <div>
          {{ __('Subjects: Windows, MS Office, CorelDraw, Photoshop, Webdesign') }}
        </div>
      </td>
    </tr>
  </table>
</template>
