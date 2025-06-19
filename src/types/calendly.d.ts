// Calendly Widget Types
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string | number | boolean>;
        utm?: Record<string, string>;
      }) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      closePopupWidget: () => void;
      destroyBadgeWidget: () => void;
    };
  }
}

export {};
