import Medusa from "@medusajs/js-sdk"
declare global {
    interface Window {
        __BACKEND_URL__?: string
    }
}

export const sdk = new Medusa({
    baseUrl: window.__BACKEND_URL__ || "/",
    debug: import.meta.env.DEV,
    auth: {
        type: "session",
    },
})
