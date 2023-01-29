import { Link } from 'react-router-dom'
import { FormEvent, useContext, useState } from "react";
import contextLists from '../utils/context';

const Home = () => {
    const [lastListName, setLastListName] = useState('');

    const context = useContext(contextLists)


    let lists: string[] = []
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('listName') as string
        lists = [...lists, listName]
        console.log(lists[lists.length - 1])
    }

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
                <div className="form-container">
                    <h2>Create new list</h2>
                    <form onSubmit= {(e) => {
                        submitHandler(e)
                        setLastListName(lists[lists.length - 1])
                        }
                    }>
                        <label>
                            List name
                            <input type="text" name="listName" />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                    {lists ? 
                        <button>
                            {lastListName}
                        </button> 
                    : 
                        undefined
                    }
                </div>
                <Link to='/listsMenu'>
                    <button>lists menu</button>
                </Link>
                <div>{context.allMyLists.map((list)=> <p>{list.name}</p>)}</div>
            </section>
        </div>
    )
}

export default Home;