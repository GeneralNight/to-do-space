import { Injectable } from '@angular/core';
import { UserRegisterInfo } from '@client/models';
import axios, { AxiosInstance } from 'axios';

@Injectable({ providedIn: 'root' })
export class APIService {
  public axiosInstance: AxiosInstance;

  constructor() {
    const url = 'http://localhost:8080';
    
    this.axiosInstance = axios.create({
      baseURL: url,
    });

    this.axiosInstance.interceptors.request.use(
      function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );
  }

  public async register(userInfo:UserRegisterInfo) {
    return await this.axiosInstance.post('/auth/register',userInfo)
  }

  public async login(loginInfo:Pick<UserRegisterInfo, 'email'|'password'>) {
    return await this.axiosInstance.post('/auth/login',loginInfo)
  }
}