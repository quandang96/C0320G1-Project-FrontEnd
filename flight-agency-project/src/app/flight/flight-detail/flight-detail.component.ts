import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';
import { FlightScheduleService } from 'src/app/shared/services/flight-schedule.service';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  @Input() flightDetail: FlightSchedule;
  branchImages: string[];
  constructor(
    private flightScheduleService: FlightScheduleService,
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.branchImages = this.flightScheduleService.branchImages;
  }

}
