import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state,
  keyframes,
  query
} from '@angular/animations';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import {LabourStatsService} from '../labour-stats.service';
import {LabourStats} from '../labour-stats';
import {tableSettings} from './labour-cost-report-table';

@Component({
  selector: 'app-labour-cost-report',
  templateUrl: './labour-cost-report.component.html',
  styleUrls: ['./labour-cost-report.component.css'],
  animations: [
    trigger('reportDataChangeTrigger', [
      state('true', style({opacity: 1, transform: 'translateY(0px)' })),
      state('false', style({ opacity: 1, transform: 'translateY(0px)' })),
      transition('true <=> false', [
        query('tr', [
          animate('.5s cubic-bezier(0.35, 0, 0.25, 1)', keyframes([
            style({opacity: 1, transform: 'rotateX(0deg)', offset: 0 }),
            style({opacity: 0.2, transform: 'rotateX(140deg)', offset: 0.2 }),
            style({opacity: 0, transform: 'rotateX(180deg)', offset: 0.5 }),
            style({opacity: 0.7, transform: 'rotateX(40deg)', offset: 0.7 }),
            style({opacity: 1, transform: 'rotateX(0deg)', offset: 1 })
          ]))
        ])
      ])
    ])
  ]
})
export class LabourCostReportComponent implements OnInit {
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  lsService: LabourStatsService;
  labourStats: LabourStats;
  tableSettings = tableSettings;

  constructor(lsService: LabourStatsService) {
    this.lsService = lsService;
  }

  ngOnInit(): void {
    this.labourStats = this.lsService.getLabourStats();
  }

  onHeaderToggle(itemID) {
    this.lsService.sortLabourStats(itemID);
  }

}
