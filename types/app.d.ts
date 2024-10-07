interface TelegramOptions {
  bot_id: string;
  request_access?: string;
  lang?: string;
}

interface Window {
  Telegram: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    getWidgetInfo: (el_or_id: HTMLElement | string, callback: Function) => void;
    setWidgetOptions: (options: TelegramOptions, el_or_id: HTMLElement | string) => void;
    Login: {
      // 👇️ init checks for base64 'tgAuthResult' in URL, though redirect after login has 'hash' instead, so ????
      init: (
        options: TelegramOptions,
        auth_callback: (auth_result: TelegramResponseType) => void,
      ) => void;
      open: (callback: (authData: TelegramResponseType) => void) => void;
      auth: (options: TelegramOptions, callback: (authData: TelegramResponseType) => void) => void;
      widgetsOrigin: 'https://oauth.telegram.org' | 'https://oauth.tg.dev';
    };
  };
}
