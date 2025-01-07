import { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./app.jsx"
import './index.css'

const root = createRoot(document.getElementById('root'))
const users = [
  {
    username: 'sparky',
    name: 'Spark El Rayo',
    isFollowing: false
  },
  {
    username: 'midudev',
    name: 'Miguel Angel',
    isFollowing: true
  },
  {
    username: 'pheralb',
    name: 'Pablo Hernadez',
    isFollowing: false
  },
]

root.render(
  <section className='container'>
    { 
      users.map(user => {
        const { username, name, isFollowing } = user
        return (
          <App
            key={username}
            username={username}
            initialIsFollowing={isFollowing} >
            {name}
          </App>

        )
      })
    }
    {/* <App initialIsFollowing>
      Miguel Angel Duran
    </App> */}
  </section>
)

