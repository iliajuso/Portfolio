import React from 'react'
import LinkComponent from '../LinkComponent/LinkComponent'
import linkIcon from './assets/link.png'
import s from './DropdownLinks.module.sass'

export const DropdownLinks = () => {
  return (
    <div className={s.wrap}>
      <LinkComponent
        image={linkIcon}
        href="https://t.me/iliajuso"
        text="Telegram"
      />
      <LinkComponent
        image={linkIcon}
        href="https://wa.me/995579047290"
        text="WhatsApp"
      />
      <LinkComponent
        image={linkIcon}
        href="https://www.instagram.com/iliajusoevi/"
        text="Instagram"
      />
    </div>
  )
}
