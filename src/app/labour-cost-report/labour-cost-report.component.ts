import { Component, OnInit } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-labour-cost-report',
  templateUrl: './labour-cost-report.component.html',
  styleUrls: ['./labour-cost-report.component.css']
})
export class LabourCostReportComponent implements OnInit {
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
