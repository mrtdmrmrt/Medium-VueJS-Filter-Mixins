export const productMixin = {
  data() {
    return {
        message : "VueJs Developer Mert DEMİR",
        searchText : '',
        products : ["VueJS","JavaScript","NuxtJS","ExpressJS","MongoDB"]
    }
  },
  computed: {
    filtered() {
      return this.products.filter((element) => {
        return element.match(this.searchText);
      })
    }
  },
  created(){
    console.log("Mixin Created!!!");
  }
}


