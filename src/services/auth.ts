import { User, UserRole } from '../types/auth';
import { mockUsers } from '../data/mockUsers';

export async function signIn(email: string, password: string): Promise<User> {
  try {
    const user = mockUsers.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  } catch (error) {
    console.error('Sign in error:', error);
    throw new Error('Invalid email or password');
  }
}

export async function signOut(): Promise<void> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return Promise.resolve();
}

// Mock user initialization - no longer needed as we use mockUsers
export async function initializeDemoUsers() {
  return Promise.resolve();
}