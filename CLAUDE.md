# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VitePress-based documentation site for **88code** (www.88code.org), a Chinese enterprise-level AI model proxy service. The site provides comprehensive tutorials and documentation for Claude Code, Codex, Gemini, Droid, and related tools.

- **Framework**: VitePress 2.0 (alpha)
- **Language**: Simplified Chinese (zh-CN)
- **Package Manager**: Bun (with npm/pnpm lock files for compatibility)
- **Build Tool**: Rolldown (Vite fork) via override
- **Repository**: https://github.com/byebye-code/docs

## Common Development Commands

### Setup
```bash
bun install              # Install dependencies (uses bunfig.toml registry)
# Alternative: npm install or pnpm install
```

### Development
```bash
bun run docs:dev         # Start dev server with auto-open
# Alternative: npm run docs:dev or pnpm docs:dev
```

### Build & Preview
```bash
bun run docs:build       # Build production site
bun run docs:preview     # Preview production build with auto-open
```

### Registry Configuration
The project uses Chinese npm mirror (registry.npmmirror.com) via `bunfig.toml` for faster package installation in China. Alternative registries are documented in bunfig.toml:7.

## Documentation Structure

```
docs/
├── .vitepress/
│   └── config.mts          # VitePress configuration (nav, sidebar, theme)
├── 88code/                 # 88code service introduction, pricing, changelog
├── ClaudeCode/             # Claude Code tutorials (Windows, Linux, Mac, VSCode, KiloRooCode)
├── Codex/                  # Codex tutorials (Windows, Linux, Mac, VSCode, JetBrains)
├── Gemini/                 # Gemini tutorials (Windows, Linux, Mac, VSCode, JetBrains)
├── Droid/                  # Droid introduction and tutorials
├── 88-opensource/          # Open source tools (byebyecode, VSCode extension, etc.)
├── FAQ/                    # Frequently asked questions and tools
├── img/                    # Image assets
├── index.md               # Home page (hero layout)
└── 404.md                 # Custom 404 page
```

## Architecture & Configuration

### VitePress Config (`docs/.vitepress/config.mts`)

**Key Configuration Areas:**
- **Language & Metadata**: Chinese locale, site title/description (config.mts:5-8)
- **Navigation Bar**: Links to official site, auto-config tools, utilities (config.mts:11-16)
- **Sidebar**: Nested menu structure for all documentation sections (config.mts:26-96)
- **Search**: Local search provider enabled (config.mts:104-106)
- **Edit Links**: GitHub edit links for all pages (config.mts:107-110)
- **Footer**: Copyright and MIT license notice (config.mts:100-103)

**Sidebar Structure:**
1. 88code Introduction (pricing, FAQ, changelog, open source)
2. Claude Code Tutorials (5 platforms)
3. Codex Tutorials (5 platforms, collapsed by default)
4. Droid Tutorial
5. Gemini Tutorials (5 platforms, collapsed by default)
6. FAQ Section (CC_SWITCH, auto-config tools)
7. Open Source Projects (byebyecode, VSCode extension, CCLine-88CC)

### Content Organization

**Tutorial Pages**: Follow platform-specific naming (Windows.md, Linux.md, Mac.md, Vscode.md, Jetbrains.md)

**Markdown Features**: Uses VitePress markdown extensions including:
- Frontmatter (YAML metadata)
- Custom containers (warning, danger blocks)
- Hero layout for homepage

### Build Optimization

- **Vite Override**: Uses `rolldown-vite` (faster Rust-based Vite fork) via package.json overrides
- **Minification**: oxc-minify for JavaScript minification
- **Static Output**: Generates static site for deployment

## Content Guidelines

When editing documentation:

1. **Language**: All content is in Simplified Chinese
2. **Platform Coverage**: Tutorials should cover Windows, Linux, Mac, VSCode, and JetBrains (where applicable)
3. **Naming Convention**: Use capitalized platform names (ClaudeCode, Codex, Gemini, not claude-code)
4. **Links**: Internal links use VitePress routing (e.g., `/ClaudeCode/Windows`)
5. **Images**: Store in `docs/img/` directory
6. **Custom Containers**: Use `> [!warning]` and `> [!danger]` for callouts

## Registry & Dependencies

**NPM Registry**: Project uses Alibaba Taobao mirror (registry.npmmirror.com) by default. See bunfig.toml for alternative Chinese mirrors (Tencent, Huawei).

**Key Dependencies**:
- vitepress: 2.0.0-alpha.12 (documentation framework)
- oxc-minify: 0.93.0 (JavaScript minifier)
- rolldown-vite: latest (via override, Rust-based Vite alternative)

## Editing Workflow

To add new tutorial or documentation page:

1. Create markdown file in appropriate directory (e.g., `docs/ClaudeCode/NewPlatform.md`)
2. Add frontmatter if needed (layout, title, etc.)
3. Update sidebar in `docs/.vitepress/config.mts` to include new page
4. Test locally with `bun run docs:dev`
5. Verify edit link and navigation work correctly

To update navigation or site structure, edit `docs/.vitepress/config.mts` and modify the relevant section (nav, sidebar, themeConfig).
