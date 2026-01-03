import type { ApiResponse } from '@/core/types/api-response'
import type { Report, ReportGeneratorPayload } from '../types/reports.types'
import { REPORTS_MOCK_DATA } from '../reports.constants'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

export const reportService = {
  async getReports(): Promise<ApiResponse<Report[]>> {
    await delay(500)
    return {
      data: REPORTS_MOCK_DATA,
      message: 'Reportes listados con éxito',
    }
  },

  async generateReport(payload: ReportGeneratorPayload): Promise<ApiResponse<Report>> {
    await delay(1000)
    const newReport: Report = {
      id: Math.floor(Math.random() * 1000),
      title: payload.title,
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
      status: 'pending',
      download_url: '',
    }
    return {
      data: newReport,
      message: 'El reporte se está generando en segundo plano',
    }
  },

  async getReportById(id: number): Promise<ApiResponse<Report>> {
    await delay(300)
    const report = REPORTS_MOCK_DATA.find((r) => r.id === id)
    if (!report) throw new Error('Reporte no encontrado')
    return {
      data: report,
      message: 'Detalle del reporte obtenido',
    }
  },
}
