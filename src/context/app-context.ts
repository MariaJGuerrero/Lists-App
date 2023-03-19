import React from "react";
import { List, UpdateListsFunction } from "../models/list";

export const appContext = React.createContext<
{
    lists: List[], 
    addList: UpdateListsFunction, 
    modifyList: UpdateListsFunction, 
    removeList: Function
    setLists: Function
}>(
    {
        lists: [],
        addList: ()=>{},
        modifyList: ()=>{},
        removeList: ()=>{},
        setLists: ()=>{}
    }
)