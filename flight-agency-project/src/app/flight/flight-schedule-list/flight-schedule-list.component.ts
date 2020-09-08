import { Component, OnInit, ViewChildren, QueryList, AfterViewInit, ComponentFactoryResolver } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightBookingDetailComponent } from '../flight-booking-detail/flight-booking-detail.component';
import { OnewayDirective } from '../oneway.directive';
import { FlightOnewayScheduleComponent } from '../flight-oneway-schedule/flight-oneway-schedule.component';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-flight-schedule-list',
  templateUrl: './flight-schedule-list.component.html',
  styleUrls: ['./flight-schedule-list.component.css']
})
export class FlightScheduleListComponent implements OnInit, AfterViewInit {

  @ViewChildren(OnewayDirective) entry: QueryList<OnewayDirective>

  searchForm: FormGroup;
  readonly MAX_PEOPLE = [0, 1, 2, 3, 4, 5];

  constructor(
    private resolver: ComponentFactoryResolver,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      sortBy: ['default'],
      isRoundTrip: ['0'],
      departure: [''],
      arrival: [''],
      fromDate: [new Date()],
      toDate: [{ value: new Date(), disabled: true }],
      babies: [0],
      children: [0],
      adults: [1]
    })
  }

  ngAfterViewInit() {
    this.loadComponent()
    console.log(this.entry.toArray());
  }

  open() {
    this.modalService.open(FlightBookingDetailComponent, { size: 'lg' });
  }

  changeFlight() {

  }

  loadComponent() {
    // Hồ Chí Minh, Việt Nam (SGN)
    const resolver = this.resolver.resolveComponentFactory(FlightOnewayScheduleComponent);
    // Hà Nội, Việt Nam (HAN)
    const way1 = this.entry.toArray()[0].viewContainer.createComponent(resolver);
    // way1.instance.from = "Hồ Chí Minh, Việt Nam (SGN)";
    // way1.instance.to = "Hà Nội, Việt Nam (HAN)";
    way1.changeDetectorRef.detectChanges();
    // const viewContainerRef1 = this.entry.toArray()[1].viewContainer.createComponent(resolver);
  }

  changeWay($event) {
    if ($event.target.value == '0') {
      this.toDate.disable();
    } else {
      this.toDate.enable();
    }
  }

  get fromDate() {
    return this.searchForm.get('fromDate');
  }

  get toDate() {
    return this.searchForm.get('toDate');
  }

  get isRoundTrip() {
    return this.searchForm.get('isRoundTrip');
  }
}
