import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'groupByDate' })
export class GroupByPipe implements PipeTransform {
    transform(collection: Array<any>, property: string = 'date'): Array<any> {
        if (!collection) {
            return Array<any>
    }
        const gc = collection.reduce((previous, current) => {
            if (!previous[current[property]]) {
                previous[current[property]] = [];
            }
            current.events.forEach(x => previous[current[property]].push(x));
            return previous;
        }, {});
        return Object.keys(gc).map(date => ({ date: date, events: gc[date] }));
    }
}