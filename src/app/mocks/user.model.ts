export type Address = string;
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    address_id: Address;
  }