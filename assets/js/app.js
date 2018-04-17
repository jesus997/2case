var app = new Vue({
    el: '#convert-app',
    data: {
      text: ''
    },
    computed: {
      charactersCount() {
          return this.text.length;
      },
      wordCount() {
        if(this.text.length == 0) return 0;
        return this.text.trim().replace(/\s+/gi, ' ').split(' ').length;
      }
    },
    methods: {
      clc: function(ev) {
        this.text = this.text.toLowerCase().trim();
      },
      cuc: function(ev) {
        this.text = this.text.toUpperCase().trim();
      },
      ccc: function(ev) {
        this.text = this.text.toCapitalCase().trim();
      }
    }
});