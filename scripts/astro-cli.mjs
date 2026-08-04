import { mkdirSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const configHome = join(projectRoot, '.debug', 'config');
const astroBin = join(projectRoot, 'node_modules', 'astro', 'bin', 'astro.mjs');

mkdirSync(configHome, { recursive: true });

const child = spawn(process.execPath, [astroBin, ...process.argv.slice(2)], {
  cwd: projectRoot,
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: '1',
    XDG_CONFIG_HOME: process.env.XDG_CONFIG_HOME || configHome,
  },
  stdio: 'inherit',
});

child.on('error', (error) => {
  console.error(`Unable to start Astro: ${error.message}`);
  process.exitCode = 1;
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  } else {
    process.exitCode = code ?? 1;
  }
});
