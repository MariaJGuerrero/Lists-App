import React from "react";

interface ContextLists {
    allMyLists: List[], 
    updateAllMyLists: (newList: List[]) => void
} 
interface List {
    name: string,
    items: string[]
}

const contextValue: ContextLists = {
    allMyLists: [],
    updateAllMyLists: () => {}
}
const contextLists = React.createContext(contextValue);

export default contextLists;

