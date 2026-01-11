import { useState } from 'react'
import createUrlShort from './data/createShortUrl';

function App() {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');

  const shorten = async () => {
    if (!link.trim()) return;
    console.log(JSON.stringify({ url: link }));
    const short = await createUrlShort(link);
    setShortLink(short);
  }


  return (
    <>
      <main className='bg-gray-200 min-h-screen flex justify-center items-center'>
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full flex justify-center items-center flex-col">
          <h1 className='text-3xl'>Encurtador de Links</h1>
          <div className='border-gray-300 w-[90%] mt-5 mb-5'></div>
          <input
            type="text"
            name=""
            id=""
            className="border-2 rounded-md w-[90%] p-2"
            placeholder="Insira o Link aqui"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <button className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={shorten}>
            Encurtar
          </button>

          {shortLink && (
            <a
              href={`https://url-shortener-back-indol.vercel.app/${shortLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline mt-5"
            >
              {shortLink}
            </a>
          )}

        </div>
      </main>
    </>
  )
}

export default App