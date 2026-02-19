import { Injectable, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export interface User {
  id?: string;
  email: string;
  name: string;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly document = inject(DOCUMENT);
  private readonly currentUser = signal<User | null>(null);
  private readonly isAuthenticated = signal(false);

  currentUser$ = this.currentUser.asReadonly();
  isAuthenticated$ = this.isAuthenticated.asReadonly();

  constructor() {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const stored = localStorage.getItem('user');
        if (stored) {
          const user = JSON.parse(stored);
          this.currentUser.set(user);
          this.isAuthenticated.set(true);
        }
      }
    } catch (error) {
      console.error('Error loading user from storage:', error);
    }
  }

  login(email: string, password: string): { success: boolean; error?: string } {
    if (!email || !password) {
      return { success: false, error: 'Email y contraseña son requeridos' };
    }

    if (!this.isValidEmail(email)) {
      return { success: false, error: 'Email inválido' };
    }

    const user: User = {
      id: Math.random().toString(),
      email,
      name: email.split('@')[0],
      token: 'mock-token-' + Date.now()
    };

    this.currentUser.set(user);
    this.isAuthenticated.set(true);
    this.saveToStorage(user);

    return { success: true };
  }

  register(email: string, password: string, confirmPassword: string): { success: boolean; error?: string } {
    if (!email || !password || !confirmPassword) {
      return { success: false, error: 'Todos los campos son requeridos' };
    }

    if (!this.isValidEmail(email)) {
      return { success: false, error: 'Email inválido' };
    }

    if (password.length < 6) {
      return { success: false, error: 'La contraseña debe tener al menos 6 caracteres' };
    }

    if (password !== confirmPassword) {
      return { success: false, error: 'Las contraseñas no coinciden' };
    }

    const user: User = {
      id: Math.random().toString(),
      email,
      name: email.split('@')[0],
      token: 'mock-token-' + Date.now()
    };

    this.currentUser.set(user);
    this.isAuthenticated.set(true);
    this.saveToStorage(user);

    return { success: true };
  }

  logout(): void {
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
    this.removeFromStorage();
  }

  private saveToStorage(user: User): void {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
      }
    } catch (error) {
      console.error('Error saving user to storage:', error);
    }
  }

  private removeFromStorage(): void {
    try {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.removeItem('user');
      }
    } catch (error) {
      console.error('Error removing user from storage:', error);
    }
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
