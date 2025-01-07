/*
    vatACARS CDN
    Copyright (C) 2025 vatACARS Team

    This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

    You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.

    vatACARS CDN Copyright (C) 2025 vatACARS Team
*/

import { type AppProps } from 'next/app'
import '../styles/globals.css'

import SEO from '@comp/meta/seo'
import { CookieConsent } from '@comp/ui/CookieConsent'
import ConsumerLayout from '@comp/layout/ConsumerLayout'
import FlyonuiScript from '@comp/meta/flyonui'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <SEO />
            <ConsumerLayout>
                <Component {...pageProps} />
                <CookieConsent />
            </ConsumerLayout>
            <FlyonuiScript />
        </>
    )
}