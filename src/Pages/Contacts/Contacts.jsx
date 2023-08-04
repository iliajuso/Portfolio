import React from 'react'
import { Form } from '../../components/Form/Form'
import { ContactsSidebar } from '../../components/ContactsSidebar/ContactsSidebar'
import s from './Contacts.module.sass'

export const Contacts = () => {
  return (
    <section className={s.wrapSection}>
      <div className={s.wrapSidebar}>
        <ContactsSidebar />
      </div>
      <Form/>
    </section>

  )
}
