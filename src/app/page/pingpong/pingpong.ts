import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// Utility method added for copying image URLs from product cards
// Kept minimal and safe for environments without navigator.clipboard
export function copyToClipboardFallback(text: string) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  } catch (_e) {
    // ignore
  }
}

@Component({
  selector: 'app-pingpong',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pingpong.html',
  styleUrl: './pingpong.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pingpong {
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
    } catch (_e) {
      // ignore
    }
  }
}

