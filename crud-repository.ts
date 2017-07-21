import { Person } from './person';

export class CrudRepository<T extends Person> {
    create(item: T): void {
        // send to the API
    }
    findAll(): T[] {
        // Retreive with API
        return [];
    }
}