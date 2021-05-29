import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	verbose: true,
	rootDir: '.',
	testMatch: ['<rootDir>src/test/**/*.spec.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testEnvironment: 'node',
	testTimeout: 120000,
	reporters: ['jest-spec-reporter']
};

export default config;
