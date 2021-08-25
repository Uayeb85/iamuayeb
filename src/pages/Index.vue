<template>
  <Layout>
    <Intro/>
    <Bio/>
    <!-- Cards -->
    <section class="body-font bg-white" id="work">
      <div class="triangle"></div>
        <div class="container px-5 py-24 md:py-32 mx-auto">
          <div>
            <h3 class="text-center text-4xl md:text-6xl text-indigo-500 font-bold pb-10"> Projects </h3> 
            </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full"
              v-for="project in $page.allProject.edges.slice(0,8)"
              :key="project.id">
              <g-link :to="project.node.link"
                      class="block relative h-48 rounded overflow-hidden">
                <g-image :alt="project.node.title" class="object-cover object-center w-full h-full block" :src="project.node.featuredImage"/>
              </g-link>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{project.node.genre}}</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">{{project.node.title}}</h2>
              </div>
            </div>
          </div>
      </div>
    </section>
  
<!-- Fin Cards -->
  </Layout>
</template>

<page-query>
query{
  allProject(sortBy: "title", order: ASC){
    edges{
      node{
        title
        featuredImage
        id
        genre
        link
      }
    }
  }
}
</page-query>

<script>
import Intro from '~/components/Intro.vue'
import Bio from '~/components/Bio.vue'
export default {
  metaInfo: {
    title: 'I am Uayeb'
  },
    components: {
    Intro,
    Bio,
  }
}
</script>

<style>

@media only screen and (min-width: 0px)  and (max-width: 768px) {

.triangle {
  position: relative;
  background: #6366F1;
  height: 10vh;
}

.triangle::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 50px 50px 0 50px;
  border-color: #6366F1 transparent transparent transparent;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
}


.home-links a {
  margin-right: 1rem;
}

}


@media only screen and (min-width: 769px)  and (max-width: 2900px) {



.home-links a {
  margin-right: 1rem;
}

}


</style>



