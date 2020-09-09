import { differenceInMinutes } from 'date-fns'
export function checkInterval(laterDate: string, earlierDate: string, minInterval: number): boolean {
    let hours = differenceInMinutes(
        new Date(laterDate),
        new Date(earlierDate)
    )
    return hours >= minInterval ? true : false;
}