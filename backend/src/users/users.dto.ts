export class UsersCreateDto {
  name: string;
  email: string;
  password: string;
}

export class UsersUpdateDto {
  name?: string;
  email?: string;
  password?: string;
}
