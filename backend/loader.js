import { resolve as resolveTs } from "ts-node/esm";
import * as tsConfigPaths from "tsconfig-paths";
import { pathToFileURL } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { loadConfig } = tsConfigPaths;
const config = loadConfig();
const cleanup =
  config.resultType === "success"
    ? tsConfigPaths.register({
        baseUrl: config.absoluteBaseUrl,
        paths: config.paths
      })
    : undefined;

export async function resolve(specifier, context, nextResolve) {
  if (specifier.endsWith(".ts")) {
    const result = await resolveTs(specifier, context, nextResolve);
    return result;
  }

  // For all other cases, try with .ts extension
  try {
    return await resolveTs(`${specifier}.ts`, context, nextResolve);
  } catch {
    return nextResolve(specifier, context);
  }
}

export { load, transformSource } from "ts-node/esm";
