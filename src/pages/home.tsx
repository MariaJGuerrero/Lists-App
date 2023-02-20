import { Link } from 'react-router-dom'
import { FormEvent, useContext } from "react";
import contextLists from '../utils/context';
import { postList } from '../services/lists';



const Home = () => {

    const context = useContext(contextLists)
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
        postList(listName, listItems).then((newList)=>{context.updateLists(newList)})
    }

    
    let idItems: number[] = [0]
    const addInput = () => {
        idItems.map((id)=> {
            let newId = id + 1;
            idItems= [...idItems, newId];
            let idStr = newId.toString();
            <input type='text' name= {idStr}/>
            console.log('id convertido a string', idStr)
        })
        console.log('id de cada item', idItems)
        
    }

    return(
        <div>
            <header>
                <h2>LISTS APP</h2>
            </header>
            <section>
                <div>
                    {context.allMyLists.map((list)=>
                         <Link to={`/singleListView/${list._id}`}>
                            <h2>{list.name}</h2>
                        </Link>
                    )}
                </div>
               
                <div className="form-container">
                    <h2>Create new list</h2>
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
                            <button onClick={addInput}>+</button>
                        </label>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Home;