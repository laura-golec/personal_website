'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ThemeProvider attribute="data-theme" defaultTheme='system' enableSystem>{children}</ThemeProvider>
            <div id="div" className="em-provider"></div>
        </div>
    );
}