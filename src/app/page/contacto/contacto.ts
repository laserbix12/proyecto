import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  name = '';
  email = '';
  message = '';

  touched = { name: false, email: false, message: false };

  private emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  get nameInvalid(): boolean {
    return this.touched.name && !this.name.trim();
  }

  get emailInvalid(): boolean {
    return this.touched.email && !this.emailPattern.test(this.email);
  }

  get messageInvalid(): boolean {
    return this.touched.message && !this.message.trim();
  }

  private get formInvalid(): boolean {
    return !this.name.trim() || !this.emailPattern.test(this.email) || !this.message.trim();
  }

  onBlur(field: 'name' | 'email' | 'message') {
    this.touched[field] = true;
  }

  private markAllTouched() {
    this.touched = { name: true, email: true, message: true };
  }

  onSubmit(): void {
    this.markAllTouched();

    if (this.formInvalid) {
      return;
    }

    const submission = {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
      timestamp: new Date().toISOString(),
    };

    const key = 'contacto-submissions';
    try {
      const prev = localStorage.getItem(key);
      const list = prev ? JSON.parse(prev) : [];
      list.push(submission);
      localStorage.setItem(key, JSON.stringify(list));
    } catch (e) {
      console.error('No se pudo guardar en localStorage', e);
    }

    // Descargar archivo con la información
    const content = `Nombre: ${submission.name}\nCorreo: ${submission.email}\nFecha: ${submission.timestamp}\n\nMensaje:\n${submission.message}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const now = new Date();
    const filename = `contacto-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}${String(now.getSeconds()).padStart(2, '0')}.txt`;
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    // Limpiar formulario
    this.name = '';
    this.email = '';
    this.message = '';
    this.touched = { name: false, email: false, message: false };
  }
}
