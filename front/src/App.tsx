import { useState } from 'react'
import createUrlShort from './data/createShortUrl';

function App() {
  const [link, setLink] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const shorten = async () => {
    if (!link.trim()) return;
    setLoading(true);
    setShortLink('');
    try {
      const short = await createUrlShort(link);
      setShortLink(short);
    } finally {
      setLoading(false);
    }
  }

  const copyShort = async () => {
    if (!shortLink) return;
    const full = `https://url-shortener-back-indol.vercel.app/${shortLink}`;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(full);
      } else {
        const input = document.createElement('input');
        input.value = full;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopyStatus('Copiado!');
      setTimeout(() => setCopyStatus(''), 2000);
    } catch (err) {
      console.error('Erro ao copiar', err);
      setCopyStatus('Erro ao copiar');
      setTimeout(() => setCopyStatus(''), 2000);
    }
  }

  return (
    <>
      <main className='bg-gray-200 min-h-screen flex justify-center items-center p-4'>
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 max-w-md w-full flex flex-col items-center">
          <h1 className='text-3xl'>Encurtador de Links</h1>
          <div className='border-gray-300 w-full sm:w-[90%] mt-5 mb-5'></div>
          <input
            type="text"
            name=""
            id=""
            className="border-2 rounded-md w-full sm:w-[90%] p-2"
            placeholder="Insira o Link aqui"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 w-full sm:w-[90%] mt-4'>
            <button
              className={`w-full ${loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
              onClick={shorten}
              disabled={loading}
            >
              {loading ? 'Encurtando...' : 'Encurtar'}
            </button>
            <button
              className={`w-full ${!shortLink ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-700'} text-white font-bold py-2 px-4 rounded`}
              onClick={copyShort}
              disabled={!shortLink}
            >
              Copiar URL curta
            </button>
          </div>


          {shortLink && (
            <>
              <a
                href={`https://url-shortener-back-indol.vercel.app/${shortLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-5 break-words"
              >
                Acessar Url
              </a>
              {copyStatus && (
                <div className="mt-2 text-sm text-gray-700 text-center">{copyStatus}</div>
              )}
            </>
          )}

        </div>
      </main>
    </>
  )
}

export default App