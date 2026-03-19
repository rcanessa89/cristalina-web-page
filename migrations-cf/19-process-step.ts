import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const step = migration.createContentType('processStep', {
    name: 'Process Step',
    description: 'A single step in a process (e.g. filtration stage)'
  })

  step.displayField('title')

  step
    .createField('stepNumber')
    .name('Step Number')
    .type('Integer')
    .localized(false)
    .required(true)

  step
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  step
    .createField('description')
    .name('Description')
    .type('Text')
    .localized(true)
    .required(false)

  step
    .createField('detail')
    .name('Detail')
    .type('Symbol')
    .localized(true)
    .required(false)

  step
    .createField('icon')
    .name('Icon')
    .type('Symbol')
    .localized(false)
    .required(false)
}

export default migration
