import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, e as decodeKey } from './chunks/astro/server_B1yG6FpW.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/","cacheDir":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/node_modules/.astro/","outDir":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/dist/","srcDir":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/","publicDir":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/public/","buildClientDir":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/dist/","buildServerDir":"file:///C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about-us/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"inpatient-guide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/inpatient-guide","isIndex":true,"type":"page","pattern":"^\\/inpatient-guide\\/?$","segments":[[{"content":"inpatient-guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/inpatient-guide/index.astro","pathname":"/inpatient-guide","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"location-contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/location-contact","isIndex":false,"type":"page","pattern":"^\\/location-contact\\/?$","segments":[[{"content":"location-contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/location-contact.astro","pathname":"/location-contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"notice-of-nondiscrimination/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notice-of-nondiscrimination","isIndex":false,"type":"page","pattern":"^\\/notice-of-nondiscrimination\\/?$","segments":[[{"content":"notice-of-nondiscrimination","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notice-of-nondiscrimination.astro","pathname":"/notice-of-nondiscrimination","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"notice-of-privacy-practices-hipaa/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notice-of-privacy-practices-hipaa","isIndex":false,"type":"page","pattern":"^\\/notice-of-privacy-practices-hipaa\\/?$","segments":[[{"content":"notice-of-privacy-practices-hipaa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notice-of-privacy-practices-hipaa.astro","pathname":"/notice-of-privacy-practices-hipaa","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"notice-of-private-practice/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/notice-of-private-practice","isIndex":false,"type":"page","pattern":"^\\/notice-of-private-practice\\/?$","segments":[[{"content":"notice-of-private-practice","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/notice-of-private-practice.astro","pathname":"/notice-of-private-practice","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"our-focus/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/our-focus","isIndex":true,"type":"page","pattern":"^\\/our-focus\\/?$","segments":[[{"content":"our-focus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/our-focus/index.astro","pathname":"/our-focus","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"patient-visitor-guide/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/patient-visitor-guide","isIndex":true,"type":"page","pattern":"^\\/patient-visitor-guide\\/?$","segments":[[{"content":"patient-visitor-guide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/patient-visitor-guide/index.astro","pathname":"/patient-visitor-guide","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"price-transparency/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/price-transparency","isIndex":false,"type":"page","pattern":"^\\/price-transparency\\/?$","segments":[[{"content":"price-transparency","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/price-transparency.astro","pathname":"/price-transparency","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"referral-process/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/referral-process","isIndex":false,"type":"page","pattern":"^\\/referral-process\\/?$","segments":[[{"content":"referral-process","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/referral-process.astro","pathname":"/referral-process","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"residential-treatment/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/residential-treatment","isIndex":false,"type":"page","pattern":"^\\/residential-treatment\\/?$","segments":[[{"content":"residential-treatment","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/residential-treatment.astro","pathname":"/residential-treatment","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/inpatient-guide/[guide].astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/inpatient-guide/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/location-contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/notice-of-nondiscrimination.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/notice-of-privacy-practices-hipaa.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/notice-of-private-practice.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/our-focus/[focus].astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/our-focus/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/patient-visitor-guide/[guide].astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/patient-visitor-guide/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/price-transparency.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/referral-process.astro",{"propagation":"none","containsHead":true}],["C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/src/pages/residential-treatment.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/inpatient-guide/[guide]@_@astro":"pages/inpatient-guide/_guide_.astro.mjs","\u0000@astro-page:src/pages/inpatient-guide/index@_@astro":"pages/inpatient-guide.astro.mjs","\u0000@astro-page:src/pages/location-contact@_@astro":"pages/location-contact.astro.mjs","\u0000@astro-page:src/pages/notice-of-nondiscrimination@_@astro":"pages/notice-of-nondiscrimination.astro.mjs","\u0000@astro-page:src/pages/notice-of-privacy-practices-hipaa@_@astro":"pages/notice-of-privacy-practices-hipaa.astro.mjs","\u0000@astro-page:src/pages/notice-of-private-practice@_@astro":"pages/notice-of-private-practice.astro.mjs","\u0000@astro-page:src/pages/our-focus/[focus]@_@astro":"pages/our-focus/_focus_.astro.mjs","\u0000@astro-page:src/pages/our-focus/index@_@astro":"pages/our-focus.astro.mjs","\u0000@astro-page:src/pages/patient-visitor-guide/[guide]@_@astro":"pages/patient-visitor-guide/_guide_.astro.mjs","\u0000@astro-page:src/pages/patient-visitor-guide/index@_@astro":"pages/patient-visitor-guide.astro.mjs","\u0000@astro-page:src/pages/price-transparency@_@astro":"pages/price-transparency.astro.mjs","\u0000@astro-page:src/pages/referral-process@_@astro":"pages/referral-process.astro.mjs","\u0000@astro-page:src/pages/residential-treatment@_@astro":"pages/residential-treatment.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DpkYSOnT.mjs","C:/Users/lhani/OneDrive/Desktop/ivorzero/ivorzero/tbrh/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","@astrojs/react/client.js":"_astro/client.DL-_0xdV.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.ico","/favicon.svg","/Three-Behavioral-Health-West Mifflin-2025-Shoppable-Services-Pricing.xlsx","/Three-Behavioral-Health-West Mifflin-2025-Standard-Pricing.xlsx","/Three-Rivers-Behavioral-Health.pdf","/background/care-home-banner.webp","/background/homepage_contact_400x280.jpg","/background/MBH_Homepage_Hero_2000x375.png","/background/OurMission_400x280.jpg","/background/Our_Focus_Banner.jpg","/background/Our_Vision_HCProviders_400x280.jpg","/background/patients_and_visitors2000x375.jpg","/background/referral-process.jpg","/background/referral_process_2000x375.jpg","/image/brochure-2.png","/image/contact-us.jpg","/image/discharge-follow-up.jpg","/image/Discharge-to-facility.avif","/image/discharge_to_facility_400x280.jpg","/image/dischrage_and_followup_400x280.jpg","/image/during-your-stay.webp","/image/during_your_stay_400x280.jpg","/image/getting_help_at_home_400x280.jpg","/image/Mission-Behavioral-Health-Brochure_M4049_EMAIL_1.jpg","/image/nutrition_1000.jpg","/image/our-vision.jpg","/image/ourMission.jpeg","/image/preparing-for-stay.jpg","/image/preparing_for_stay_400x280.jpg","/image/visitation_400x280.jpg","/image/WhyMBH_400x280.jpg","/logo/trbh-logo-white.png","/logo/trbh-logo.png","/_astro/client.DL-_0xdV.js","/about-us/index.html","/inpatient-guide/index.html","/location-contact/index.html","/notice-of-nondiscrimination/index.html","/notice-of-privacy-practices-hipaa/index.html","/notice-of-private-practice/index.html","/our-focus/index.html","/patient-visitor-guide/index.html","/price-transparency/index.html","/referral-process/index.html","/residential-treatment/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"v67q435LHnV2V+cK9LJ8zbTxl71OhAJZE3fjt3/2WuQ=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
