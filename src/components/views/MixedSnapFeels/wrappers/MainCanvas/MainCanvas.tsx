import React from 'react'
import styles from './styles.module.scss'
import GlobalContext from '../../../../../contexts/GlobalContext'

import {Button} from 'react-materialize'

import styled from 'styled-components'

//
// ─── LOADING SPINNER ────────────────────────────────────────────────────────────
//    
import { css } from "@emotion/core";
import {RingLoader} from "react-spinners";
// ────────────────────────────────────────────────────────────────────────────────

import html2canvas from 'html2canvas';

//
// ─── UTIL ───────────────────────────────────────────────────────────────────────
//
import { downloadAs } from '../../../../../utils/downloaderAs'
// ────────────────────────────────────────────────────────────────────────────────

const override_loader_spinner_style = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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
    const CanvasRef = React.useRef(null);
    
    function madeASnapshot(){
        if(!CanvasRef) return
        //@desc
        // useCORS needed to be true , if want to rendering the image that isn't came from the host itself
        // capture on the specified ref that has been gotten by useRef -> [If CanvasRef cannot manage to get itself a reference it will be screenshottig the empty div instead]
        let canvas = CanvasRef.current as unknown as HTMLCanvasElement // type conversion
        html2canvas(canvas || document.createElement("div"),{useCORS:true}).then(function(canvas) {
            // Convert canvas to png
            /*
            //@desc => old school way -> [avoiding this because the name of the file that gonna be downloaded cannot set the name]
                window.location = canvas.toDataURL("image/png")
                window.location.href = image;
            */
            var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"); //Convert image to 'octet-stream' -> for a download // -> Later might be using jsPDF
            downloadAs(image,'myQuote.png') // -> calling utility to use axios and download the octet-stream then setting the name as the given args
        });
    }

    //destructure
    const {store} = CONTEXT_global
    const {quote_data,is_loading} = store || {};
    const {text,background_url} = quote_data || {}
    // ────────────────────────────────────────────────────────────────────────────────
    if(is_loading) return <RingLoader css={override_loader_spinner_style}/>
    if(!text && !background_url) return null
    return (
        <div>
            <CanvasHolder ref={CanvasRef} bg_url={background_url}>
                <TextInCanvasHolder>
                    <p>{text}</p>
                </TextInCanvasHolder>
            </CanvasHolder>

            <Button
                className={styles.export_button}
                node="b"
                small
                waves="red"
                onClick={madeASnapshot}
            >
                Export as PNG
            </Button>
            <Button
                className={styles.share_button}
                node="c"
                small
                waves="amber"
            >
                Share on socials media
            </Button>
        </div>
    )
}
