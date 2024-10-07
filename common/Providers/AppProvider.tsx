'use client';

import { PropsWithChildren } from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { GoogleOAuthProvider } from '@react-oauth/google';
const host = typeof window !== 'undefined' ? window.location.host : 'defaultHost';

const sdkOptions = {
  logging: { developerMode: false },
  checkInstallationImmediately: false,
  dappMetadata: {
    name: 'Wucoin metamask',
    url: host, // using the host constant defined above
  },
};
export const AppProvider = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div>
      <GoogleOAuthProvider clientId="1035405520449-ek7cscui3h4h538cpl8ta2hk1k5jr44u.apps.googleusercontent.com">
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          {children}
        </MetaMaskProvider>
      </GoogleOAuthProvider>
    </div>
  );
};
