import React from 'react'
import styles from './styles.module.scss'
import GlobalContext from '../../../../../contexts/GlobalContext'

import styled from 'styled-components'

type CanvasProp = {
    bg_url: string | undefined
}
const CanvasHolder = styled.div<CanvasProp>`
    position: relative;
    width: 100%;
    height: 300px;
    background-image: url(${props => props.bg_url});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const TextInCanvasHolder = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;

    color: white;
    text-shadow: 2px 2px 4px #000000;
`

export default function MainCanvas() {
    //Context importation
    const CONTEXT_global = React.useContext(GlobalContext)
    
    //destructure
    const {store} = CONTEXT_global
    const {quote_data} = store || {};
    const {text,background_url} = quote_data || {}
    // ────────────────────────────────────────────────────────────────────────────────
    if(!text && !background_url) return null
    return (
        <div>
            <CanvasHolder bg_url={background_url}>
                <TextInCanvasHolder>
                    <p>{text}</p>
                </TextInCanvasHolder>
            </CanvasHolder>
        </div>
    )
}
