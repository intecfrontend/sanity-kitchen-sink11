export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff6c96fc45579a3d17c9d87',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-11-studio',
                  apiId: '75fd8392-1138-4fa4-b658-cc1f2b77b741'
                },
                {
                  buildHookId: '5ff6c96f73a5b3921f24a020',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-11',
                  apiId: 'f685d2c7-869c-4b41-ad42-8f25cb9091f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intecfrontend/sanity-kitchen-sink11',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-11.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
