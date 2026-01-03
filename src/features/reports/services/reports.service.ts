import type { ApiResponse } from '@/core/types/api-response'
import type { Report, ReportGeneratorPayload } from '../types/reports.types'
import { REPORTS_MOCK_DATA } from '../reports.constants'

export const reportService = {
  async getReports(): Promise<ApiResponse<Report[]>> {
    return {
      data: REPORTS_MOCK_DATA,
      message: 'Reportes listados con éxito',
    }
  },

  async generateReport(payload: ReportGeneratorPayload): Promise<ApiResponse<Report>> {
    const newReport: Report = {
      id: Math.floor(Math.random() * 1000),
      title: payload.title,
      created_at: new Date().toISOString().replace('T', ' ').substring(0, 19),
      status: 'completed',
      download_url: '/reporte_demo.xlsx',
    }
    return {
      data: newReport,
      message: 'El reporte se está generando en segundo plano',
    }
  },

  async getReportById(id: number): Promise<ApiResponse<Report>> {
    const report = REPORTS_MOCK_DATA.find((r) => r.id === id)
    if (!report) throw new Error('Reporte no encontrado')
    return {
      data: report,
      message: 'Detalle del reporte obtenido',
    }
  },
}
