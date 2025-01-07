import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./app.jsx"
import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <section className='container'>
    <App initialIsFollowing>
      Miguel Angel Duran
    </App>
    <App username='pheralb' initialIsFollowing={false}>
      Pablo Hernandez
    </App>
    <App name='NASA' username='nasa'></App>
  </section>
)

