import React from 'react'
import styles from './Card.module.css'

const Card=({card})=> {
  return (

    <div className={card.id %2===0 ? styles.cardbox : styles.cardbox1}>
      <div className={styles.leftbox}>
        <div className={styles.date}>{card.date}</div>
        <div className={styles.extra}><p>{card.extra}</p></div>
        <div className={styles.headword}>{card.heading}</div>
        <div className={styles.sub_head}>{card.subheading}</div>
        <div className={styles.devices}>{card.devices}</div>

      

      </div>
      <div className={styles.rightbox}>
        <div className={styles.top}><img src={card.logo} alt="Logo Apple" /></div>
        <div className={styles.bottom}>{card.icon}</div>
      </div>
     
       
        </div>
  )
}

export default Card

