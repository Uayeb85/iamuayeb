const c1 = () => import(/* webpackChunkName: "page--src--templates--project-vue" */ "/home/uayeb/Escritorio/iamuayeb/src/templates/Project.vue")
const c2 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/iamuayeb/node_modules/gridsome/app/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/iamuayeb/src/pages/Index.vue")

export default [
  {
    path: "/projects/:title/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
