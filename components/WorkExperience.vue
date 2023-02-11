<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: 'en-us'
  }
})
const __ = useTranslation(props.lang);

const jobs = [
  {
    company: {
      name: 'BairesDev',
      segment: __('Nearshore Software Outsourcing company'),
      url: 'https://www.bairesdev.com/'
    },
    position: __('Developer'),
    dates: [{
      from: 'Aug/2020',
      to: 'Current',
    }],
    location: __('Home Office'),
    description: __('External Client: TeraKeet, mainly workwing with Ruby on Rails and VueJS')
  },
  {
    company: null,
    position: __('Freelance PHP Developer'),
    dates: [{
      from: 'Jan/2016',
      to: 'Current',
    }],
    location: __('Home Office'),
    description: __('Website creation using WordPress')
  },
  {
    company: {
      name: 'Move2',
      segment: __('Startup Accelerator'),
      url: 'http://move2.com.br'
    },
    position: __('Ruby on Rails Developer'),
    dates: [{
      from: 'Apr/2019',
      to: 'Aug/2020',
    }],
    location: __('São Paulo-SP, BRA'),
    description: __('Engaged in: Doutor Direto, Influenciae, 99 Fórmulas, YouShow, Distrito')
  },
  {
    company: {
      name: 'EBANX',
      segment: __('Payment Process Startup'),
      url: 'http://ebanx.com.br'
    },
    position: __('PHP Developer'),
    dates: [{
      from: 'Dec/2018',
      to: 'Mar/2019',
    }],
    location: __('Curitiba-PR, BRA'),
    description: __('Dev Finance Team (actually worked with Elixir)')
  },
  {
    company: {
      name: 'IPM',
      segment: __('Software House'),
      url: 'https://www.ipm.com.br/'
    },
    position: __('PHP Developer'),
    dates: [{
      from: 'Sep/2015',
      to: 'Dec/2015',
    }],
    location: __('Rio do Sul-SC, BRA'),
    description: __('Sector: Fiscal Web')
  },
  {
    company: {
      name: 'UNIS-MG',
      segment: __('University'),
      url: 'https://unis.edu.br/'
    },
    position: __('Professor'),
    dates: [{
      from: 'Apr/2014',
      to: 'Sep/2015',
    }],
    location: __('Varginha-MG, BRA'),
    description: __('Subjects: Object Oriented Programming I and II, Algorithms and Programming Logic, Computing applied to logistics')
  },
  {
    company: {
      name: 'Supimpa',
      segment: __('Digital Agency'),
      url: 'https://www.agenciasupimpa.com.br/'
    },
    position: __('PHP Developer'),
    dates: [{
      from: 'Oct/2012',
      to: 'Ago/2015',
    }],
    location: __('Varginha-MG, BRA'),
    description: __('Engaged in: americapizza.com.br, texhyundai.com.br, aciv.com.br, lojastal.com.br, reidoseletronicos.com.br, among others.')
  },
  {
    company: {
      name: 'Tupã Comunicação',
      segment: __('Ad Agency'),
      url: 'https://tupacomunicacao.com.br/'
    },
    position: __('PHP Developer'),
    dates: [{
      from: 'Mar/2011',
      to: 'Oct/2012',
    }],
    location: __('Varginha-MG, BRA'),
    description: __('Engaged in: componente3.com.br, borgesefonseca.com.br, among others.')
  },
  {
    company: {
      name: 'Q1',
      segment: __('Digital Agency'),
      url: 'http://q1agenciadigital.com.br'
    },
    position: __('PHP Developer'),
    dates: [{
      from: 'Mar/2011',
      to: 'Ago/2011',
    }],
    location: __('Varginha-MG, BRA'),
    description: __('Engaged in: paroquiadodivino.com.br, topcarlavras.com.br, among others.')
  },
  {
    company: {
      name: 'One Up',
      segment: __('Travel Agency'),
      url: 'http://workandtravel.com.br/'
    },
    position: __('Program Assistant'),
    dates: [{
      from: 'Apr/2007',
      to: 'Mar/2012',
    }],
    location: __('Varginha-MG, BRA'),
    description: __('Duties: Gather and revise documents, send documents to Visa Sponsors, help participants to schedule their visa appointments and fill out the required documents.')
  },
  {
    company: {
      name: 'Heavenly Sports',
      segment: __('Work and Travel Program'),
      url: 'https://www.heavenlysports.com/'
    },
    position: __('Ski Technician'),
    dates: [{
      from: 'Dec/2006',
      to: 'Mar/2007',
    }, {
      from: 'Dec/2008',
      to: 'Mar/2009'
    }],
    location: __('South Lake Tahoe-CA, USA'),
    description: __('Duties: Set ski and snowboard bindings, help customers to choose the most suited equipment for their needs.')
  },
  {
    hidden: true,
    company: {
      name: 'ICC Informática',
      segment: __('Computing School'),
      url: 'http://workandtravel.com.br/'
    },
    position: __('Teacher'),
    dates: [{
      from: 'Mar/2004',
      to: 'Dez/2006',
    }, {
      from: 'Abr/2007',
      to: 'Set/2007'
    }],
    location: __('Varginha-MG, BRA'),
    description: __('Subjects: Windows, MS Office, CorelDraw, Photoshop, Webdesign')
  },
]
</script>

<template>
  <h2><i class="fas fa-briefcase"></i>{{ __('Work Experience') }}</h2>
  <table>
    <tr v-for="job in jobs" :class="{ hidden: job.hidden }">
      <td>
        <template v-for="date in job.dates">
          <i class="far fa-calendar-alt"></i>{{ __(`${date.from} ~ ${date.to}`) }}<br />
        </template>
        <i class="fa fa-map-marker-alt"></i>{{ job.location }}
      </td>
      <td>
        <strong>{{ job.position }}
          <template v-if="job.company">
            | <a :href="job.company.url" target="_blank" rel="nofollow">{{ job.company.name }}</a>
          </template>
        </strong>
        <br />
        {{ job.company && job.company.segment }}
        <div>
          {{ job.description }}
        </div>
      </td>
    </tr>
  </table>
</template>
