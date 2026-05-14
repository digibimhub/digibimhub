import { VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  buildCommand: 'npm run build',
  framework: 'nextjs',
  crons: [
    {
      path: '/api/maintenance',
      schedule: '0 0 * * *',
    },
  ],
};
