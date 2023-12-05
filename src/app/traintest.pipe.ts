import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traintest'
})
export class TraintestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
