import { Component, signal, inject, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './auth-modal.html',
  styleUrl: './auth-modal.css'
})
export class AuthModal {
  private authService = inject(AuthService);
  private fb = inject(FormBuilder);

  isOpen = input(false);
  mode = input<'login' | 'register'>('login');
  closeModal = output<void>();
  authSuccess = output<void>();

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  errorMessage = signal<string>('');
  isLoading = signal(false);

  constructor() {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.errorMessage.set('Por favor, completa todos los campos correctamente');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const { email, password } = this.loginForm.value;
    const result = this.authService.login(email, password);

    this.isLoading.set(false);

    if (result.success) {
      this.authSuccess.emit();
      this.closeModal.emit();
    } else {
      this.errorMessage.set(result.error || 'Error al iniciar sesión');
    }
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      this.errorMessage.set('Por favor, completa todos los campos correctamente');
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const { email, password, confirmPassword } = this.registerForm.value;
    const result = this.authService.register(email, password, confirmPassword);

    this.isLoading.set(false);

    if (result.success) {
      this.authSuccess.emit();
      this.closeModal.emit();
    } else {
      this.errorMessage.set(result.error || 'Error al registrarse');
    }
  }

  close(): void {
    this.closeModal.emit();
    this.errorMessage.set('');
  }

  getFieldError(form: FormGroup, fieldName: string): string {
    const field = form.get(fieldName);
    if (!field || !field.errors || !field.touched) {
      return '';
    }

    if (field.errors['required']) {
      return `${fieldName} es requerido`;
    }
    if (field.errors['email']) {
      return 'Email inválido';
    }
    if (field.errors['minlength']) {
      return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
    }
    return 'Campo inválido';
  }
}
