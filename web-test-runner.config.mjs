import { playwrightLauncher } from '@web/test-runner-playwright';
import { selectOptionPlugin } from '@web/test-runner-commands/plugins';

const filteredLogs = [
  'Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.',
  'lit-html is in dev mode',
];

export default {
  files: 'dist/test/**/*.test.js',

  //* Resolve bare module imports
  nodeResolve: {
    exportConditions: ['browser', 'development'],
  },

  //* Filter out lit dev mode logs
  filterBrowserLogs(log) {
    for (const arg of log.args) {
      if (typeof arg === 'string' && filteredLogs.some(l => arg.includes(l))) {
        return false;
      }
    }
    return true;
  },

  //* Compile JS for older browsers. Requires @web/dev-server-esbuild plugin
  // esbuildTarget: 'auto',

  //* Amount of browsers to run concurrently
  // concurrentBrowsers: 2,

  //* Amount of test files per browser to test concurrently
  // concurrency: 1,

  //* Browsers to run tests on
  browsers: [
    // playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'chromium' }),
    // playwrightLauncher({ product: 'webkit' }),
  ],
  plugins: [selectOptionPlugin()],
};
