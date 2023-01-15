import Form from "./form";


const List = ({ allLists }: {allLists: string[]}) => {
    return(
        <div>
            <h1>{allLists[allLists.length - 1]}</h1>

        </div>
    )
}

export default List;