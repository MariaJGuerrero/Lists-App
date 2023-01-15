import Form from './form';

const Home = () => {
    return(
        <div>
            <header>
                <h2>list App</h2>
            </header>
            <section>
                <div>
                    <p>how to use?</p>
                    <p>functional app description..... </p>
                </div>
                <button /*onClick={ () => .<Form /> }*/>create new list</button>
                <button>lists menu</button>
            </section>
            <Form />
        </div>
    )
}

export default Home;