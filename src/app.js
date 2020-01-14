import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies:null,
      selectedCurrency: null,
      euros: null
    },
    mounted(){
      this.currencyFetch()
    },
    methods: {
      currencyFetch: function(){
        fetch('https://api.exchangeratesapi.io/latest')
        .then(req => req.json())
        .then(data => this.currencies = data.rates)
        this.currencies = null;
      },
      currencyConversion: function(currency, euros){
        const convertedAmount = currency * euros;
        return convertedAmount
      }
    }
  });
});
