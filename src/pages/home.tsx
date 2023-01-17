import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <header>
                <h2>LISTS APP</h2>
            </header>
            <section>
                <div>
                    <p>how to use?</p>
                    <p>functional app description..... </p>
                </div>
                <Link to='/form'>
                <button>create new list</button>
                </Link>
                <Link to='/list'>
                    <button>lists menu</button>
                </Link>
            </section>
        </div>
    )
}

export default Home;