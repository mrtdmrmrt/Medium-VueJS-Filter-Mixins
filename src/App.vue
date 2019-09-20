<template>
  <div class="container">
  	<h3>Filter ve Mixins</h3>
  	<p>{{message | toUppercase | toLowercase}}</p><!--En son yazılan diğerini ezer-->
  	<p>{{message | toUppercase}}</p>
  	<hr>
  	<input type="text" v-model="searchText">
  	<ul>
  		<li v-for="product in filtered"><!--filtered==products-->
  			{{product}}
  		</li>
  	</ul>
    <FilterList />
  </div>
</template>

<script>
    import FilterList from "./FilterList";
    import { productMixin } from "./productMixin";

  export default {
    mixins : [productMixin],
    components : {
      FilterList
    },
  	data() {
  		return {
  			message : "VueJs Developer Mert DEMİR",
  			searchText : '',
  			
  		}
  	},
  	//bu oluşturduğumuz filter sadece bu component içinde kullanılabilir
  	filters : {
  		//bu fonksiyon içine bir value alır.O value bizim değiştirmek istediğimiz değerdir.
  		toUppercase(value){
  			return value.toUpperCase();
  		}
  	}
   
  }
</script>


