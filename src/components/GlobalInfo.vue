<template>
  <div class="global__section">
    <h2>Статистика со всего мира</h2>

    <div class="global-wrapper">
      <div class="global__item">
        <p>Заражений за всё время</p>
        <span>{{get_allInfo.allCases}}</span>
      </div>
      <div class="global__item">
        <p>Выздоровлений</p>
        <span>{{get_allInfo.allRecovered}}</span>
      </div>
      <div class="global__item">
        <p>Смертей</p>
        <span>{{get_allInfo.allDeaths}}</span>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapGetters } from 'vuex'
export default {
  name: 'GlobalInfo',
  computed: {
    ...mapGetters([
      'get_allInfo',
      'get_allRecovered',
      'get_allDeaths',
      'get_allCases',
      'get_AllCountries',
      'get_nameChart',
      'get_AllStartChart'
    ])
  },
  methods:{
    ...mapActions([
      'get_GlobalInfo'
    ])
  },
  async mounted(){
    await this.get_GlobalInfo();
  }
}
</script>