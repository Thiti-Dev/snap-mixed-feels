import React from 'react'
import {Textarea,Row,Col,TextInput} from 'react-materialize'
import GlobalContext from '../../../../../contexts/GlobalContext';

//
// ─── API UTILS ────────────────────────────────────────────────────────────────────────
//
import { getQuotesByKeyword, QuotesArray } from '../../../../../apis/quote-garden';
import { getRandomBackgroundFromKeyword } from '../../../../../apis/unsplash';
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── UTILS ──────────────────────────────────────────────────────────────────────
//
import { randomNumberBetween } from '../../../../../utils/math_wrapped';
// ────────────────────────────────────────────────────────────────────────────────

export default function InputField() {

  //_Scoped hook
  const [inputText,setInputText] = React.useState('')
  // ────────────────────────────────────────────────────────────────────────────────


    //Context importation
  const CONTEXT_global = React.useContext(GlobalContext)
   // Event Handler
  function isPressedEnterOnInput(e:KeyboardEvent){
    if (e.key === 'Enter') {
      console.log(CONTEXT_global);
      fetchQuote(inputText)
    }
  }
  function onInputChange(e:React.ChangeEvent<HTMLInputElement>){
    const {value} = e.target
    setInputText(value)
  }

  function clearInputText(){
    setInputText('')
  }

  // API - RELATED
  async function fetchQuote(queries: string): Promise<void>{
    // Parallel
    const [quoute_data, recieved_bg_path] = await Promise.all([
      getQuotesByKeyword(queries),
      getRandomBackgroundFromKeyword(queries),
    ]);
    // ─────────────────────────────────────────────────────────────────

    // Random one from above
    const selected_quote = quoute_data![randomNumberBetween(0, quoute_data!.length)] as unknown as QuotesArray // type conversion
    // ─────────────────────────────────────────────────────────────────
    console.log(selected_quote)
    CONTEXT_global.setStore!('quote_data',{text:selected_quote.quoteText,background_url:recieved_bg_path});
    clearInputText() // clear input text after got the quote
  }
  // ────────────────────────────────────────────────────────────────────────────────


  // ────────────────────────────────────────────────────────────────────────────────
    return (
        <React.Fragment>
             <TextInput
              l={12}
              label="Tell me somethings that describe your feeling today"
              onChange={onInputChange}
              onKeyDown={isPressedEnterOnInput}
              value={inputText}
            />
        </React.Fragment>
    )
}
