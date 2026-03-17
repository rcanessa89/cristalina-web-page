import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const cardList = migration.createContentType('cardList', {
    name: 'Card list',
    description: ''
  })

  cardList.displayField('title')

  cardList
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(false)

  cardList
    .createField('items')
    .name('Items')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['card'] }]
    })
}

export default migration
