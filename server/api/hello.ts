import { defineEventHandler } from 'h3';

export default defineEventHandler(() => {
  return { message: 'Olá do Nuxt API!' };
});