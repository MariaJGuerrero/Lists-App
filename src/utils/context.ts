import React from "react";
import List from "../pages/list";

interface ContextLists {
    allMyLists: List[]
} 
interface List {
    name: string,
    items: string[]
}

const contextValue: ContextLists = {
    allMyLists: []
}


const contextLists = React.createContext(contextValue);

export default contextLists;

