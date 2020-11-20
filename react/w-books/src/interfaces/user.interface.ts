import { string } from "prop-types";

export interface User {
  email: string;
  password: string;
  password_confirmation: string;
  first_name: string;
  last_name: string;
  locale: string;
}
