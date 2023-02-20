import { Priority } from "./priority"
import { User } from "./user"
import { Status } from "./status"

export interface TaskItem{
    id?: number
    taskName: string
    userId: string
    user?: User
    desc?: string
    statusId: number
    status?: Status
    priorityId: number
    priority?: Priority
}
