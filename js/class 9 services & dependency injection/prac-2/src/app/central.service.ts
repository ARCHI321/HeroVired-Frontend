import { Injectable } from '@angular/core';
import { NewService } from './new.service';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  private name:string = 'archisman banik';

  constructor(private newService:NewService) { }

  getName():string{
     return this.name;
  }
}
