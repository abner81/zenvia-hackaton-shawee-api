export interface InfoDashboardModel {
  id: number
  dateFrom: string
  dateTo: string
}

export interface InfoDashboard {
  find(InfoDashboardModel: InfoDashboardModel): Promise<any>
}