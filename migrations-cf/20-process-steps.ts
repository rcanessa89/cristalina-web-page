import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const processSteps = migration.createContentType('processSteps', {
    name: 'Process Steps',
    description: 'A sequence of steps (e.g. filtration process)'
  })

  processSteps.displayField('title')

  processSteps
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  processSteps
    .createField('description')
    .name('Description')
    .type('Text')
    .localized(true)
    .required(false)

  processSteps
    .createField('items')
    .name('Steps')
    .type('Array')
    .localized(false)
    .required(true)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['processStep'] }]
    })
}

export default migration
