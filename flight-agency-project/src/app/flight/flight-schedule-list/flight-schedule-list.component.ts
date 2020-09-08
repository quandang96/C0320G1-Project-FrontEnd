import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightBookingDetailComponent } from '../flight-booking-detail/flight-booking-detail.component';
import { OnewayDirective } from '../oneway.directive';
import { FlightOnewayScheduleComponent } from '../flight-oneway-schedule/flight-oneway-schedule.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FlightSearchDTO } from './../../shared/models/dto/flight-search-dto';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';
@Component({
  selector: 'app-flight-schedule-list',
  templateUrl: './flight-schedule-list.component.html',
  styleUrls: ['./flight-schedule-list.component.css']
})
export class FlightScheduleListComponent implements OnInit, AfterViewInit {

  @ViewChildren(OnewayDirective) entry: QueryList<OnewayDirective>

  searchForm: FormGroup;
  readonly MAX_PEOPLE = new Array(6);
  // selected flight
  private departureFlight: FlightSchedule;
  private departureComponent: ComponentRef<FlightOnewayScheduleComponent>;
  private arrivalFlight: FlightSchedule;
  private arrivalComponent: ComponentRef<FlightOnewayScheduleComponent>;
  private noOfWay: number;

  constructor(
    private resolver: ComponentFactoryResolver,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.noOfWay = 1;
    this.searchForm = this.fb.group({
      sortBy: ['default'],
      isRoundTrip: [''],
      departure: [''],
      arrival: [''],
      depDate: [new Date()],
      retDate: [{ value: new Date(), disabled: true }],
      babies: [0],
      children: [0],
      adults: [1]
    })
  }

  ngAfterViewInit() {
    // this.loadComponent()
    console.log(this.entry.toArray());
  }

  open() {
    this.modalService.open(FlightBookingDetailComponent, { size: 'lg' });
  }

  changeFlight() {

  }

  onSubmit() {
    const depSchedule: FlightSearchDTO = {
      sortBy: this.searchForm.get('sortBy').value,
      departure: this.searchForm.get('departure').value,
      arrival: this.searchForm.get('arrival').value,
      depDate: this.searchForm.get('depDate').value,
      babies: this.searchForm.get('babies').value,
      children: this.searchForm.get('children').value,
      adults: this.searchForm.get('adults').value
    }
    this.noOfWay = 1;
    this.loadComponent(this.departureComponent, 0, depSchedule, this.departureFlight);
    if (this.isRoundTrip.value == '1') {
      const retSchedule: FlightSearchDTO = {
        sortBy: this.searchForm.get('sortBy').value,
        departure: this.searchForm.get('arrival').value,
        arrival: this.searchForm.get('departure').value,
        depDate: this.searchForm.get('retDate').value,
        babies: this.searchForm.get('babies').value,
        children: this.searchForm.get('children').value,
        adults: this.searchForm.get('adults').value
      }
      this.noOfWay = 2;
      this.loadComponent(this.arrivalComponent, 1, retSchedule, this.arrivalFlight);
    }
  }

  loadComponent(componentRef: ComponentRef<FlightOnewayScheduleComponent>, index: number, flightSearch: FlightSearchDTO, selectedFlight: FlightSchedule) {
    // clear component
    this.entry.toArray()[index].viewContainer.clear();
    const resolver = this.resolver.resolveComponentFactory(FlightOnewayScheduleComponent);

    componentRef = this.entry.toArray()[index].viewContainer.createComponent(resolver);
    componentRef.instance.flightSearch = flightSearch;
    componentRef.changeDetectorRef.detectChanges();
    componentRef.instance.sel.subscribe((data: FlightSchedule) => {
      selectedFlight = data;
      console.log(selectedFlight);
    })
  }

  changeWay($event) {
    if ($event.target.value == '') {
      this.retDate.disable();
    } else {
      this.retDate.enable();
    }
  }

  get depDate() {
    return this.searchForm.get('depDate');
  }

  get retDate() {
    return this.searchForm.get('retDate');
  }

  get isRoundTrip() {
    return this.searchForm.get('isRoundTrip');
  }


}
