# GitHub Actions Workflows

This directory contains GitHub Actions workflows for automated deployment to Cloudflare Pages.

## Workflows

### 1. Deploy to Production (`deploy-production.yml`)

Automatically deploys the application to production when changes are pushed to the `main` branch.

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Required Secrets:**
- `CLOUDFLARE_API_TOKEN`: Cloudflare API token with Pages permissions
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

**Steps:**
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Build Next.js site
5. Deploy to Cloudflare Pages

### 2. Deploy Preview (`deploy-preview.yml`)

Creates preview deployments for pull requests.

**Triggers:**
- Pull request to `main` branch
- Manual workflow dispatch

**Features:**
- Automatically comments on PR with preview URL
- Creates isolated preview environment

## Setup Instructions

### 1. Get Cloudflare Credentials

#### Get Account ID:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click on "Pages" in the left sidebar
3. Your Account ID is visible in the URL or account settings

#### Create API Token:
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/profile/api-tokens)
2. Click "Create Token"
3. Use the "Edit Cloudflare Workers" template or create custom token with:
   - Permissions: `Cloudflare Pages:Edit`
   - Account Resources: Include your account
4. Copy the token (shown only once)

### 2. Add Secrets to GitHub

1. Go to your repository on GitHub
2. Click "Settings" → "Secrets and variables" → "Actions"
3. Click "New repository secret"
4. Add the following secrets:
   - Name: `CLOUDFLARE_API_TOKEN`, Value: Your API token
   - Name: `CLOUDFLARE_ACCOUNT_ID`, Value: Your account ID

### 3. Manual Deployment

To trigger a manual deployment:

1. Go to "Actions" tab in your repository
2. Select "Deploy to Production" workflow
3. Click "Run workflow"
4. Select the branch (typically `main`)
5. Optionally add a reason for deployment
6. Click "Run workflow"

## Deployment Process

### Production Deployment

```bash
# Automatically triggered on push to main:
git push origin main

# Or trigger manually via GitHub UI
```

### Preview Deployment

Preview deployments are automatically created for all pull requests targeting `main`.

## Troubleshooting

### Deployment Fails with Authentication Error

- Verify `CLOUDFLARE_API_TOKEN` has correct permissions
- Check token hasn't expired
- Ensure `CLOUDFLARE_ACCOUNT_ID` is correct

### Build Fails

- Check build logs in Actions tab
- Verify `package.json` scripts are correct
- Ensure all dependencies are listed in `package.json`

### Cloudflare Pages Project Not Found

- Create project manually first:
  ```bash
  wrangler pages project create ross-tax-prep
  ```
- Or let the first deployment create it automatically

## Local Development

For local development and testing:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Test production build locally
npm run pages:dev
```

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Cloudflare Pages GitHub Action](https://github.com/cloudflare/pages-action)
