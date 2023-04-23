import { Roles } from ".";

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  rol: Roles;
}
