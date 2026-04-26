{
  "name": "yiyuan-airport-cloudflare-pages",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "wrangler pages dev public --compatibility-date=2025-08-01 --d1 DB=yiyuan_db"
  },
  "devDependencies": {
    "wrangler": "latest"
  }
}
