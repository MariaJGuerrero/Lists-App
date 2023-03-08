export const getLists = async () => {
    const response = await fetch('http://localhost:3001/lists')
    const body = await response.json()
    return body
}

export const postList = async (listname: string, items: string[] ) => {
    const response = await fetch(
        'http://localhost:3001/lists',
        {
            method: 'POST',
            body: JSON.stringify({
                name: listname,
                items: items
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    const content = await response.json();
    return content;
}



export const putList = async (listname?: string , items?: string[], idList?: string ) => {
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
                'Content-Type': 'application/json'
            },
        }
    )
    const content = await response.json();
    return content;
}


export const deleteList = async (idList: string | undefined ) => {
    const response = await fetch(
        'http://localhost:3001/lists',
        {
            method: 'DELETE',
            body: JSON.stringify({
                id: idList
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    const content = await response.json();
    return content;
}