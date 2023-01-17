import { FormEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import List from "./list";

const Form = () => {
    const [lastListName, setLastListName] = useState('');

    let lists: string[] = []
    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement
        const data = new FormData(target);
        const listName = data.get('listName') as string
        lists = [...lists, listName]
        const itemInputValue = data.get('itemList')
        console.log(lists[lists.length - 1])
    }
    
    

    
    return(
        <div>
            <form onSubmit= {(e) => {
                submitHandler(e)
                setLastListName(lists[lists.length - 1])
                }
            }>
                <label>
                    List name
                    <input type="text" name="listName" />
                </label>
                <label>
                    Item list
                    <input type="text" name="itemList" />
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
    )
}


export default Form;