#!/bin/sh
# Rebuild the vendored Jelly UI bundle. See src/vendor/jelly/README.md for why
# it is vendored and scoped.
#
#   usage: scripts/update-jelly.sh [<git-ref>]
#
# Add a line to ENTRY below when you start using another Jelly element.
set -eu

REF="${1:-main}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"

trap 'rm -rf "$TMP"' EXIT

git clone --filter=blob:none https://github.com/jelly-org/ui.git "$TMP/ui"
git -C "$TMP/ui" checkout "$REF"

cat > "$TMP/ui/src/testnummers.ts" <<'ENTRY'
export { jellyToast } from './components/toast/index.js';
export { setThemeMode, isDarkMode } from './theme/index.js';

import './components/alert/index.js';
import './components/card/index.js';
import './components/checkbox/index.js';
import './components/divider/index.js';
import './components/icon-button/index.js';
import './components/input/index.js';
import './components/label/index.js';
import './components/option/index.js';
import './components/select/index.js';
import './components/slider/index.js';
import './components/toast/index.js';
ENTRY

cat > "$TMP/ui/vite.testnummers.config.ts" <<'CONFIG'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2022',
    lib: { entry: 'src/testnummers.ts', formats: ['es'], fileName: () => 'jelly.js' },
    outDir: 'dist-testnummers',
    sourcemap: false,
  },
});
CONFIG

# Upstream's build for the types, ours for the scoped JS.
(cd "$TMP/ui" && npm ci && npm run build && npx vite build --config vite.testnummers.config.ts)

mkdir -p "$ROOT/src/vendor/jelly"
cp "$TMP/ui/dist-testnummers/jelly.js" "$ROOT/src/vendor/jelly/jelly.js"
cp "$TMP/ui/dist/jelly.d.ts" "$ROOT/src/vendor/jelly/jelly.d.ts"
git -C "$TMP/ui" rev-parse HEAD > "$ROOT/src/vendor/jelly/VERSION"

echo "Vendored Jelly UI @ $(cat "$ROOT/src/vendor/jelly/VERSION")"
ls -l "$ROOT/src/vendor/jelly/"
