const loadEnvVar = (key: string): string => {
    const value = process.env[key];
    if (!value) throw new Error(`${key} should be defined in env variables`);
    return value;
}

export {
    loadEnvVar
}