new Vue({
    el: '#app',
    data: {
      result: ''
    },
    methods: {
      calculate: function() {
        this.result = eval(this.result || null);
      },
      liveScreen: function(enteredValue) {
        if (!this.result) {
          this.result = "";
        }
        this.result += enteredValue;
      },
      clearResult: function() {
        this.result = '';
      }
    }
  });