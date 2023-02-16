export interface TaskItem{
    id?: number
    taskName: string
    userId: string
    desc?: string
    status: number
    priorityId: number
    user?: User
}

export interface User{
    id: number
    email: string
    firstName: string
    lastName: string
}
