import type { Report } from './types/reports.types'

export const REPORTS_MOCK_DATA: Report[] = [
  {
    id: 1,
    title: 'Reporte de Usuarios Enero',
    created_at: '2024-05-01 10:00:00',
    status: 'completed',
    download_url: '/reporte_demo.xlsx',
  },
  {
    id: 2,
    title: 'Reporte de Usuarios Febrero',
    created_at: '2024-05-15 14:20:00',
    status: 'completed',
    download_url: '/reporte_demo.xlsx',
  },
]
