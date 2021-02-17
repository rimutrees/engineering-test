import { Person } from '../models/person';

export function compareByFirstName(a: Person, b: Person) {
    return a.first_name.localeCompare(b.first_name);
}

export function sortPeopleByFirstName(people: Array<Person>) {
  var copy = [...people]; 
  copy.sort(compareByFirstName);
  return copy;
}
  
  