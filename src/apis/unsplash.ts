import axios from 'axios'

export async function getRandomBackgroundFromKeyword(keyword:string): Promise<string | undefined>  {
    try {
        const _response = await axios.get(`https://source.unsplash.com/1600x900/?nature,${keyword}`)
        console.log(_response.request.responseURL)
        return _response.request.responseURL;
    } catch (error) {
        console.log(error)
    }
}