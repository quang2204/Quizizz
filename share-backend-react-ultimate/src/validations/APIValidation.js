"use strict";
function _0x1170(_0x4e930a, _0x4b6750) {
  var _0x383e93 = _0x383e();
  return (
    (_0x1170 = function (_0x1170b3, _0x34430a) {
      _0x1170b3 = _0x1170b3 - 0x1cc;
      var _0x12a973 = _0x383e93[_0x1170b3];
      return _0x12a973;
    }),
    _0x1170(_0x4e930a, _0x4b6750)
  );
}
var _0x2fcc17 = _0x1170;
(function (_0x5dd256, _0x149edd) {
  var _0x44946a = _0x1170,
    _0x54da77 = _0x5dd256();
  while (!![]) {
    try {
      var _0x3fc9db =
        parseInt(_0x44946a(0x1d2)) / 0x1 +
        -parseInt(_0x44946a(0x1ce)) / 0x2 +
        (-parseInt(_0x44946a(0x1f4)) / 0x3) *
          (-parseInt(_0x44946a(0x1eb)) / 0x4) +
        parseInt(_0x44946a(0x1f2)) / 0x5 +
        (parseInt(_0x44946a(0x1e1)) / 0x6) *
          (parseInt(_0x44946a(0x1cc)) / 0x7) +
        parseInt(_0x44946a(0x1de)) / 0x8 +
        (parseInt(_0x44946a(0x1d9)) / 0x9) *
          (-parseInt(_0x44946a(0x1f1)) / 0xa);
      if (_0x3fc9db === _0x149edd) break;
      else _0x54da77["push"](_0x54da77["shift"]());
    } catch (_0x187644) {
      _0x54da77["push"](_0x54da77["shift"]());
    }
  }
})(_0x383e, 0x6699e);
function _0x383e() {
  var _0x4f4e1e = [
    "vPostQuiz",
    "vGetQuizWithQA",
    "number",
    "vRefreshToken",
    "2825328oHEjim",
    "string",
    "array",
    "6gbMvGe",
    "vProfile",
    "vPostQuizWithQA",
    "trim",
    "vPutParticipant",
    "min",
    "vPostParticipant",
    "vDeleteAnswer",
    "allow",
    "defineProperty",
    "4XBFBQq",
    "vLogin",
    "vPostQuizSubmit",
    "vPutAnswer",
    "items",
    "object",
    "2782330zublIY",
    "2199230xUQZrh",
    "vChangePassword",
    "2391399kmmxJm",
    "vLogout",
    "required",
    "vPutQuestion",
    "vRegister",
    "vGetParticipant",
    "vGetQuestionByQuiz",
    "vDeleteQuestion",
    "vDeleteQuiz",
    "1353569AUruJW",
    "keys",
    "1437596ajxfnE",
    "vDeleteParticipant",
    "vPutQuiz",
    "alternatives",
    "468472TWBQVr",
    "vPostAnswer",
    "integer",
    "vPostQuizAssign",
    "default",
    "joi",
    "boolean",
    "36NNVIhP",
  ];
  _0x383e = function () {
    return _0x4f4e1e;
  };
  return _0x383e();
}
Object[_0x2fcc17(0x1ea)](exports, "__esModule", { value: !0x0 }),
  (exports[_0x2fcc17(0x1f8)] =
    exports[_0x2fcc17(0x1dd)] =
    exports[_0x2fcc17(0x1d0)] =
    exports[_0x2fcc17(0x1f7)] =
    exports["vPutParticipant"] =
    exports[_0x2fcc17(0x1ee)] =
    exports["vProfile"] =
    exports["vPostQuizWithQA"] =
    exports[_0x2fcc17(0x1ed)] =
    exports[_0x2fcc17(0x1d5)] =
    exports[_0x2fcc17(0x1da)] =
    exports["vPostQuestion"] =
    exports["vPostParticipant"] =
    exports[_0x2fcc17(0x1d3)] =
    exports[_0x2fcc17(0x1f5)] =
    exports[_0x2fcc17(0x1ec)] =
    exports[_0x2fcc17(0x1db)] =
    exports[_0x2fcc17(0x1fa)] =
    exports[_0x2fcc17(0x1f9)] =
    exports["vDeleteQuiz"] =
    exports[_0x2fcc17(0x1fb)] =
    exports[_0x2fcc17(0x1cf)] =
    exports["vDeleteAnswer"] =
    exports[_0x2fcc17(0x1f3)] =
      void 0x0);
var _joi = _interopRequireDefault(require(_0x2fcc17(0x1d7)));
function _interopRequireDefault(_0x53f50f) {
  return _0x53f50f && _0x53f50f["__esModule"]
    ? _0x53f50f
    : { default: _0x53f50f };
}
var vRegister = {
    body: _joi[_0x2fcc17(0x1d6)]
      [_0x2fcc17(0x1f0)]()
      [_0x2fcc17(0x1cd)]({
        email: _joi[_0x2fcc17(0x1d6)]["string"]()["trim"]()[_0x2fcc17(0x1f6)](),
        username: _joi[_0x2fcc17(0x1d6)]
          [_0x2fcc17(0x1df)]()
          [_0x2fcc17(0x1e4)]()
          [_0x2fcc17(0x1f6)](),
        password: _joi[_0x2fcc17(0x1d6)]
          ["string"]()
          [_0x2fcc17(0x1e4)]()
          [_0x2fcc17(0x1f6)](),
        delay: _joi[_0x2fcc17(0x1d6)]
          [_0x2fcc17(0x1d1)](
            _joi["default"]["string"](),
            _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1dc)]()
          )
          [_0x2fcc17(0x1e9)]("", null),
      }),
  },
  vLogin =
    ((exports[_0x2fcc17(0x1f8)] = vRegister),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        ["object"]()
        [_0x2fcc17(0x1cd)]({
          email: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          password: _joi["default"]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          delay: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1d1)](
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1df)](),
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1dc)]()
            )
            ["allow"]("", null),
        }),
    }),
  vRefreshToken =
    ((exports[_0x2fcc17(0x1ec)] = vLogin),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          email: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            ["trim"]()
            [_0x2fcc17(0x1f6)](),
          refresh_token: _joi["default"]
            [_0x2fcc17(0x1df)]()
            ["trim"]()
            [_0x2fcc17(0x1f6)](),
          delay: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1d1)](
              _joi[_0x2fcc17(0x1d6)]["string"](),
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1dc)]()
            )
            [_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vLogout =
    ((exports[_0x2fcc17(0x1dd)] = vRefreshToken),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        ["keys"]({
          email: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          refresh_token: _joi["default"]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          delay: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1d1)](
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1df)](),
              _joi["default"][_0x2fcc17(0x1dc)]()
            )
            [_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vChangePassword =
    ((exports["vLogout"] = vLogout),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        ["object"]()
        [_0x2fcc17(0x1cd)]({
          current_password: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            ["required"](),
          new_password: _joi["default"]["string"]()["trim"]()["required"](),
          delay: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1d1)](
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1df)](),
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1dc)]()
            )
            [_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vProfile =
    ((exports[_0x2fcc17(0x1f3)] = vChangePassword),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        ["keys"]({
          username: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            ["trim"]()
            [_0x2fcc17(0x1f6)](),
          userImage: _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1e9)]("", null),
          delay: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1d1)](
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1df)](),
              _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1dc)]()
            )
            [_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vGetParticipant =
    ((exports[_0x2fcc17(0x1e2)] = vProfile),
    {
      query: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          page: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
          limit: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            ["integer"]()
            [_0x2fcc17(0x1e6)](0x1)
            ["required"](),
        }),
    }),
  vPostParticipant =
    ((exports[_0x2fcc17(0x1f9)] = vGetParticipant),
    {
      body: _joi["default"]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          email: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            ["trim"]()
            [_0x2fcc17(0x1f6)](),
          password: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          username: _joi["default"]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          role: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          userImage: _joi[_0x2fcc17(0x1d6)]["allow"]("", null),
        }),
    }),
  vPutParticipant =
    ((exports[_0x2fcc17(0x1e7)] = vPostParticipant),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        ["object"]()
        ["keys"]({
          id: _joi["default"]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            ["min"](0x1)
            [_0x2fcc17(0x1f6)](),
          username: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1e9)]("", null),
          role: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1e9)]("", null),
          userImage: _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vDeleteParticipant =
    ((exports[_0x2fcc17(0x1e5)] = vPutParticipant),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          id: _joi["default"]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
        }),
    }),
  vPostQuiz =
    ((exports[_0x2fcc17(0x1cf)] = vDeleteParticipant),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        ["keys"]({
          description: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)]()
            [_0x2fcc17(0x1e9)]("", null),
          name: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          difficulty: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          quizImage: _joi[_0x2fcc17(0x1d6)]["allow"]("", null),
        }),
    }),
  vPutQuiz =
    ((exports[_0x2fcc17(0x1da)] = vPostQuiz),
    {
      body: _joi["default"]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          id: _joi[_0x2fcc17(0x1d6)]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            ["required"](),
          description: _joi["default"]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            ["required"]()
            ["allow"]("", null),
          name: _joi["default"]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          difficulty: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          quizImage: _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vDeleteQuiz =
    ((exports[_0x2fcc17(0x1d0)] = vPutQuiz),
    {
      params: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          id: _joi[_0x2fcc17(0x1d6)]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            ["min"](0x1)
            ["required"](),
        }),
    }),
  vPostQuestion =
    ((exports[_0x2fcc17(0x1fc)] = vDeleteQuiz),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        ["object"]()
        ["keys"]({
          quiz_id: _joi["default"]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            ["min"](0x1)
            [_0x2fcc17(0x1f6)](),
          description: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          questionImage: _joi[_0x2fcc17(0x1d6)][_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vPutQuestion =
    ((exports["vPostQuestion"] = vPostQuestion),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        ["keys"]({
          id: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            ["integer"]()
            ["min"](0x1)
            ["required"](),
          quiz_id: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            ["required"](),
          description: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            [_0x2fcc17(0x1e4)]()
            ["required"](),
          questionImage: _joi["default"][_0x2fcc17(0x1e9)]("", null),
        }),
    }),
  vDeleteQuestion =
    ((exports[_0x2fcc17(0x1f7)] = vPutQuestion),
    {
      body: _joi["default"]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          id: _joi[_0x2fcc17(0x1d6)]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
          quizId: _joi["default"]
            ["number"]()
            ["integer"]()
            ["min"](0x1)
            ["required"](),
        }),
    }),
  vGetQuestionByQuiz =
    ((exports[_0x2fcc17(0x1fb)] = vDeleteQuestion),
    {
      query: _joi["default"]
        [_0x2fcc17(0x1f0)]()
        ["keys"]({
          quizId: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            ["required"](),
        }),
    }),
  vPostAnswer =
    ((exports[_0x2fcc17(0x1fa)] = vGetQuestionByQuiz),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          description: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1df)]()
            ["trim"]()
            ["required"](),
          correct_answer: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1d8)]()
            [_0x2fcc17(0x1f6)](),
          question_id: _joi[_0x2fcc17(0x1d6)]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            ["min"](0x1)
            [_0x2fcc17(0x1f6)](),
        }),
    }),
  vPutAnswer =
    ((exports["vPostAnswer"] = vPostAnswer),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        ["object"]()
        [_0x2fcc17(0x1cd)]({
          description: _joi[_0x2fcc17(0x1d6)]
            ["string"]()
            [_0x2fcc17(0x1e4)]()
            [_0x2fcc17(0x1f6)](),
          correct_answer: _joi["default"]["boolean"]()["required"](),
          question_id: _joi[_0x2fcc17(0x1d6)]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
          answer_id: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            ["required"](),
        }),
    }),
  vDeleteAnswer =
    ((exports["vPutAnswer"] = vPutAnswer),
    {
      params: _joi["default"]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          id: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            ["min"](0x1)
            [_0x2fcc17(0x1f6)](),
        }),
    }),
  vPostQuizSubmit =
    ((exports[_0x2fcc17(0x1e8)] = vDeleteAnswer),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          quizId: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            ["required"](),
          answers: _joi["default"]
            ["array"]()
            [_0x2fcc17(0x1ef)]({
              questionId: _joi[_0x2fcc17(0x1d6)]
                [_0x2fcc17(0x1dc)]()
                [_0x2fcc17(0x1d4)]()
                [_0x2fcc17(0x1e6)](0x1)
                [_0x2fcc17(0x1f6)](),
              userAnswerId: _joi[_0x2fcc17(0x1d6)]
                ["array"]()
                [_0x2fcc17(0x1ef)](
                  _joi[_0x2fcc17(0x1d6)]
                    ["number"]()
                    [_0x2fcc17(0x1d4)]()
                    [_0x2fcc17(0x1e9)]("")
                )
                ["required"](),
            }),
        }),
    }),
  vPostQuizAssign =
    ((exports["vPostQuizSubmit"] = vPostQuizSubmit),
    {
      body: _joi["default"]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          userId: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
          quizId: _joi["default"]
            ["number"]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
        }),
    }),
  vGetQuizWithQA =
    ((exports[_0x2fcc17(0x1d5)] = vPostQuizAssign),
    {
      params: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        ["keys"]({
          quizId: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            ["integer"]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
        }),
    }),
  vPostQuizWithQA =
    ((exports[_0x2fcc17(0x1db)] = vGetQuizWithQA),
    {
      body: _joi[_0x2fcc17(0x1d6)]
        [_0x2fcc17(0x1f0)]()
        [_0x2fcc17(0x1cd)]({
          quizId: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1dc)]()
            [_0x2fcc17(0x1d4)]()
            [_0x2fcc17(0x1e6)](0x1)
            [_0x2fcc17(0x1f6)](),
          questions: _joi[_0x2fcc17(0x1d6)]
            [_0x2fcc17(0x1e0)]()
            [_0x2fcc17(0x1ef)]({
              id: _joi[_0x2fcc17(0x1d6)]
                [_0x2fcc17(0x1dc)]()
                [_0x2fcc17(0x1d4)]()
                [_0x2fcc17(0x1e6)](0x1)
                [_0x2fcc17(0x1f6)](),
              description: _joi[_0x2fcc17(0x1d6)]
                [_0x2fcc17(0x1df)]()
                [_0x2fcc17(0x1e4)]()
                [_0x2fcc17(0x1f6)]()
                ["allow"](""),
              imageFile: _joi[_0x2fcc17(0x1d6)]
                [_0x2fcc17(0x1df)]()
                [_0x2fcc17(0x1e4)]()
                [_0x2fcc17(0x1f6)]()
                ["allow"](""),
              imageName: _joi["default"]
                [_0x2fcc17(0x1df)]()
                [_0x2fcc17(0x1e4)]()
                [_0x2fcc17(0x1f6)]()
                [_0x2fcc17(0x1e9)](""),
              answers: _joi[_0x2fcc17(0x1d6)]
                ["array"]()
                [_0x2fcc17(0x1ef)]({
                  id: _joi["default"]
                    [_0x2fcc17(0x1dc)]()
                    [_0x2fcc17(0x1d4)]()
                    ["min"](0x1)
                    ["required"](),
                  description: _joi[_0x2fcc17(0x1d6)]
                    [_0x2fcc17(0x1df)]()
                    [_0x2fcc17(0x1e4)]()
                    [_0x2fcc17(0x1f6)]()
                    ["allow"](""),
                  isCorrect: _joi[_0x2fcc17(0x1d6)]
                    [_0x2fcc17(0x1d8)]()
                    [_0x2fcc17(0x1f6)](),
                }),
            }),
        }),
    });
exports[_0x2fcc17(0x1e3)] = vPostQuizWithQA;
