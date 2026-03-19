import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const spec = migration.createContentType('spec', {
    name: 'Spec',
    description: 'A single technical specification (label + value pair)'
  })

  spec.displayField('label')

  spec
    .createField('label')
    .name('Label')
    .type('Symbol')
    .localized(true)
    .required(true)

  spec
    .createField('value')
    .name('Value')
    .type('Symbol')
    .localized(true)
    .required(true)

  spec
    .createField('icon')
    .name('Icon')
    .type('Symbol')
    .localized(false)
    .required(false)
}

export default migration
