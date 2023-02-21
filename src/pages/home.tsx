import { Link } from 'react-router-dom'
import { FormEvent } from "react";
import { postList } from '../services/lists';
import { List } from "../models/list";



const Home = ( { lists }: {lists: List[]}) => {

  
    let listsNames: string[] = []
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('listName') as string
        const item = data.get('item') as string
        listsNames = [...listsNames, listName]
        let listItems: string[] = []
        listItems = [...listItems, item]
        //postList(listName, listItems).then((newList)=>{context.addList(newList)})
    }

    return(
        <div>
            <header>
                <h2>LISTS APP</h2>
            </header>
            <section>
                <div>
                    {lists.map((list)=>
                         <Link to={`/singleListView/${list._id}`}>
                            <h2>{list.name}</h2>
                        </Link>
                    )}
                </div>
               
                <div className="form-container">
                <Link to={`/singleListView`}>
                   <button>
                    CREATE NEW LIST
                   </button>
                </Link>
                    <form className='form' onSubmit= {(e) => {
                        submitHandler(e)
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
                </div>
            </section>
        </div>
    )
}

export default Home;