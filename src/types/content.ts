import { UserRole } from './auth';

export type ContentType = 'video' | 'pdf' | 'quiz' | 'assessment';

export interface Module {
  id: string;
  title: string;
  description: string;
  type: ContentType;
  content: string;
  duration: number;
  requiredRoles: UserRole[];
  sections: ModuleSection[];
}

export interface ModuleSection {
  id: string;
  title: string;
  content: string;
  videoUrl?: string;
}

export interface Progress {
  userId: string;
  moduleId: string;
  completed: boolean;
  score?: number;
  completedAt?: Date;
  currentSectionId?: string;
}