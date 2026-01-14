import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DpkYSOnT.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about-us.astro.mjs');
const _page1 = () => import('./pages/inpatient-guide/_guide_.astro.mjs');
const _page2 = () => import('./pages/inpatient-guide.astro.mjs');
const _page3 = () => import('./pages/location-contact.astro.mjs');
const _page4 = () => import('./pages/notice-of-nondiscrimination.astro.mjs');
const _page5 = () => import('./pages/notice-of-privacy-practices-hipaa.astro.mjs');
const _page6 = () => import('./pages/notice-of-private-practice.astro.mjs');
const _page7 = () => import('./pages/our-focus/_focus_.astro.mjs');
const _page8 = () => import('./pages/our-focus.astro.mjs');
const _page9 = () => import('./pages/patient-visitor-guide/_guide_.astro.mjs');
const _page10 = () => import('./pages/patient-visitor-guide.astro.mjs');
const _page11 = () => import('./pages/price-transparency.astro.mjs');
const _page12 = () => import('./pages/referral-process.astro.mjs');
const _page13 = () => import('./pages/residential-treatment.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about-us.astro", _page0],
    ["src/pages/inpatient-guide/[guide].astro", _page1],
    ["src/pages/inpatient-guide/index.astro", _page2],
    ["src/pages/location-contact.astro", _page3],
    ["src/pages/notice-of-nondiscrimination.astro", _page4],
    ["src/pages/notice-of-privacy-practices-hipaa.astro", _page5],
    ["src/pages/notice-of-private-practice.astro", _page6],
    ["src/pages/our-focus/[focus].astro", _page7],
    ["src/pages/our-focus/index.astro", _page8],
    ["src/pages/patient-visitor-guide/[guide].astro", _page9],
    ["src/pages/patient-visitor-guide/index.astro", _page10],
    ["src/pages/price-transparency.astro", _page11],
    ["src/pages/referral-process.astro", _page12],
    ["src/pages/residential-treatment.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1a6e79b9-78fb-48ff-92ca-7199667c027e"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
