import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const page = migration.editContentType('page')

  page
    .createField('metaDescription')
    .name('Meta Description')
    .type('Symbol')
    .localized(true)
    .required(false)
    .validations([{ size: { min: 50, max: 160 } }])

  page
    .createField('ogImage')
    .name('OG Image')
    .type('Link')
    .linkType('Asset')
    .localized(false)
    .required(false)
    .validations([{ linkMimetypeGroup: ['image'] }])

  page.moveField('metaDescription').afterField('slug')
  page.moveField('ogImage').afterField('metaDescription')
}

export default migration
