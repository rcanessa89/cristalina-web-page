import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const stats = migration.createContentType('stats', {
    name: 'Stats',
    description: ''
  })

  stats.displayField('title')

  stats
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  stats
    .createField('items')
    .name('Items')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['stat'] }]
    })
}

export default migration
