
import { PROJECTS, EXPERIENCES, SKILL_GROUPS } from '../constants';
import type { Project, Experience, SkillGroup } from '../types';

export const getProjects = async (): Promise<Project[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PROJECTS), 500);
  });
};

export const getExperiences = async (): Promise<Experience[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(EXPERIENCES), 500);
  });
};

export const getSkills = async (): Promise<SkillGroup[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(SKILL_GROUPS), 500);
  });
};

export const sendMessage = async (data: { name: string; email: string; message: string }) => {
  console.log('Sending message to backend...', data);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 1000);
  });
};
