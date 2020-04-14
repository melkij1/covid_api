<template>
   <div class="info-wrap">
     <!-- <input type="text" class="cards-serach" v-model="search" placeholder=" Search by country name..."/> -->
      <div class="cards-wrapper">
        <div class="card__item" v-for="item in get_AllCountries" :key="item.id">
          <div class="card__item-info">
            <p>{{item.country}}</p>

            <BarChart
            :options="item"/>
          </div>
        </div>
      </div>
      
    </div>
</template>


<script>
import {mapActions, mapGetters } from 'vuex'
import BarChart from './BarChart';

//const exampleItems = [...Array(get_AllCountries).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
export default {
  name: 'Countries',
  data() {
      return {
        search: '',
          //exampleItems,
          pageOfItems: []
      };
    },
  components:{
    BarChart
  },
  computed: {
    ...mapGetters([
      'get_AllCountries',
    ]),
    // filteredList(){
    //   return this.get_AllCountries.filter(item => {
    //     return item.country.toLowerCase().includes(this.search.toLowerCase())
    //   })
    // }
  },
  methods:{
    ...mapActions([
      'get_Countries'
    ]),
  },
  async mounted() {
    await this.get_Countries();
  },
}
</script>