export interface Todo{
    id: number,
    username: string,
    description: string,
    targetDate: string,
    done: boolean
}

export interface TodoData{
    description: string,
    targetDate: string,
    done: boolean
}