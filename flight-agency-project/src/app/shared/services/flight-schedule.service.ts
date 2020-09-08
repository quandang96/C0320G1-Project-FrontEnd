import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {

  branchImages: string[] = ['', 'assets/branches-image/vietjet.png', 'assets/branches-image/pacific.png', 'assets/branches-image/bamboo.png', 'assets/branches-image/vnairline.gif']

  constructor() { }
}
