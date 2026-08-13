export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface RoadmapSection {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
  difficulty: 'basic' | 'mid' | 'senior';
  topics: RoadmapTopic[];
}

export interface RoadmapTopic {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  icon: string;
  tags: string[];
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  answerBn: string;
  category: string;
}

export interface CodeExample {
  id: string;
  title: string;
  language: string;
  code: string;
  description?: string;
  descriptionBn?: string;
}
