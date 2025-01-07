import './app.css'
import { useState } from 'react'

export function App ({username='midudev', children})  {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasssName = isFollowing ? 'tw-card-button is-following' : 'tw-card-button'

    const handlerClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='tw-card'>
            <header className='tw-card-header'>
                <img src={`https://unavatar.io/${username}`} alt="midudev" />
                <div className='tw-card-name'>
                    <strong>{children}</strong>
                    <span className='tw-card-username'>@{username} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClasssName} onClick={handlerClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}