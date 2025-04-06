<!-- App -->
 <template>
   <div>
     <app-header/>
    <div class="container">
      <div>
      Content
      </div>
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



<!-- Style is Global!  -->
 <!-- Scoped --- this is for a local component! -->
 <style>
body {
  padding: 0;
  margin: 0;
  font-family: 'Robot', sans-serif;
}
.container{
  min-height: 84vh;
  box-sizing: border-box;
  padding: 20px;
}
</style>





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
