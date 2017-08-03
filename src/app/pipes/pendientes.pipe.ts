import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
  name: 'pendientes',
  pure: false
})
export class PendientesPipe implements PipeTransform {
  transform( listas:Lista[], completa:boolean = false): Lista[] {
    return listas.filter((lista) => lista.terminada === completa);
  }
}
