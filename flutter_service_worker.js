'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b959ceb9acc0cc48a464cb3bf60e4cbd",
"version.json": "fd280121f17c30b92568257b1104ab3b",
"index.html": "0998824ca49e083efa00a3ae547bb174",
"/": "0998824ca49e083efa00a3ae547bb174",
"main.dart.js": "1250b19698a86d79030368e96174411a",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "582b3d53bb7da2d6551d4d14ff8e0324",
".git/AUTO_MERGE": "00dae8a75077b301818f89ec3475e56f",
".git/ORIG_HEAD": "48224c574ab51fdde385d8314296db48",
".git/config": "109e7d276aa3549a10795cacaa0c8bb7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/eda01789412ea197e2f4d8cf58d3a2d6933856": "fd1927f8d39b600c3d334da727da2e2b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/93/5671bb3a05a8e835eafc99f8bd777d7a298560": "4bfb71c8650324b9ad068e4482d1ec2e",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/33/606a5d8f41938c76776d46081fc8f8608baac8": "d54a101fc23f35f1d8866c4b81e9d7f9",
".git/objects/ac/718cc6fa9ff16f9ddcade3a2fce78701724231": "273538fd87f30843652d4b68dd46151a",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/1e7689e8508da089d8e39397bfd1db007d601a": "ba83c049f186a309c94995d36cf107ca",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a2/34720d1b6197bbce4d4b75dd2f4e995ab43b1b": "acf520305219813a18bf0fe79b99593c",
".git/objects/a2/a2b3ea2e8b36e82067e53b40b3ba9c6f0fcb44": "0680fab9a9b76b0cfd987a955fe162e2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/5718dacfbf331ca1b71409cdf228cfa74b77da": "de54408805da19cde0f41d27bb495679",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/e2095fc8f0ff4e837c22bef665cd60e7359166": "d110e5705cce86693b86ad08692323c1",
".git/objects/c9/749a547e80f100f945d5f94e20887d955aa7ea": "99f030f732dae226c563f12f7e1fb8b5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/7c/68e555b6c214597da60f7e2e00a254ba333aef": "fd5a69e23c5d9101a45bb3affa16aa73",
".git/objects/89/ca5ed8d2105c339032e64fd0ae749e0d02e6e6": "5cd0b55550ca330d55775c77b410a265",
".git/objects/1f/22d309701d40474abccf729d1c6560a43afb98": "0094c5a97bb50f2deadc540ce4e520ae",
".git/objects/74/a6cd154fc4b58850e9014554cf1f594e63e58e": "634fde138a16f78920d5fc714fbdd88d",
".git/objects/7b/6f9223e20d7db33608e5f3aae496e57ef9b671": "57b60b1718a4b127b0f4040728440cbf",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/95847a03764ddc466427096c39c7f68b21d786": "de872711431478f5aac12e1f49a5e86f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/6c/f8e3c251038812852f61d23d41b8a23e82cc62": "7572df37f1633fdde4f4fe9d499356d0",
".git/objects/52/ce24d5decc430e9dd2d7f06e37e53e44001e70": "9c4c68c939553eea14b6151edf30ee2a",
".git/objects/55/f0c2a2b4ec8865b4cba73f146dc2cc9238313d": "ede7fc9adf91ff41fdb5bbe1e2cb90c1",
".git/objects/97/7a544555a646a9005692894015c1691c59a241": "d288203401da60533a07a00f45a6c490",
".git/objects/0f/c4171788f52212144c2c2ff31a7130c00caaba": "a6b01dcf9c055e3c3dd1e021076ee3e3",
".git/objects/64/189c34454d7280a226158007cb17f6c508ec11": "d1883760a5367df3c854f0214383d948",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/229c45232835174210558d404b5f7e71f99d32": "889ae442e46980c09d1960a016a9b341",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/1059a33476d5edca5a7a468472473c2e5720d0": "54678b232bb54c08c92e855d7bf187d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/1fe760cd010b6e0487a53ef83c5a19385c502c": "652bf28b6e796db1f5966ba08cf3f4c7",
".git/objects/e7/753dfc94ad9e6f9d38c0f402d1b0ce9d4ac0f5": "03026e9f2696fda428af6c83cfcc0b16",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/e067ecf9fd3c5bc05b746b5732b04a3aed8059": "95ea212a84e5ab9e4ee8ec573c5a34ea",
".git/objects/48/19c7ebd568fddf5c12de43df1be6113dc10f4b": "e035abb27a146636d089b9c65d84cc75",
".git/objects/84/c4e1ba842fb7cd6577a8822ae6fc854615ff90": "e8c75a3f4909cc182aab0c2a365bcdaa",
".git/objects/15/57cf1b0ad7a90d41b71b57bab0bfc5ffbae7a3": "3ccb6e3f6c8d79427a1ed95d3c5e94c3",
".git/objects/12/bfc69a33540031324836f5d71e5c9c5b802fb4": "d1e51648219e52de431a20e2dec1ddd6",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2b/f15b4921a51d80a29e259c116a7da904e82bea": "83860d8123bdd7345aff6ed525edcf75",
".git/objects/47/00c219630380558641c4844b0984ac152479d0": "f5bcd6b2834671168908c7cf4b558589",
".git/objects/14/70265292d72af7515027125e15b7e72a5ff46f": "fb67628c648842db6b6f98d0af26f835",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b496ad9f2b1955cda2c9d1575a3194e9",
".git/logs/refs/heads/main": "53f0215850a06ff533b36f0ab73f1df3",
".git/logs/refs/remotes/origin/main": "e28613c3667fb662916b808d4d0d73c5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8daa2067e74008dfc05bc9f9ffd0e4d9",
".git/refs/remotes/origin/main": "8daa2067e74008dfc05bc9f9ffd0e4d9",
".git/index": "0d2095a33103180d6350f9afb3701a09",
".git/COMMIT_EDITMSG": "593ac34a3384097a0908e777b160b3cc",
".git/FETCH_HEAD": "a874621f09ad87549c6c76224a2bcdcb",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "9030c0d4d760defaf6fa77afd65ec9cd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "3f19809190a2866b6849ce17d97f26cc",
"canvaskit/canvaskit.js.symbols": "4e057eda12866a5b55673b200c2ca372",
"canvaskit/skwasm.wasm": "b32a9969e65a7f573044b758f53ce3cf",
"canvaskit/chromium/canvaskit.js.symbols": "1a402b5f22e7bf3062421e850d025c3b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "85712bbf9dc9b01ec7be9a001e834c7c",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "59fddb8ae82f2156f987d6fce4584928",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
