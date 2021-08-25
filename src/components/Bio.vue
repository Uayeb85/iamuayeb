<template>
    <div class="bg-gray-100" id="about">
      <div class="pt-10 bg-indigo-500 aboutmini">
        <h3 class="text-gray-100 font-extrabold text-3xl md:text-6xl about pt-5">About me</h3>
        <h4 class="mt-6 text-justify p-4 text-gray-200 font-semibold">
        Hello, I am Uayeb, and I'm your next favorite web developer. My trademark is to always be sure that the person or 
        business I work with totally understands and feels entirely satisfied with the products I deliver, because I believe 
        that web development is fundamental for a start-up or project to thrive. <br>
                    Feel free to ask! I will happily solve all your doubts.  

        </h4>
      </div>


      <div class="flex aboutme"  >
        <div class="cuadro2 absolute"></div>
        <div class="cuadro bg-green-300"></div>
        <div class="flex  flex-col items-center titulo-about">
          <h3 class="text-indigo-500 font-extrabold text-2xl md:text-6xl mt-10">About me</h3>
          <h4 class="mt-6 text- justify px-24 pt-16 text-indigo-600 font-semibold text-2xl">
        Hello, I am Uayeb, and I'm your next favorite web developer. My trademark is to always be sure that the person or 
        business I work with totally understands and feels entirely satisfied with the products I deliver, because I believe 
        that web development is fundamental for a start-up or project to thrive. <br>
          Feel free to ask! I will happily solve all your doubts.  
          </h4>


        </div>


      </div>


    </div>



</template>

<script>
export default {
  name: 'About me',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 0px)  and (max-width: 768px) {
.about{
  text-align: center;
}
.aboutme{
  display: none;
}

}
@media only screen and (min-width: 769px)  and (max-width: 2900px) {
.aboutmini{
  display: none;
}
.cuadro{
  height: 500px;
  width: 650px;
}
.cuadro2{
  height: 350px;
  width: 350px;
  margin-top: 250px;
  background: RGBA(90, 103, 216, 0.8);
  
}
.about{
  text-align: center;
  display: none;
}
.titulo-about{
  height: 100%;
  width: 100%;
}
.cuadro3{
  height: 50px;
  width: 550px;
  margin-top: 250px;
  background: RGBA(90, 103, 216, 0.8);
}
.cuadro4{
  height: 75px;
  width: 600px;
}
}
</style>