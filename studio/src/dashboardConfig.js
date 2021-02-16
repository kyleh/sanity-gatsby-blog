export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '602bffcbda8e7c707891e92e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iubmr53p',
                  apiId: '0c6f9ab5-3f3a-40ca-8927-1717c77af575'
                },
                {
                  buildHookId: '602bffcbf3d68660ed8f7a4b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gm2cgnwe',
                  apiId: 'bf340fc3-d632-454f-9331-ac9476d53f14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kyleh/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gm2cgnwe.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
