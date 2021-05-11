module.exports = {
	rootDir: '.',
	testMatch: ['<rootDir>src/tests/**/*.spec.ts'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	reporters: ['jest-spec-reporter']
};
