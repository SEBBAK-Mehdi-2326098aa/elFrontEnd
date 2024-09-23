export class UserModel {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  civility: string;
  level: number;

  constructor(id: number, name: string, lastname: string, email: string, password: string, civility: string, level: number) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.civility = civility;
    this.level = level;
  }
}
