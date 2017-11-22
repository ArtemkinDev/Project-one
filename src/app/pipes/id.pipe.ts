import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appId'
})

export class IdPipe implements PipeTransform {
  transform(value: number, ...args: any[]): any {
    return value % 100000;
  }

};
