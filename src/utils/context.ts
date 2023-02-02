import React from "react";
import { List, UpdateListsFunction } from "../models/list";


interface ContextLists {
    allMyLists: List[]
    updateLists: UpdateListsFunction
} 



const contextValue: ContextLists = {
    allMyLists: [],
    updateLists:  (newList: List) => {}
    
}


const contextLists = React.createContext(contextValue);

export default contextLists;

