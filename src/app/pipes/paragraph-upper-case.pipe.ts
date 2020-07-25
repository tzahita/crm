import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphUpperCase',
})
export class ParagraphUpperCasePipe implements PipeTransform {
  transform(value: string): string {
    const trimmed = value.trim();

    return trimmed.charAt(0).toUpperCase() + value.slice(1);
  }
}
