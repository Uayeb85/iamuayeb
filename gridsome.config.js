// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      
      // These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options:{
        typeName: 'Project',
        path: 'projects/**/*.md'
      }
    }
  ],
  templates:{
    Project:[
      {
        path:"/projects/:title",
        component:"./src/templates/Project.vue"
      }
    ]
  }
}