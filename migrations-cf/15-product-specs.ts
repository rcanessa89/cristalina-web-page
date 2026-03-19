import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const productSpecs = migration.createContentType('productSpecs', {
    name: 'Product Specs',
    description: 'Technical specifications section with optional product image'
  })

  productSpecs.displayField('title')

  productSpecs
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(false)

  productSpecs
    .createField('description')
    .name('Description')
    .type('Symbol')
    .localized(true)
    .required(false)

  productSpecs
    .createField('image')
    .name('Image')
    .type('Link')
    .linkType('Asset')
    .localized(false)
    .required(false)

  productSpecs
    .createField('items')
    .name('Items')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['spec'] }]
    })
}

export default migration
