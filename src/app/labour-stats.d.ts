export interface LabourStatsData {
  grossPayTotal: number;
  labourCostTotal: number;
  name: string;
  payrollAdminTotal: number;
  providerId: number;
  rebatesTotal: number;
  workerCount: number;
  complianceStats?: ComplianceStats;
  type?: string;
}

export interface ComplianceStats {
  Contract: number;
  EmpStatusReview: number;
  Identification: number;
  OpsChecked: number;
  OpsEmpStatusChecked: number;
  RightToWork: number;
  TaxStatus: number;
  Total: number;
}

export interface LabourStats {
  stats: Array<LabourStatsData>;
  total: Array<LabourStatsData>;
}

export interface TableSettings {
  header: TableSettingsItem;
  body: TableSettingsItem;
  footer: TableSettingsItem;
}
export interface TableSettingsItem {
  defaultClasses: Array<string>;
  columns: Array<TableSettingColumn>;
}
export interface TableSettingColumn {
  name: string;
  id: string;
  classes: Array<string>;
}
