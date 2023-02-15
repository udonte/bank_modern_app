import React from 'react'
import { clients } from '../constants'
import styles from '../styles'

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <div key={index} className={`flex-1 ${styles.flexCenter} sm:win-w-[192px] min-w-[120px]`}>
        <img src={client.logo} alt={client.id} className='sm:w-[192px] w-[100px] object-contain hover:opacity-100 hover:bg-white hover:py-2 hover:px-2 hover:rounded-[5px] transition ease-in-out duration-150' />
        </div>
      ))}
    </div>
  </section>
  )

export default Clients