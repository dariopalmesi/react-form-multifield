import { useState } from 'react'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import animes from './data/anime.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [anime, setAnime] = useState(animes)
  const [newAnime, setNewAnime] = useState('')

  function addAnime(e) {
    e.preventDefault()
    console.log(e);
    setAnime([
      ...anime,
      newAnime
    ])
    setNewAnime('')
  }

  function handleTrashAnimeClick(e) {
    console.log(e.target);

    const animeTrashIndex = Number(e.target.getAttribute('data-index'));
    console.log(anime, animeTrashIndex);
    const newAnimes = anime.filter((anime, index) => index != animeTrashIndex)
    console.log(newAnimes);
    setAnime(newAnimes)
  }

  return (
    <>
      <AppHeader />
      <main className="bg-black">
        <div className="container bg-warning">
          <form onSubmit={addAnime} className="p-4">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" value={newAnime} onChange={e => setNewAnime(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Send</button>
            </div>
          </form>
          <ul className="list-group mt-4">
            {anime.map((anime, index) => (< li key={index} className="list-group-item d-flex justify-content-between" >
              {anime}
              <button onClick={handleTrashAnimeClick} data-index={index}><i className="bi bi-trash-fill"></i></button>
            </li>))}
          </ul>
        </div >
      </main >
      <AppFooter />
    </>
  )
}

export default App
