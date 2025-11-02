export type DashboardView = 'dashboard' | 'courses' | 'create' | 'settings';

export interface EducationalVideo {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
}