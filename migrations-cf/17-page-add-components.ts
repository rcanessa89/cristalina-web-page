import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const page = migration.editContentType('page')

  page.editField('content').items({
    type: 'Link',
    linkType: 'Entry',
    validations: [
      {
        linkContentType: [
          'heroComponent',
          'stats',
          'cardList',
          'featuredList',
          'logoBar',
          'productSpecs',
          'ctaBanner'
        ]
      }
    ]
  })
}

export default migration
