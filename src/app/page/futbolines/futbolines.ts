import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copyToClipboardFallback } from '../pingpong/pingpong';

@Component({
  selector: 'app-futbolines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './futbolines.html',
  styleUrl: './futbolines.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Futbolines {
  // image URL bindings for each product card
  img1?: string;
  img2?: string;
  img3?: string;

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
