import axios from 'axios'

export interface QuotesArray{
    _id:string;
    quoteText:string;
    quiteAuthor:string;
}

interface Returntype{
    statusCode:number;
    mesage:string;
    totalPages:number;
    currentPage:number;
    quote: QuotesArray[];
}

//
// ─── UTILS ──────────────────────────────────────────────────────────────────────
//
export async function getQuotesByKeyword(keyword:string): Promise<Returntype[] | undefined>  {
    try {
        const _response = await axios.get<{quotes: Returntype[]}>(`https://quote-garden.herokuapp.com/api/v2/quotes/${keyword}`)
        return _response.data.quotes as Returntype[]
    } catch (error) {
        console.log(error)
    }
}
// ────────────────────────────────────────────────────────────────────────────────
