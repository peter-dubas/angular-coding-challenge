import {TableSettings} from '../labour-stats';

export const tableSettings: TableSettings = {
  header: {
    defaultClasses: [
      'header-titles'
    ],
    columns: [
      {
        name: 'Payroll Provider',
        id: 'header-provider',
        classes: ['col-bg']
      },
      {
        name: 'Worker',
        id: 'header-worker',
        classes: ['col-sm']
      },
      {
        name: 'Compliance Score',
        id: 'header-comp-score',
        classes: ['col-sm']
      },
      {
        name: 'Gross Pay (£)',
        id: 'header-gross-pay',
        classes: ['col-bg']
      },
      {
        name: 'Payroll Admin (£)',
        id: 'header-payroll',
        classes: ['col-sm']
      },
      {
        name: 'Labour Cost (£)',
        id: 'header-labour-cost',
        classes: ['col-bg']
      },
      {
        name: 'Work Force',
        id: 'header-work-force',
        classes: ['col-sm']
      }
    ]
  },
  body: {
    defaultClasses: [''],
    columns: [
      {
        name: 'name',
        id: 'data-provider',
        classes: ['col-bg']
      },
      {
        name: 'workerCount',
        id: 'data-worker',
        classes: ['col-sm']
      },
      {
        name: 'complianceStats',
        id: 'data-comp-score',
        classes: ['col-sm']
      },
      {
        name: 'grossPayTotal',
        id: 'data-gross-pay',
        classes: ['col-bg']
      },
      {
        name: 'payrollAdminTotal',
        id: 'data-payroll',
        classes: ['col-sm']
      },
      {
        name: 'labourCostTotal',
        id: 'data-labour-cost',
        classes: ['col-bg']
      },
      {
        name: 'rebatesTotal',
        id: 'data-work-force',
        classes: ['col-sm']
      }
    ]
  },
  footer: {
    defaultClasses: [''],
    columns: [
      {
        name: 'name',
        id: 'footer-header',
        classes: ['col-bg']
      },
      {
        name: 'workerCount',
        id: 'footer-worker',
        classes: ['col-sm']
      },
      {
        name: 'complianceStats',
        id: 'footer-comp-score',
        classes: ['col-sm']
      },
      {
        name: 'grossPayTotal',
        id: 'footer-gross-pay',
        classes: ['col-bg']
      },
      {
        name: 'payrollAdminTotal',
        id: 'footer-payroll',
        classes: ['col-sm']
      },
      {
        name: 'labourCostTotal',
        id: 'footer-labour-cost',
        classes: ['col-bg']
      },
      {
        name: 'rebatesTotal',
        id: 'footer-work-force',
        classes: ['col-sm']
      }
    ]
  }
};
