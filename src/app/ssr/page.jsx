import axios from 'axios';

export default async function GetPage() {
    let series;

    try {
        const resp = await axios.get(`${process.env.API_URL_SERIES}?limit=50`, {
            headers: { 'x-api-key': process.env.API_KEY },
        });
        
        series = resp.data.data;
    } catch (error) {
        console.error(error);
    } 

    return (
        <main>
       <h2> Busca feito pelo servidor, com a api-key privada.</h2>
       <p>DevTools - Network : essa chamada nem aparece lá, pois ela acontece no servidor.</p>
       <p>Axios.get direto na API, e salva SessionStorage, mas rodando no servidor, a api-key nunca chega no navegador</p>
         <ul> 
            {series?.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
       </main>
    )
}