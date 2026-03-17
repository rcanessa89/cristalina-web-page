import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const logoBar = migration.createContentType('logoBar', {
    name: 'Logo bar',
    description: ''
  })

  logoBar.displayField('title')

  logoBar
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(false)

  logoBar
    .createField('logos')
    .name('logos')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Asset',
      validations: [{ linkMimetypeGroup: ['image'] }]
    })
}

export default migration
