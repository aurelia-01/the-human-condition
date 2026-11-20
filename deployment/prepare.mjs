import { copyFile, mkdir } from 'node:fs/promises';

const publicDirectory = new URL('./public/experiences/human-condition/', import.meta.url);
await mkdir(publicDirectory, { recursive: true });
await copyFile(new URL('../index.html', import.meta.url), new URL('index.html', publicDirectory));
