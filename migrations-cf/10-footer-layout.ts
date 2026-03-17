import type Migration from 'contentful-migration'

const migration = function (migration: Migration) {
  const footer = migration.createContentType('footerLayout', {
    name: 'Layout footer',
    description: ''
  })

  footer.displayField('companyName')

  footer
    .createField('companyName')
    .name('Company Name')
    .type('Symbol')
    .localized(true)
    .required(true)

  footer
    .createField('description')
    .name('Description')
    .type('Symbol')
    .localized(true)
    .required(false)

  footer
    .createField('links')
    .name('Links')
    .type('Array')
    .localized(false)
    .required(false)
    .items({
      type: 'Link',
      linkType: 'Entry',
      validations: [{ linkContentType: ['link'] }]
    })

  footer
    .createField('email')
    .name('Email')
    .type('Symbol')
    .localized(false)
    .required(false)

  footer
    .createField('phone')
    .name('Phone')
    .type('Symbol')
    .localized(false)
    .required(false)

  footer
    .createField('address')
    .name('Address')
    .type('Symbol')
    .localized(true)
    .required(false)

  footer
    .createField('facebook')
    .name('Facebook')
    .type('Symbol')
    .localized(false)
    .required(false)

  footer
    .createField('instagram')
    .name('Instagram')
    .type('Symbol')
    .localized(false)
    .required(false)

  footer
    .createField('whatsapp')
    .name('WhatsApp')
    .type('Symbol')
    .localized(false)
    .required(false)
}

export default migration
