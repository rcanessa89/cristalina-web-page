import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const stat = migration.createContentType('stat', {
    name: 'Stat',
    description: ''
  })

  stat.displayField('title')

  stat
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  stat
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(true)
    .required(true)

  stat
    .createField('description')
    .name('Description')
    .type('Symbol')
    .localized(true)
    .required(false)
}

export default migration
