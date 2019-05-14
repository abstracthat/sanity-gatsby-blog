export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5cda29cada6adf0b07cdd3ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yabucqe5',
                  apiId: 'f26957b3-04f9-4b84-9fba-75d0247943e1'
                },
                {
                  buildHookId: '5cda29ca1365487a3e7b3363',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ph35j3o7',
                  apiId: 'e5dfef62-5e83-4013-98c7-69a7c8181863'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abstracthat/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ph35j3o7.netlify.com', category: 'apps'}
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
