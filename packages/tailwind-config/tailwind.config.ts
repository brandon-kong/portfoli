import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

// We want each package to be responsible for its own content.
const config: Omit<Config, 'content'> = {
    darkMode: ['class'],
    theme: {
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                divider: 'hsl(var(--divider))',
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                'background-nav': 'hsl(var(--background-nav))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
            },
            borderRadius: {
                lg: `var(--radius)`,
                md: `calc(var(--radius) - 2px)`,
                sm: 'calc(var(--radius) - 4px)',
            },
            fontFamily: {
                mono: ['var(--font-mono)', ...fontFamily.mono],
                sans: ['var(--font-sans)', ...fontFamily.sans],
                code: ['var(--font-code)', ...fontFamily.mono],
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            width: {
                sidebar: 'var(--sidebar-width)',
                'sidebar-expanded': 'var(--sidebar-width-expanded)',
                content: 'var(--content-width)',
            },
            maxWidth: {
                content: 'var(--content-width)',
            },
            height: {
                navbar: 'var(--navbar-height)',
            },
            spacing: {
                sidebar: 'var(--sidebar-width)',
                navbar: 'var(--navbar-height)',
            },
            screens: {
                sm: '640px',
                md: '768px',
                'sidebar-shown': '875px',
                lg: '1024px',
                xl: '1280px',
                'icon-only': '1368px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [],
};
export default config;
