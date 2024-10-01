import { pathsToModuleNameMapper } from "ts-jest";

const { compilerOptions } = require("./tsconfig.app.json");

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.app.json" }],
  },
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/__mocks__/svg.ts",
    "\\.(css|less|sass|scss)$": "<rootDir>/src/__mocks__/style.ts",
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: "<rootDir>/src/",
    }),
  },
};
