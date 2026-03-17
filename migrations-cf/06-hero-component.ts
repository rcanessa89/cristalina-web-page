import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const hero = migration.createContentType('heroComponent', {
    name: 'Hero',
    description: ''
  })

  hero.displayField('title')

  hero
    .createField('variant')
    .name('Variant')
    .type('Symbol')
    .localized(false)
    .required(true)

  hero
    .createField('title')
    .name('Title')
    .type('Text')
    .localized(true)
    .required(false)

  hero
    .createField('subtitle')
    .name('Subtitle')
    .type('Text')
    .localized(true)
    .required(false)

  hero
    .createField('cta')
    .name('Cta')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .validations([{ linkContentType: ['link'] }])

  hero
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .localized(false)
    .required(false)

  hero
    .createField('imageReverse')
    .name('Image reverse')
    .type('Boolean')
    .localized(false)
    .required(false)

  hero
    .createField('backgroundImage')
    .name('Background image')
    .type('Array')
    .localized(false)
    .required(false)
    .items({
      type: 'Link',
      linkType: 'Asset',
      validations: [{ linkMimetypeGroup: ['image'] }]
    })
}

export default migration
