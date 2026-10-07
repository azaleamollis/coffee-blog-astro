# Coffee Blog Astro

This repo belongs to the [Astro Tutorial: Make a Static Site with Interactive Components](https://www.debugbear.com/blog/astro-tutorial) article, published on the DebugBear Web Performance Blog 🧸🚀.

The final output is hosted on Cloudflare Workers at [astro.perftuts.workers.dev](astro.perftuts.workers.dev).

## Prerequisites

- Node.js 22.12.0 or later
- A JavaScript package manager, such as npm, pnpm, or Yarn
- A Cloudflare account

### On Windows

The Cloudflare development environment uses [`workerd`](https://github.com/cloudflare/workerd), which requires the Microsoft Visual C++ runtime. If you are developing on Windows, install the [latest Microsoft Visual C++ Redistributable](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).

## Development

Install the dependencies:

```bash
npm install
```

Start the Astro development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Cloudflare Worker

Run the Cloudflare Worker locally with Wrangler:

```bash
npm run worker
```
