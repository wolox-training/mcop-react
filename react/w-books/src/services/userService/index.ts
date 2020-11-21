import api from '../../config/api';
import { User } from '../../interfaces/user.interface';

export const signUp = (userData: User) => api.post('/users', userData);
export const login = (userData: User) => api.post('/users/sign_in', userData);
