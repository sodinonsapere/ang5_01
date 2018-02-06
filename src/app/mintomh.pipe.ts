import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mintomh'
})
export class MintomhPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    var hh = Math.floor(value / 60);
    var mm = Math.floor(value - hh * 60);
    return ('00'+hh).slice(-2) + ":" + ('00'+mm).slice(-2);

  }

}
