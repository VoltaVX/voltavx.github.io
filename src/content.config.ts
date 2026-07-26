import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const verification = z.enum(['Confirmed', 'Observed', 'Supplied by Juan', 'Pending confirmation']);
const status = z.enum([
  'Live Client Project',
  'Independent Commerce Project',
  'Academic Research',
  'Concept',
  'Prototype',
  'Internal Tool',
  'Under Construction',
  'Archived',
]);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    longerDescription: z.string(),
    category: z.enum([
      'Client & Service Systems',
      'Commerce & Brand Systems',
      'Research & Behavioral Systems',
    ]),
    industry: z.string(),
    role: z.string(),
    responsibilities: z.array(z.string()),
    platform: z.string(),
    platformVerificationStatus: verification,
    projectType: z.string(),
    projectTypeVerificationStatus: verification,
    domain: z.string().optional(),
    domainRegistrationDate: z.string().optional(),
    approximateProjectYear: z.string(),
    dateSource: z.string(),
    status,
    featured: z.boolean(),
    featuredOrder: z.number(),
    liveUrl: z.url().optional(),
    cover: z.string(),
    coverAlt: z.string(),
    gallery: z.array(z.string()).default([]),
    audience: z.array(z.string()),
    problem: z.string(),
    objectives: z.array(z.string()),
    informationArchitecture: z.array(z.string()),
    designDecisions: z.array(z.string()),
    infrastructure: z.array(z.string()),
    accessibilityConsiderations: z.array(z.string()),
    behavioralConcepts: z.array(z.string()),
    outcomes: z.array(z.string()),
    limitations: z.array(z.string()),
    reflection: z.string(),
    relatedProjects: z.array(z.string()),
    verificationNote: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    slug: z.string(),
    summary: z.string(),
    course: z.string(),
    author: z.string(),
    term: z.string(),
    status,
    methods: z.array(z.string()),
    tools: z.array(z.string()),
    sample: z.string(),
    conditions: z.array(z.string()),
    mainFinding: z.string(),
    featured: z.boolean(),
    cover: z.string(),
  }),
});

export const collections = { projects, research };
