import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const nav = migration.createContentType('layoutNavigation', {
    name: 'Layout navigation',
    description: ''
  })

  nav
    .createField('links')
    .name('Links')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['link'] }]
    })
}

export default migration
