import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const card = migration.createContentType('card', {
    name: 'Card',
    description: ''
  })

  card.displayField('title')

  card
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  card
    .createField('description')
    .name('Description')
    .type('Symbol')
    .localized(true)
    .required(false)

  card
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .localized(false)
    .required(true)

  card
    .createField('cta')
    .name('Call to action')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .validations([{ linkContentType: ['link'] }])
}

export default migration
