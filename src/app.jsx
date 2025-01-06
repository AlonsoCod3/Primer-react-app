import './app.css'

export function App ()  {
    return (
        <article className='twitterCard'>
            <header>
                <img src="https://unavatar.io/midudev" alt="midudev" />
                <div>
                    <strong>Miguel</strong>
                    <span>@midudev</span>
                </div>
            </header>
            <aside>
                <button>
                    Seguir
                </button>
            </aside>
        </article>
    )
}