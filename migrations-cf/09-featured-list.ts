import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const featuredList = migration.createContentType('featuredList', {
    name: 'Feature list',
    description: ''
  })

  featuredList.displayField('title')

  featuredList
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(false)

  featuredList
    .createField('items')
    .name('Items')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['feature'] }]
    })
}

export default migration
