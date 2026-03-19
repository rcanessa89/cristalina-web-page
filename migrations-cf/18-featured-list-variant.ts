import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const featuredList = migration.editContentType('featuredList')

  featuredList
    .createField('variant')
    .name('Variant')
    .type('Symbol')
    .localized(false)
    .required(false)
    .validations([{ in: ['default', 'compact'] }])

  featuredList.moveField('variant').afterField('title')
}

export default migration
