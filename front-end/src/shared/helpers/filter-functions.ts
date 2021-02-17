import { Person } from '../models/person';

export function filterPeopleByName(people: Array<Person>, searchValue: string) {
  var val = searchValue.toLowerCase();
  return people.filter(
    p => p.first_name.toLowerCase().includes(val) || p.last_name.toLowerCase().includes(val))
}