import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const page = migration.createContentType('page', {
    name: 'Page',
    description: ''
  })

  page.displayField('title')

  page
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  page
    .createField('slug')
    .name('Slug')
    .type('Symbol')
    .localized(true)
    .required(true)

  page
    .createField('content')
    .name('Content')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [
        {
          linkContentType: [
            'heroComponent',
            'stats',
            'cardList',
            'featuredList',
            'logoBar'
          ]
        }
      ]
    })
}

export default migration
