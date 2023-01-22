import React from "react";

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

