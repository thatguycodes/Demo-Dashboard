import { Users } from 'angular-feather/icons';
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class DummyService {
  constructor() {}

  setUsers(): User[] {
  const users = [new User('1', 'Thabo', 'Dona', 'tb@gmail.com', 'user', true, '1232', '8781817288', null, null, null), 
  new User('2', 'Thabo', 'Source', 'ts@gmail.com', 'user', false, '2232', '87800007288', null, null, null),
  new User('3', 'Legwinya', 'Marapo', 'lm@gmail.com', 'user', true, '2242', '87800807288', null, null, null),
  new User('4', 'Kgotla', 'Diatla', 'kd@gmail.com', 'admin', false, '2262', '87800707288', null, null, null)
];
    return users;
  }
}
