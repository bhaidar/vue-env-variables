import { inject } from 'vue';
import { getVueEnvVariables } from './env-helper';

export const envSymbol = Symbol();

export default {
  // eslint-disable-next-line no-unused-vars
  install(app, options) {
    // access process.env object
    const env = process.env;

    // get an object of all vue variables
    const vueVariables = getVueEnvVariables(env)

    // make $env property available to all components using Options API
    app.config.globalProperties.$env = vueVariables || {};

    // provide the env variables to support all components using Composition API or Options API
    app.provide(envSymbol, vueVariables);
  },
};

export function useEnv() {
  const env = inject(envSymbol);
  if (!env) throw new Error('No env provided!');

  return env;
}
