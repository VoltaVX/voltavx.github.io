export type SeoSchemaType = 'WebPage' | 'ProfilePage' | 'CollectionPage' | 'ContactPage';

export interface SeoPageRecord {
  path: string;
  reviewedAt: string;
  intent: string;
  schemaType: SeoSchemaType;
  index: boolean;
}

const reviewedAt = '2026-08-04T21:34:13Z';

export const SEO_PAGE_REGISTRY: readonly SeoPageRecord[] = [
  { path: '/', reviewedAt, intent: 'Juan Lopez behavior analyst, researcher, and digital systems portfolio', schemaType: 'ProfilePage', index: true },
  { path: '/about/', reviewedAt, intent: 'About Juan Lopez, his behavior-analysis background, research, and digital work', schemaType: 'ProfilePage', index: true },
  { path: '/approach/', reviewedAt, intent: 'Behavior analysis-informed digital design approach and ethical principles', schemaType: 'WebPage', index: true },
  { path: '/contact/', reviewedAt, intent: 'Contact Juan Lopez for behavioral research, web design, and digital systems', schemaType: 'ContactPage', index: true },
  { path: '/privacy/', reviewedAt, intent: 'Privacy practices for the Juan Lopez portfolio', schemaType: 'WebPage', index: true },
  { path: '/research/', reviewedAt, intent: 'Behavioral and human-AI research by Juan Lopez', schemaType: 'CollectionPage', index: true },
  { path: '/research/ai-misattribution/', reviewedAt, intent: 'AI Misattribution human-AI interaction research methods, findings, and limitations', schemaType: 'WebPage', index: true },
  { path: '/resume/', reviewedAt, intent: 'Juan Lopez behavior analyst, researcher, and digital systems resume', schemaType: 'ProfilePage', index: true },
  { path: '/services/', reviewedAt, intent: 'Behavioral research, web development, Shopify, and digital systems services', schemaType: 'WebPage', index: true },
  { path: '/work/', reviewedAt, intent: 'Web design, Shopify, research, operations, and data portfolio case studies', schemaType: 'CollectionPage', index: true },
  { path: '/work/aba-data-visualization/', reviewedAt, intent: 'ABA data visualization system case study', schemaType: 'WebPage', index: true },
  { path: '/work/ai-misattribution/', reviewedAt, intent: 'AI Misattribution research project case study', schemaType: 'WebPage', index: true },
  { path: '/work/panthernow-operations/', reviewedAt, intent: 'PantherNOW website operations case study', schemaType: 'WebPage', index: true },
  { path: '/work/sharper-image-services/', reviewedAt, intent: 'Sharper Image Services website case study', schemaType: 'WebPage', index: true },
  { path: '/work/sis-asphalt/', reviewedAt, intent: 'SIS Asphalt service website case study', schemaType: 'WebPage', index: true },
  { path: '/work/sis-florida/', reviewedAt, intent: 'SIS Florida sod and landscaping website case study', schemaType: 'WebPage', index: true },
  { path: '/work/vx-nexus/', reviewedAt, intent: 'VX Nexus Shopify commerce case study', schemaType: 'WebPage', index: true },
  { path: '/work/world-cup-items/', reviewedAt, intent: 'World Cup Items Shopify commerce case study', schemaType: 'WebPage', index: true },
  { path: '/404.html', reviewedAt, intent: 'Not-found response', schemaType: 'WebPage', index: false },
] as const;

export const getSeoPageRecord = (pathname: string) =>
  SEO_PAGE_REGISTRY.find((page) => page.path === pathname);
