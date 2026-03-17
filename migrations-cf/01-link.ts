import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const link = migration.createContentType('link', {
    name: 'Link',
    description: ''
  })

  link.displayField('linkText')

  link
    .createField('linkText')
    .name('Link text')
    .type('Symbol')
    .localized(true)
    .required(true)

  link
    .createField('url')
    .name('Url')
    .type('Symbol')
    .localized(true)
    .required(false)

  link
    .createField('children')
    .name('Children')
    .type('Array')
    .localized(false)
    .required(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['link'] }]
    })
}

export default migration
