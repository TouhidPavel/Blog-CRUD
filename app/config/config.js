// Database Configuration
export const DATABASE_URI = ""

// Authentication
export const JWT_SECRET_KEY = ""
export const JWT_EXPIRATION_TIME = 60 * 60 * 24 * 30 // 30 Days

// Email Server Configuration
export const EMAIL_SERVER_HOST = ""
export const EMAIL_SERVER_PORT = ""
export const EMAIL_ACCOUNT_USERNAME = ""
export const EMAIL_ACCOUNT_PASSWORD = ""

// Payload Limits
export const MAX_JSON_PAYLOAD_SIZE = "50mb"
export const ALLOW_URL_ENCODED = true

// Request Limits
export const REQUEST_LIMIT_TIME = 15 * 60 * 1000 // 15 Minutes
export const MAX_REQUEST_LIMIT_NUMBER = 300 // 300 Requests are Allowed Every 15 Minutes

// Caching
export const ENABLE_CACHING = true

// Server Port
export const SERVER_PORT = 3000