export type UpdateListsFunction = (list: List) => void 

export interface List {
    name: string,
    items: string[],
    _id: string
}