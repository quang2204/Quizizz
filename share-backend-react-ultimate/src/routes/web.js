"use strict";
var _0xe3c7a8 = _0x5ccb;
(function (_0x5a3a4b, _0x3774c4) {
  var _0x2aa8a4 = _0x5ccb,
    _0x14ef7a = _0x5a3a4b();
  while (!![]) {
    try {
      var _0x59368c =
        parseInt(_0x2aa8a4(0xd1)) / 0x1 +
        (parseInt(_0x2aa8a4(0xca)) / 0x2) * (-parseInt(_0x2aa8a4(0xcb)) / 0x3) +
        parseInt(_0x2aa8a4(0xd5)) / 0x4 +
        parseInt(_0x2aa8a4(0xc5)) / 0x5 +
        (-parseInt(_0x2aa8a4(0xc9)) / 0x6) * (parseInt(_0x2aa8a4(0xd3)) / 0x7) +
        -parseInt(_0x2aa8a4(0xcd)) / 0x8 +
        (parseInt(_0x2aa8a4(0xc6)) / 0x9) * (parseInt(_0x2aa8a4(0xd0)) / 0xa);
      if (_0x59368c === _0x3774c4) break;
      else _0x14ef7a["push"](_0x14ef7a["shift"]());
    } catch (_0x41cca1) {
      _0x14ef7a["push"](_0x14ef7a["shift"]());
    }
  }
})(_0x3858, 0x5912b);
function _0x5ccb(_0x17e627, _0x3e293e) {
  var _0x385885 = _0x3858();
  return (
    (_0x5ccb = function (_0x5ccbd5, _0x4b4290) {
      _0x5ccbd5 = _0x5ccbd5 - 0xc5;
      var _0x8f6c8f = _0x385885[_0x5ccbd5];
      return _0x8f6c8f;
    }),
    _0x5ccb(_0x17e627, _0x3e293e)
  );
}
Object["defineProperty"](exports, "__esModule", { value: !0x0 }),
  (exports["default"] = void 0x0);
var _express = _interopRequireDefault(require(_0xe3c7a8(0xcc))),
  _homeController = _interopRequireDefault(require(_0xe3c7a8(0xce)));
function _0x3858() {
  var _0x1f821a = [
    "5264703ugVFKp",
    "__esModule",
    "default",
    "318UNtSgz",
    "28bsnyng",
    "64131eTRPhM",
    "express",
    "4337920HpOpaz",
    "../controller/homeController",
    "use",
    "10UTLOCt",
    "719003PaGLYK",
    "get",
    "58961ADPvjO",
    "handleHelloWord",
    "800980kIBzly",
    "742825ernzMu",
  ];
  _0x3858 = function () {
    return _0x1f821a;
  };
  return _0x3858();
}
function _interopRequireDefault(_0x8293d3) {
  var _0x41a958 = _0xe3c7a8;
  return _0x8293d3 && _0x8293d3[_0x41a958(0xc7)]
    ? _0x8293d3
    : { default: _0x8293d3 };
}
var router = _express["default"]["Router"](),
  initWebRoutes = function (_0x3befec) {
    var _0x48eb90 = _0xe3c7a8;
    return (
      router[_0x48eb90(0xd2)](
        "/",
        _homeController[_0x48eb90(0xc8)][_0x48eb90(0xd4)]
      ),
      _0x3befec[_0x48eb90(0xcf)]("/", router)
    );
  },
  _default = initWebRoutes;
exports[_0xe3c7a8(0xc8)] = _default;
