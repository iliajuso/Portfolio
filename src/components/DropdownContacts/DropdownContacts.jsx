import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'
import mailIcon from './assets/mail.png'
import phoneIcon from './assets/phone.png'
import s from './DropdownContacts.module.sass'

export const DropdownContacts = () => {
  return (
    <div className={s.wrap}>
      <LinkComponent
        image={mailIcon}
        href="mailto:iliajuso@gmail.com"
        text="iliajuso@gmail.com"
      />
      <LinkComponent
        image={phoneIcon}
        href="tel:+995579047290"
        text="+995579047290"
      />
      <LinkComponent
        image={phoneIcon}
        href="tel:+995599047290"
        text="+995599047290"
      />
    </div>
  )
}
