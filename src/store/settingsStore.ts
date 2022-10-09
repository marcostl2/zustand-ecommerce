import create from 'zustand';

interface SettingsStore {
  sidebarIsOpen: boolean;
  toggleSidebar: () => void;
  tooltipIsOpen: boolean;
  toggleTooltip: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  sidebarIsOpen: false,
  toggleSidebar: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
  tooltipIsOpen: false,
  toggleTooltip: () =>
    set((state) => ({ tooltipIsOpen: !state.tooltipIsOpen })),
}));
