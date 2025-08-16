import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
import { FumadocsLogo } from 'fumadocs-ui/components/logo';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <FumadocsLogo />
        Fumadocs Example
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/fuma-nama/fumadocs',
    },
  ],
};
