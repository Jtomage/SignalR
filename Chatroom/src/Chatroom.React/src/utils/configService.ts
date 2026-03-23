import type { AppConfig } from "../types/config";

let cachedConfig: AppConfig | null = null;

export async function loadConfig() {
    if (cachedConfig) return cachedConfig;

    const response = await fetch(`${import.meta.env.BASE_URL}config.json`);
    if (!response.ok) {
        throw new Error("Could no load configuration");
    }

    cachedConfig = await response.json();
    return cachedConfig;
}

export function getConfig(): AppConfig {
    if (!cachedConfig) {
        throw new Error("Config has not been initalized")
    }

    return cachedConfig;
}