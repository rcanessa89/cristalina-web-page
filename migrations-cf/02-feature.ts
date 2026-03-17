import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const feature = migration.createContentType('feature', {
    name: 'Feature',
    description: ''
  })

  feature.displayField('title')

  feature
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  feature
    .createField('description')
    .name('Description')
    .type('Symbol')
    .localized(true)
    .required(false)

  feature
    .createField('icon')
    .name('Icon')
    .type('Symbol')
    .localized(false)
    .required(false)

  feature
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .localized(false)
    .required(false)
}

export default migration
