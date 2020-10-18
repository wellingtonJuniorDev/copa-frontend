export const environment = {
  production: true,
  copaApi: (uri: string, version: number = 1) => `https://localhost:44364/api/v${version}/${uri}`
};
