// Calendly Widget Types
interface CalendlyPrefillData {
  name?: string;
  email?: string;
  customAnswers?: Record<string, string>;
  [key: string]: string | number | boolean | Record<string, string> | undefined;
}

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: CalendlyPrefillData;
        utm?: Record<string, string>;
      }) => void;
      initPopupWidget: (options: {
        url: string;
        prefill?: CalendlyPrefillData;
        utm?: Record<string, string>;
      }) => void;
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initEventListener: (options: {
        onEventScheduled?: (event: any) => void;
        onDateAndTimeSelected?: (event: any) => void;
        onEventTypeViewed?: (event: any) => void;
        onProfilePageViewed?: (event: any) => void;
      }) => void;
      closePopupWidget: () => void;
      destroyBadgeWidget: () => void;
    };
  }
}

export { };

