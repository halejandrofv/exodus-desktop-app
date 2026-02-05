// Definiciones de tipos para la API expuesta por Electron preload script

declare global {
  interface Window {
    electronAPI: {},
    // API namespace (para compatibilidad hacia atrás)
    api: Window["electronAPI"];
  }
}

export {}
