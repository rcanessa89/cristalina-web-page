import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const ctaBanner = migration.createContentType('ctaBanner', {
    name: 'CTA Banner',
    description: 'Call-to-action banner with title, subtitle, and button'
  })

  ctaBanner.displayField('title')

  ctaBanner
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  ctaBanner
    .createField('subtitle')
    .name('Subtitle')
    .type('Symbol')
    .localized(true)
    .required(false)

  ctaBanner
    .createField('cta')
    .name('CTA')
    .type('Link')
    .linkType('Entry')
    .localized(false)
    .required(false)
    .validations([{ linkContentType: ['link'] }])

  ctaBanner
    .createField('backgroundImage')
    .name('Background Image')
    .type('Link')
    .linkType('Asset')
    .localized(false)
    .required(false)
}

export default migration
