
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyecto/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/pingpong"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/futbolines"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/billares"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/airhockey"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/canastas"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/porterias"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/trampolines"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/login"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/register"
  },
  {
    "renderMode": 2,
    "route": "/proyecto/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/proyecto",
    "route": "/proyecto/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 791, hash: 'd201ebe1941bee75f57c44bf972495cce8f69c57951a6e0ee8e1cddb763ec056', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 955, hash: '5fa93865c6c003728e8dc3a2860e9fd581169642c839fcba7f2e2c7c3f1472ba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25617, hash: '3f34918bb63a4308fec5ac092b87662217178072b965aa2bc04275854593305b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'canastas/index.html': {size: 20190, hash: '130d4ec294cc2ddbf307d67c5639d7226065a98867cc513d855a625223135c92', text: () => import('./assets-chunks/canastas_index_html.mjs').then(m => m.default)},
    'porterias/index.html': {size: 20211, hash: '55e24bcc3ca006131c08984a8eb9317ac3b62a22718f2654a592f3ad73c32ddd', text: () => import('./assets-chunks/porterias_index_html.mjs').then(m => m.default)},
    'pingpong/index.html': {size: 20624, hash: '22b69c285dc3fd955e783f5858dcf2004d87c81d4efee57bf25be1c855bde820', text: () => import('./assets-chunks/pingpong_index_html.mjs').then(m => m.default)},
    'trampolines/index.html': {size: 20192, hash: '9b83f8799ebfa193aaa2feaaf1776ec832371aa2efcda40469622afccb8e6d3d', text: () => import('./assets-chunks/trampolines_index_html.mjs').then(m => m.default)},
    'billares/index.html': {size: 20245, hash: '875769b256faeced00d2abae9bbfc53bc5e0ac950cdc460c52dc3b1e0922de98', text: () => import('./assets-chunks/billares_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 16045, hash: '2bfe7931ad906c5badcfd134c997fe7944d820558bd62b8c2d10462435a687ed', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'futbolines/index.html': {size: 20182, hash: '95c99bded9c00e6e3abbdde8392f049319830132edc3ef883c33bd77730945c7', text: () => import('./assets-chunks/futbolines_index_html.mjs').then(m => m.default)},
    'airhockey/index.html': {size: 35050, hash: '7ad24aee23a25f19793d40a61f051083efec1553b2748bfaaab806f7b76e9b1a', text: () => import('./assets-chunks/airhockey_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 17072, hash: '683d8f81c74daedad4eca14f09a4aaf005a955055cebb4750624bba6dd8cecf9', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 17442, hash: '8f8ac5e224d1faf662f0e4d6928af484fe989d5338c47bafa1fa42fa4f55dea0', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-ORCMNZ5K.css': {size: 328, hash: 'BDP5X0P3RLY', text: () => import('./assets-chunks/styles-ORCMNZ5K_css.mjs').then(m => m.default)}
  },
};
