import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const processSteps = migration.editContentType('processSteps')

  processSteps
    .createField('stepLabel')
    .name('Step Label')
    .type('Symbol')
    .localized(true)
    .required(false)

  processSteps.moveField('stepLabel').afterField('description')
}

export default migration
