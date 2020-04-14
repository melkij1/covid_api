import axios        from 'axios';
//import translate from 'translate';

export default {
  actions: {
    // contactFormInfo({commit}, formValue){
    //   commit('submit', formValue)
    // }
    async get_GlobalInfo({commit}) {
      await axios.get('https://coronavirus-19-api.herokuapp.com/all',{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
        proxy: {
          host: "http://localhost",
          port: 80
        }
      })
      .then(res => {
        console.log(res,'res')
        commit('updateAllInfo', res)
      })
    },
    async get_Countries({commit}){
      await axios.get('https://coronavirus-19-api.herokuapp.com/countries',{
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
        },
        proxy: {
          host: "http://localhost",
          port: 80
        }
      })
      .then(res => {
        commit('updateAllCountries', res)
      })
    }
  },
  mutations: {
    updateAllInfo(state, res){
      state.AllInfo = res.data
    },
    updateAllCountries(state,res){
      state.AllCountries = res.data
    }
  },
  state: {
    AllInfo: null,
    AllCountries: null,
    nameChart: [
      ['Заражений за всё время','Выздоровлений','Смертей']
      // {id: 1, name: 'Заражений за всё время'},
      // {id: 2, name: 'Выздоровлений'},
      // {id: 3, name: 'Смертей'}
    ]
  },
  getters: {
    get_nameChart: state => state.nameChart,
    get_allInfo(state){
      let allRecovered = null
      let allDeaths = null
      let allCases = null
      if(state.AllInfo !== null){
        allRecovered = state.AllInfo.recovered.toLocaleString(),
        allDeaths = state.AllInfo.deaths.toLocaleString(),
        allCases = state.AllInfo.cases.toLocaleString()
      }
      return {allRecovered,allDeaths, allCases}
    },
    get_AllCountries(state){
      const newArCountries = [];
      const oldCountries = state.AllCountries;
      if(oldCountries !== null){
        oldCountries.forEach(element => {
          // let translateCounry = translate(element.country, { to: 'ru', engine: 'yandex', key: 'trnsl.1.1.20200412T080959Z.261e8debc9a0f305.6db44908a3ff624cf3517bd2bc2518b4a0365043'})
          // console.log(translateCounry,'translateCounry')
          if(element.country !== '' && element.country !== 'Total:'){
            newArCountries.push({
              country: element.country,
              cases: element.cases,
              deaths: element.deaths,
              recovered: element.recovered,
            })

          }
        });
      }
      return newArCountries
      //state.AllCountries
    },
    get_AllStartChart(state){
      const newChart = [];
      const oldCountries = state.AllCountries;
      if(oldCountries !== null){
        oldCountries.forEach(element => {
          // let translateCounry = translate(element.country, { to: 'ru', engine: 'yandex', key: 'trnsl.1.1.20200412T080959Z.261e8debc9a0f305.6db44908a3ff624cf3517bd2bc2518b4a0365043'})
          // console.log(translateCounry,'translateCounry')
          if(element.country !== '' && element.country !== 'Total:'){
            newChart.push({
              country: element.country,
              cases: element.cases,
              deaths: element.deaths,
              recovered: element.recovered,
            })

          }
        });
      }
      return newChart
    }
    // get_allRecovered: state => state.AllInfo.recovered.toLocaleString(),
    // get_allDeaths: state => state.AllInfo.deaths.toLocaleString(),
    // get_allCases: state => state.AllInfo.cases.toLocaleString(),
  }
}