import { useState } from 'react'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import animes from './data/anime.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// const initialFormData = {
//   name: '',
//   image: '',
//   content: '',
//   category: '',
//   avaible: false
// }
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

  function handleFormSubmit(e) {
    console.log('Form sent');

  }
  return (
    <>
      <AppHeader />
      <main className="bg-black">
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Anime Blog</h1>
            <p className="col-md-8 fs-4">
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your liking.
            </p>
            <button className="btn btn-primary btn" type="button" popovertarget='off-canvas-form'>
              <i className="bi bi-plus"></i> add
            </button>
          </div>
        </div>
        <div id="off-canvas-form" popover='true' className='p-3'>
          <div className="d-flex justify-content-between align-items-center gap-5">
            <h3>Add a new anime</h3>
            <button className="btn btn-primary " type="button" popovertarget='off-canvas-form' popovertargetaction='hide'>
              <i className="bi bi-x"></i> Close
            </button>
          </div>
          <p>Description toanime</p>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                aria-describedby="namehelper"
                placeholder="Anime"
              />
              <small id="namehelper" className="form-text text-muted">Type Name of Anime</small>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input
                type="text"
                className="form-control"
                name="image"
                id="image"
                aria-describedby="imagehelper"
                placeholder="/images/1.jpg"
              />
              <small id="imagehelper" className="form-text text-muted">Type image path of Anime</small>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <input
                type="text"
                className="form-control"
                name="content"
                id="content"
                aria-describedby="contenthelper"
                placeholder="Content"
              />
              <small id="contenthelper" className="form-text text-muted">Type Content Anime</small>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">Anime</label>
              <select
                className="form-select form-select-lg"
                name="category"
                id="category"
              >
                <option>Select a category</option>
                <option defaultValue="">Shonen</option>
                <option defaultValue="">Isekai</option>
                <option defaultValue="">Seinen</option>
              </select>
            </div>
          </form>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="" />
            <label className="form-check-label" htmlFor="">Avaible</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>




        </div>




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
