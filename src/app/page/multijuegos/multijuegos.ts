import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { copyToClipboardFallback } from '../pingpong/pingpong';

@Component({
  selector: 'app-multijuegos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './multijuegos.html',
  styleUrl: './multijuegos.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Multijuegos {
  // image URL bindings for each product card
  img1?: string;
  img2?: string;
  img3?: string;
  img4?: string;
  img5?: string;
  img6?: string;
  img7?: string;

  copy(text: string) {
    if (!text) return;
    try {
      if (navigator && (navigator as any).clipboard && (navigator as any).clipboard.writeText) {
        (navigator as any).clipboard.writeText(text).catch(() => copyToClipboardFallback(text));
      } else {
        copyToClipboardFallback(text);
      }
    } catch (_e) {}
  }
}
