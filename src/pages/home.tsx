import { Link } from 'react-router-dom'
import { FormEvent, useContext, useState } from "react";
import contextLists from '../utils/context';
import { postList } from '../services/lists';

const Home = () => {
    const [lastListName, setLastListName] = useState('');

    const context = useContext(contextLists)


    let listsNames: string[] = []
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('listName') as string
        const item = data.get('item') as string
        listsNames = [...listsNames, listName]
        postList(listName, [item]).then((newList)=>{context.updateLists(newList)})
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
                        setLastListName(listsNames[listsNames.length - 1])
                        }
                    }>
                        <label>
                            List name
                            <input type="text" name="listName" />
                        </label>
                        <label>
                            New item list
                            <input type="text" name="item" />
                        </label>
                        <button type="submit">Save</button>
                    </form>
                    {listsNames ? 
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
            </section>
        </div>
    )
}

export default Home;