import { Team } from "../team/team.model";

export interface Match {
    id?: number
    homeTeam: string
    awayTeam: string
    goalsHomeTeam: number
    goalsAwayTeam: number
}