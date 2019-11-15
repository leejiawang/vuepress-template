/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55334b49372dc81dd22e50d19ae5071b"
  },
  {
    "url": "assets/css/0.styles.db529a3b.css",
    "revision": "4f667ed4246cdf36334a80fad12ab814"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.da928b7c.js",
    "revision": "82d91a394f9f8fa2ae2024e75ef90d91"
  },
  {
    "url": "assets/js/11.a36c9316.js",
    "revision": "c0ee6d31876198eab6fb0d8fc088bd06"
  },
  {
    "url": "assets/js/12.b265a259.js",
    "revision": "4db270c734079253df3912704541f528"
  },
  {
    "url": "assets/js/13.d396a8f5.js",
    "revision": "a9ee460befabcbb210732060801516f0"
  },
  {
    "url": "assets/js/14.fc6eb518.js",
    "revision": "16ec365247bebec76ee5607a6273cda4"
  },
  {
    "url": "assets/js/15.bc46edc0.js",
    "revision": "432d296b16eae9d8dbc9465822de38ba"
  },
  {
    "url": "assets/js/16.fd58fe0e.js",
    "revision": "b04961081b5f7fd6a6212ffcd357a36c"
  },
  {
    "url": "assets/js/17.405de681.js",
    "revision": "ab00a3e2a275319d8dd565ed04279fcd"
  },
  {
    "url": "assets/js/18.e7e9426d.js",
    "revision": "b997fc0e687abd18daa4fde7da553d6f"
  },
  {
    "url": "assets/js/19.990b5157.js",
    "revision": "b2fae02498771c24c34793effb7ed276"
  },
  {
    "url": "assets/js/20.2f446866.js",
    "revision": "877d5cda94426442329caea9fd37c9af"
  },
  {
    "url": "assets/js/21.cecbad9d.js",
    "revision": "76c4365bf285a736b63dc264b80958ab"
  },
  {
    "url": "assets/js/22.e583a081.js",
    "revision": "677a55bf3e7ffcde0475e5e39fa5b0d3"
  },
  {
    "url": "assets/js/23.36b63d2d.js",
    "revision": "1b03b6a85a36f44e6374d61edf891a6e"
  },
  {
    "url": "assets/js/24.b8a22951.js",
    "revision": "c541488e9685f091d1eeb65e63a4eda1"
  },
  {
    "url": "assets/js/25.baff7101.js",
    "revision": "904cf6d4359513f0560a02fab51fbca2"
  },
  {
    "url": "assets/js/26.792136a1.js",
    "revision": "50c8eb2213959dd7ac88a61de13171a6"
  },
  {
    "url": "assets/js/27.02cb6f63.js",
    "revision": "95213436ca082cbfb43ee0435a9ec6cc"
  },
  {
    "url": "assets/js/28.4bf29273.js",
    "revision": "0d4e5c77b2b849ef1762afc19b148b00"
  },
  {
    "url": "assets/js/29.8fb6357e.js",
    "revision": "591eef7d9428e7e90159b2a2e74ff231"
  },
  {
    "url": "assets/js/3.496e41df.js",
    "revision": "a65ed00f9ae11d5112dab10e88e3b2dd"
  },
  {
    "url": "assets/js/30.d0eb6383.js",
    "revision": "cc53f1e92dba48d03095518e2b7c80e2"
  },
  {
    "url": "assets/js/31.f1d1a43a.js",
    "revision": "fc4f114ec05ca5cc6d40386bc755d012"
  },
  {
    "url": "assets/js/32.bbda577e.js",
    "revision": "5e4f3661c02a8571178a9867b15294ed"
  },
  {
    "url": "assets/js/33.6a54af48.js",
    "revision": "f8dd63195a9be833d643d8014ad151c1"
  },
  {
    "url": "assets/js/34.c5f4cbd8.js",
    "revision": "9901769f59d8f43e3f7365165e9d1af3"
  },
  {
    "url": "assets/js/4.078053c0.js",
    "revision": "cc7da2d9a1a327aa1b8553e9b9ee3d20"
  },
  {
    "url": "assets/js/5.73180ef9.js",
    "revision": "0dde99cf8dbf507ee50ef901f4d4f7ac"
  },
  {
    "url": "assets/js/6.e8be5580.js",
    "revision": "f78f3345df28170f21c3a39d44c08429"
  },
  {
    "url": "assets/js/7.95e78c7d.js",
    "revision": "85d7b29bd73540aaf7a67dac97299bf3"
  },
  {
    "url": "assets/js/8.85d8b0b2.js",
    "revision": "3fbbbeec0ff1b8f480d10787759bef3c"
  },
  {
    "url": "assets/js/9.90332c31.js",
    "revision": "9e3de4b68f2ca3943b800d9babeb1768"
  },
  {
    "url": "assets/js/app.21d0704c.js",
    "revision": "d3d0ff895df9cf7197b66e2102c9b2ad"
  },
  {
    "url": "assets/js/vendors~notification.370f69e3.js",
    "revision": "6aaee707bad6eeb11277520a8387a984"
  },
  {
    "url": "design/colors.html",
    "revision": "d256aec126a88b97c08ea10102039f34"
  },
  {
    "url": "design/emoji.html",
    "revision": "13c6d64ba36030c470f44878b18345c4"
  },
  {
    "url": "design/freefonts.html",
    "revision": "3440db00031d56ebbfcffa29af83665a"
  },
  {
    "url": "design/index.html",
    "revision": "3eb9f2859763094d8530fcad0d722858"
  },
  {
    "url": "design/resource.html",
    "revision": "1feddf7831d3543ed3dd4cc2ce28cf1c"
  },
  {
    "url": "en/index.html",
    "revision": "0a03aa9d650cc19849854b40d8ebfcc2"
  },
  {
    "url": "hackintosh/index.html",
    "revision": "42ccd60ea317f4a00bd58770c7c408a2"
  },
  {
    "url": "hackintosh/kexts.html",
    "revision": "8f6896130ab3334253110337bb342bfc"
  },
  {
    "url": "hackintosh/source.html",
    "revision": "e8aa41b31de9071514ba1cd8d89f4dd9"
  },
  {
    "url": "hardware/android.html",
    "revision": "ef2a85d35b07bb2f14c093a99810c736"
  },
  {
    "url": "hardware/index.html",
    "revision": "13d152cdb8732e58151111af3d1505df"
  },
  {
    "url": "hardware/windowstips.html",
    "revision": "6daaea0bdba2c4ddd65838bdf9a1702f"
  },
  {
    "url": "icon.png",
    "revision": "c0f7e23b2b2cff3afdb4d3db9faef90a"
  },
  {
    "url": "index.html",
    "revision": "1c8cc9d0792f769db8ffba9ee3be8c39"
  },
  {
    "url": "lee.jpg",
    "revision": "d872919169799de1dfa238e48788771b"
  },
  {
    "url": "web/googlefonts.html",
    "revision": "98e97ed19b732e0e645e106b767c85ef"
  },
  {
    "url": "web/hexo.html",
    "revision": "42ed214182a4cff480e1e211c6d6dc70"
  },
  {
    "url": "web/hugo.html",
    "revision": "d4c597f87b87b28456d0a7a356cff56d"
  },
  {
    "url": "web/index.html",
    "revision": "3d8c9e1ecbc051936771973937f2ca5f"
  },
  {
    "url": "web/markdown.html",
    "revision": "5dd5f7f3d4a7151840aa0e95f4348479"
  },
  {
    "url": "web/source.html",
    "revision": "b7cf1526e535ae3924c655dd859697ac"
  },
  {
    "url": "web/vuepress.html",
    "revision": "0cb66024c67a428b0d8d3e09a6340172"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
