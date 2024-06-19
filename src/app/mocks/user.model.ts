export type Address = string;
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    is_admin: boolean;
    address_id: Address;
  }