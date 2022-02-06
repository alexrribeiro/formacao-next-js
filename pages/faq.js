// faq.js
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

export async function getStaticProps() {
    console.log('Em modo DEV, sempre roda! A cada acesso')
    console.log('Roda SOMENTE em build time')
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) => {
            return respostaDoServidor.json();
        })
        .then((resposta) => {
            return resposta;
        });

    return {
      props: {
          qualquercoisa: 'que eu passar aqui',
          faq,
      },
    };
}  

// // import { useEffect, useState } from 'react'
// import Head from 'next/head';
// import Link from '../src/components/Link'
// import PageTitle from '../src/components/Title';

// // export async function getServerSideProps() {
// // console.log('Em modo dev roda a cada acesso');
// //   console.log('Rodando em mais um acesso recebido!');
//   export async function getStaticProps() {
//     console.log('Em modo dev roda a cada acesso recebido.');
//     console.log('Rodando apenas durante o build!');
//     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
//       const faq = await fetch(FAQ_API_URL)
//         .then((respostaDoServidor) => {
//           return respostaDoServidor.json();
//         })
//         .then((resposta) => {
//           return resposta;
//       }
//     );

//   return {
//     props: {
//       qualquercoisa: 'vai ser passada',
//       faq,
//     }, 
//   };
// }

// export default function FAQPage({ faq }) {
//   // console.log(faq);
//   // const [faq, setFaq] = useState([]);
//   // useEffect(() => {
    
//   // }, []);

//   return (
//     <div>
//       <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//       <h1>Alura Cases - Página de Perguntas Frequentes</h1>
//       <Link href="/" passHref>
//         Ir para a Home
//       </Link>
//       <ul>
//         {faq.map(({answer, question}) => (
//           <li key={question}>
//             <article>
//               <h2>{question}</h2>
//               <p>{answer}</p>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
