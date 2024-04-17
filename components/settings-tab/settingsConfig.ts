export interface settingsType {
  darkMode: boolean;
  testSetting: string;
  version: string;
}

const defaultSettings: settingsType = {
  darkMode: true,
  testSetting: "test",
  version: "1.0.0",
};

export const defaultSettingsStore = JSON.stringify(defaultSettings);
