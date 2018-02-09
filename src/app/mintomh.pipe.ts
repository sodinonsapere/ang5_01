import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mintomh'
})
export class MintomhPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var hh = Math.floor(Math.abs(value) / 60);
    var mm = Math.floor(Math.abs(value) - hh * 60);
    var ss = (Math.sign(value) === -1) ? '-' : '';;
    return ss+('00'+hh).slice(-2) + ":" + ('00'+mm).slice(-2);

  }

}
