import { NavigateFunction } from "react-router-dom"

export const getLists = async ( ) => {
    const token = localStorage.getItem('token')
    const response = await fetch('http://localhost:3001/lists', 
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
    if(response.status === 401){
        throw Error('unauthoraized')
    }
    const body = await response.json()
    return body
}

export const postList = async (listname: string, items: string[] ) => {
    const token = localStorage.getItem('token')
    const response = await fetch(
        'http://localhost:3001/lists',
        {
            method: 'POST',
            body: JSON.stringify({
                name: listname,
                items: items
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        }
    )
    const content = await response.json();
    return content;
}



export const putList = async (listname?: string , items?: string[], idList?: string ) => {
    const token = localStorage.getItem('token')
    if(idList === undefined){
        return alert( 'id is missing')
    } 

    const response = await fetch(
        'http://localhost:3001/lists',
        {
            method: 'PUT',
            body: JSON.stringify({
                name: listname,
                items,
                id: idList
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        }
    )
    const content = await response.json();
    return content;
}


export const deleteList = async (idList: string | undefined ) => {
    const token = localStorage.getItem('token')
    const response = await fetch(
        'http://localhost:3001/lists',
        {
            method: 'DELETE',
            body: JSON.stringify({
                id: idList
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
        }
    )
    const content = await response.json();
    return content;
}

export const getListById = async (idList: string) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`http://localhost:3001/lists/list/${idList}`,
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    )
    const body = await response.json()
    return body
}

