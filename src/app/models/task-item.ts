import { Priority } from "./priority"
import { User } from "./user"

export interface TaskItem{
    id?: number
    taskName: string
    userId: string
    user?: User
    desc?: string
    status: number
    priorityId: number
    priority?: Priority
}
