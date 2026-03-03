import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(email: string, password: string): { success: boolean; error?: string } {
    // Simulación de lógica de login
    if (email && password) {
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next({ email });
      return { success: true };
    }
    return { success: false, error: 'Credenciales inválidas' };
  }

  register(email: string, password: string, confirmPassword?: string): { success: boolean; error?: string } {
    // Simulación de registro reutilizando la lógica de login
    return this.login(email, password);
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }
}
