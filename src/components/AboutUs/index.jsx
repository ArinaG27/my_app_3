import React from 'react'
import s from './index.module.css'
import { about_us } from '../../data/about_us'
import AboutUsCard from '../AboutUsCard'

export default function AboutUs() {
  return (
    <section className={['wrapper', s.about_us_block].join(' ')}>
      <div className='aboutUs'>
        <p className='subheader'>О нас</p>
        <h2 className={s.company}>Компания <br/> ИвановПром</h2>
        <p className={s.lorem}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
      </div>

      <div className={s.achievements_cards}>
        {
          about_us.map(el => <AboutUsCard key={el.id} {...el} />)
        }
      </div>
    </section>
  )
}