import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LabourStats} from './labour-stats';

@Injectable()
export class LabourStatsService {
  private labourStats: LabourStats = { stats: [], total: [] };
  http: HttpClient;
  activeSorting: string;
  sortingAsc = true;
  animationTrigger = true;

  constructor(http: HttpClient) {
    this.http = http;
  }

  fetchLabourStats() {
    this.http.get('http://localhost:6502/application/labourstats').subscribe((response: Array<LabourStats>) => {
      let outputData = [];
      let outputTotals = [];
      // format the data:
      Object.keys(response[0]).forEach(labourType => {
        const outputArray = response[0][labourType].map(currentContractor => {
          currentContractor.complianceStats = `${currentContractor.complianceStats ? Math.round(currentContractor.complianceStats.Total) : 0}%`;
          currentContractor.payrollAdminTotal = `${currentContractor.payrollAdminTotal || '-'}`;
          currentContractor.grossPayTotal = Math.round(currentContractor.grossPayTotal / 100).toLocaleString('en-UK');
          currentContractor.labourCostTotal = Math.round(currentContractor.labourCostTotal / 100).toLocaleString('en-UK');
          currentContractor.rebatesTotal = `${currentContractor.rebatesTotal || 0}%`;
          currentContractor.type = labourType;
          return currentContractor;
        });
        if (labourType === 'directContractors') {
          outputData.unshift(outputArray[0]);
        } else if (labourType !== 'total') {
          outputData = outputData.concat(outputArray);
        } else if (labourType === 'total') {
          outputTotals = outputArray;
        }
      });
      this.labourStats.stats = outputData;
      this.labourStats.total = outputTotals;

      // sort the data we got:
      this.sortLabourStats('header-provider');
    });
  }
  getLabourStats() {
    if (this.labourStats.stats.length === 0 && this.labourStats.total.length === 0) {
      this.fetchLabourStats();
    }
    return this.labourStats;
  }
  sortLabourStats(columnID: string) {
    // save the prev state before changes:
    this.animationTrigger = !this.animationTrigger;
    // save the sorting settings:
    this.sortingAsc = this.activeSorting === columnID ? !this.sortingAsc : true;
    this.activeSorting = columnID;
    const mappedColumn = this.mapSortColumn(columnID);
    this.labourStats.stats.sort((a, b) => {
      // keep directContractors on top for the provider name sorting:
      if (mappedColumn === 'name' && a.type === 'directContractors') {
        return -1;
      } else if (mappedColumn === 'name' && b.type === 'directContractors') {
        return 1;
      }

      // check for locale strings:
      let valueA = a[mappedColumn].includes && a[mappedColumn].includes(',') ? a[mappedColumn].replace(/\,/g, '') : a[mappedColumn];
      let valueB = b[mappedColumn].includes && b[mappedColumn].includes(',') ? b[mappedColumn].replace(/\,/g, '') : b[mappedColumn];
      if (!isNaN(parseInt(valueA, 10)) && !isNaN(parseInt(valueB, 10))) {
        // parse numbers:
        valueA = parseInt(valueA, 10);
        valueB = parseInt(valueB, 10);
        // compare the numbers:
        return this.sortingAsc ? valueB - valueA : -(valueB - valueA);
      }

      // do the usual sorting:
      if (valueA.toUpperCase() < valueB.toUpperCase()) {
        return this.sortingAsc ? -1 : 1;
      } else if (valueA.toUpperCase() > valueB.toUpperCase()) {
        return this.sortingAsc ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  private mapSortColumn(sortColumn) {
    const columnsMap = {
      'header-provider': 'name',
      'header-worker': 'workerCount',
      'header-comp-score': 'complianceStats',
      'header-gross-pay': 'grossPayTotal',
      'header-payroll': 'payrollAdminTotal',
      'header-labour-cost': 'labourCostTotal',
      'header-work-force': 'rebatesTotal'
    };
    return columnsMap[sortColumn] || 'name';
  }

}
