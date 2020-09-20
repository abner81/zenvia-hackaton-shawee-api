import {
  InfoDashboard,
  InfoDashboardModel
} from '../../../data/protocols/info-dashboard'
import { Client } from '@zenvia/sdk'
import env from '../../../main/config/env'

export class DashboardRepository implements InfoDashboard {
  async find(InfoDashboardModel: InfoDashboardModel): Promise<any> {
    const client = new Client(env.zenviaToken)
    const reportClient = client.getMessagesReportClient()
    const response = await reportClient.getEntries({
      startDate: InfoDashboardModel.dateFrom,
      endDate: InfoDashboardModel.dateTo
    })

    return response
  }
}
