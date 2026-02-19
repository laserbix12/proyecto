import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { copyToClipboardFallback } from '../pingpong/pingpong';

@Component({
  selector: 'app-billares',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './billares.html',
  styleUrl: './billares.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Billares {
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
