<!-- App -->
 <template>
   <div>
    <div>
      <app-header/>
    </div>
     <h1>{{ nameMy }}</h1>
     <div>
       <Footer/>
     </div>
   </div>
   
   
 </template>



<!-- With Setup in Script! Very nice! -->

<script setup>
import { ref } from 'vue';
// GET LOCAL COMPONENT //
import Footer from './components/header_footer/Footer.vue';
  const nameMy = ref('Hello, ReibyArtGames with setup in script!');
</script>



<!-- Without setup in script -->
 <!-- <script>
  export default {
    setup() {
      const nameMy = 'Hello, ReibyArtGames!'
      return {
        nameMy,
      }
    }
  }
</script> -->

 <style>
 h1 {
  color: magenta;
 }
</style>