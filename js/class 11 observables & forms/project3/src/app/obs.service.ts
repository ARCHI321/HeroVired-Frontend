import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObsService {
  // emitEvent:EventEmitter<any> = new EventEmitter();
  emitEvent = new Subject;
  constructor() { }
}
