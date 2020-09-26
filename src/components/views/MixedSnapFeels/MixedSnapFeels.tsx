import React from 'react'
import {Textarea,Row,Col,TextInput} from 'react-materialize'
import styles from './styles.module.scss'

import GlobalContext from '../../../contexts/GlobalContext'
import {InputField,MainCanvas} from './wrappers'

export default function MixedSnapFeels() {
  //Context importation
  const CONTEXT_global = React.useContext(GlobalContext)
  // ────────────────────────────────────────────────────────────────────────────────

  React.useEffect(()=> {
      console.log("[MainComponent]: Mounted")
  })




  return (
    <div className={styles.container}>
      <div className={styles.text_area_holder}>
          <InputField/>
          <MainCanvas/>
      </div>
    </div>
  )
}
