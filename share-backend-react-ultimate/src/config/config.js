"use strict";
var _0x24ca97 = _0x4435;
function _0x4435(_0xebaab7, _0x21bd1e) {
  var _0x172d2a = _0x172d();
  return (
    (_0x4435 = function (_0x443598, _0x20fc79) {
      _0x443598 = _0x443598 - 0xe9;
      var _0x3250e2 = _0x172d2a[_0x443598];
      return _0x3250e2;
    }),
    _0x4435(_0xebaab7, _0x21bd1e)
  );
}
function _0x172d() {
  var _0x44533a = [
    "dotenv",
    "DB_SSL",
    "2087208JRajSl",
    "exports",
    "DB_USERNAME",
    "127.0.0.1",
    "DB_DIALECT",
    "1053342qxCoyV",
    "15364DQmAVh",
    "+07:00",
    "6PRfhNP",
    "2247058UETYhM",
    "DB_PORT",
    "287970uzZaax",
    "114vNlBav",
    "2443056cCZWZz",
    "DB_PASSWORD",
    "env",
    "50sGPpxK",
    "root",
    "true",
    "database_production",
    "1ZQxMpO",
    "262168gDAaec",
    "database_test",
    "mysql",
    "DB_HOST",
    "DB_DATABASE_NAME",
  ];
  _0x172d = function () {
    return _0x44533a;
  };
  return _0x172d();
}
(function (_0xa7575a, _0x3b93b3) {
  var _0x4ea3ba = _0x4435,
    _0x19fbce = _0xa7575a();
  while (!![]) {
    try {
      var _0x201509 =
        (-parseInt(_0x4ea3ba(0xea)) / 0x1) * (parseInt(_0x4ea3ba(0xeb)) / 0x2) +
        (parseInt(_0x4ea3ba(0xfe)) / 0x3) * (-parseInt(_0x4ea3ba(0xf8)) / 0x4) +
        (-parseInt(_0x4ea3ba(0xfd)) / 0x5) * (parseInt(_0x4ea3ba(0xfa)) / 0x6) +
        -parseInt(_0x4ea3ba(0xff)) / 0x7 +
        -parseInt(_0x4ea3ba(0xf2)) / 0x8 +
        parseInt(_0x4ea3ba(0xf7)) / 0x9 +
        (parseInt(_0x4ea3ba(0x102)) / 0xa) * (parseInt(_0x4ea3ba(0xfb)) / 0xb);
      if (_0x201509 === _0x3b93b3) break;
      else _0x19fbce["push"](_0x19fbce["shift"]());
    } catch (_0x197e99) {
      _0x19fbce["push"](_0x19fbce["shift"]());
    }
  }
})(_0x172d, 0x2f55b);
require(_0x24ca97(0xf0))["config"](),
  (module[_0x24ca97(0xf3)] = {
    development: {
      username: process["env"][_0x24ca97(0xf4)],
      password: process[_0x24ca97(0x101)][_0x24ca97(0x100)],
      database: process[_0x24ca97(0x101)][_0x24ca97(0xef)],
      host: process["env"][_0x24ca97(0xee)],
      port: process[_0x24ca97(0x101)][_0x24ca97(0xfc)],
      dialect: process["env"][_0x24ca97(0xf6)],
      define: { freezeTableName: !0x0 },
      dialectOptions:
        _0x24ca97(0x104) === process[_0x24ca97(0x101)][_0x24ca97(0xf1)]
          ? { ssl: { require: !0x0, rejectUnauthorized: !0x1 } }
          : {},
      timezone: _0x24ca97(0xf9),
    },
    test: {
      username: _0x24ca97(0x103),
      password: null,
      database: _0x24ca97(0xec),
      host: _0x24ca97(0xf5),
      dialect: "mysql",
    },
    production: {
      username: "root",
      password: null,
      database: _0x24ca97(0xe9),
      host: _0x24ca97(0xf5),
      dialect: _0x24ca97(0xed),
    },
  });
