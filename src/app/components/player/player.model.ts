import { identifierModuleUrl } from '@angular/compiler'
import { Team } from '../team/team.model';

export interface Player {
    id?: number
    name: string
    score: number
    teamName?: string
    status?: string
    position?: number
    guessRight?: number
    guessError?: number
}