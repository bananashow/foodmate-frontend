/// <reference types="vite/client" />

interface ImportMeta {
  env: {
    readonly VITE_API_URL?: string;
    readonly VITE_WS_URL?: string;
  };
}
