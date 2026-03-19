import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const contact = migration.createContentType('contactSection', {
    name: 'Contact Section',
    description: 'Contact information and form section'
  })

  contact.displayField('title')

  contact
    .createField('title')
    .name('Title')
    .type('Symbol')
    .localized(true)
    .required(true)

  contact
    .createField('description')
    .name('Description')
    .type('Text')
    .localized(true)
    .required(false)

  contact
    .createField('email')
    .name('Email')
    .type('Symbol')
    .localized(false)
    .required(false)

  contact
    .createField('phone')
    .name('Phone')
    .type('Symbol')
    .localized(false)
    .required(false)

  contact
    .createField('whatsapp')
    .name('WhatsApp')
    .type('Symbol')
    .localized(false)
    .required(false)

  contact
    .createField('schedule')
    .name('Schedule')
    .type('Symbol')
    .localized(true)
    .required(false)
}

export default migration
