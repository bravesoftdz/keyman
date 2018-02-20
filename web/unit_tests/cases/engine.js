var assert = chai.assert;

function runEngineRuleSet(ruleSet, defaultNoun) {
  var inputElem = document.getElementById('singleton');
  if(inputElem['kmw_ip']) {
    inputElem = inputElem['kmw_ip'];
  }

  defaultNoun = defaultNoun ? defaultNoun : "Rule";

  for(var i = 0; i < ruleSet.length; i++) {
    var ruleDef = ruleSet[i];

    var matchDefs = [{
        sequence: ruleDef.baseSequence,
        result: true,
        msg: "Rule " + ruleDef.id + ":  basic application of rule failed."}
      ].concat(ruleDef.fullMatchDefs ? ruleDef.fullMatchDefs : []);

    for(var j = 0; j < matchDefs.length; j++) {
      // Prepare the context!
      var matchTest = matchDefs[j];
      var ruleSeq = new KMWRecorder.InputTestSequence(matchTest.sequence);
      ruleSeq.simulateSequenceOn(inputElem);

      // Now for the real test!
      var res = keyman.interface.fullContextMatch(ruleDef.n, inputElem, ruleDef.rule);

      var msg = matchTest.msg;
      if(!msg) {
        msg = defaultNoun + " incorrectly reported as " + (matchTest.result ? "unmatched!" : "matched!"); 
      }
      assert.equal(res, matchTest.result, msg);

      // Cleanup the context!
      window['keyman'].resetContext();
    }
  }
}

/*
 *  Start definition of isolated rule tests for validity of `fullContextMatch` (KFCM) components.
 */
var DEADKEY_TEST_1 = {
  id: 1,
  // Match condition for rule
  rule: [{d: 1}],
  // Start of context relative to cursor
  n: 1,
  ln: 1,
  // Resulting context map
  contextCache: [1],
  baseSequence: { "output": "", "inputs": [
    {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "", "inputs": [
      // Does it fail with a different deadkey in the position?
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 1:  did not fail when incorrect deadkey was present."
  }, {
    sequence: { "output": "", "inputs": [
      // Slightly out-of-context deadkey shouldn't affect the match.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 1:  failed when extra deadkey context exists in history."
  }, {
    sequence: { "output": "", "inputs": [
      // Slightly out-of-context deadkey shouldn't affect the match.
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 1:  did not fail upon incorrect deadkey ordering at top of context."
  }]
};

var DEADKEY_TEST_2 = {
  id: 2,
  // Match condition for rule
  rule: ['a', {d: 0}, {d: 1}, 'b'],
  // Start of context relative to cursor
  n: 5,
  ln: 4,
  // Resulting context map
  contextCache: ['a', 0, 1, 'b'],
  baseSequence: { "output": "ab", "inputs": [
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    // The test has an extra character appended that's not part of the check.
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "ab", "inputs": [
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      // Should fail with inverted deadkey ordering at same KC_ position.
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      // The test has an extra character appended that's not part of the check.
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 2:  did not fail when deadkey ordering was inverted."
  }, {
    sequence: { "output": "ab", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      // The test has an extra character appended that's not part of the check.
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 2:  failed when extra character context exists in history."
  }, {
    sequence: { "output": "ab", "inputs": [
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      // The test has an extra deadkey appended that's not part of the check.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 2:  out-of-context deadkey caused rule match failure."
  }, {
    sequence: { "output": "ab", "inputs": [
      // Should not fail with a deadkey prepended to the context.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      // The test has an extra character appended that's not part of the check.
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 2:  prepended (out of context) deadkey caused rule match failure."
  }]
};

var DEADKEY_TEST_3 = {
  id: 3,
  // Match condition for rule
  rule: [{d: 0}, 'a', {d: 0}, {d: 0}, 'b'],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: [0, 'a', 0, 0, 'b'],
  baseSequence: { "output": "ab", "inputs": [
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "ab", "inputs": [
      // Omission of the first deadkey should result in failure.
      //{"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 3:  required prepended deadkey omission did not prevent a rule match."
  }, {
    sequence: { "output": "ab", "inputs": [
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      // Omission of the one of the duplicated deadkeys should result in failure.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 3:  omitting one copy of a required duplicated deadkey did not prevent a rule match."
  }, {
    sequence: { "output": "ab", "inputs": [
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      // Triplifying deadkeys in the center should result in failure.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 3:  triple matching deadkeys where only two required did not prevent a rule match."
  }, {
    sequence: { "output": "ab", "inputs": [
      // Should not fail with a duplicate deadkey prepended to the context.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3:  duplicate prepended deadkey prevented a rule match when only one was required."
  }, {
    sequence: { "output": "ab", "inputs": [
      // Should not fail with an unrelated deadkey prepended to the context before the required one.
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3:  prepended deadkey placed before rule's deadkey prevented a rule match."
  }, {
    sequence: { "output": "ab", "inputs": [
      // Should not fail with a duplicate deadkey prepended to the context.
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 3:  prepended deadkey after rule's required deadkey failed to prevent a rule match."
  }]
};

var DEADKEY_TEST_4 = {
  id: 4,
  // Match condition for rule
  rule: ['a', {d: 0}, {d: 0}, 'b', {d: 0}],
  // Start of context relative to cursor
  n: 6,
  ln: 5,
  // Resulting context map
  contextCache: ['a', 0, 0, 'b', 0],

  baseSequence: { "output": "ab", "inputs": [
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    // The test has an extra character appended that's not part of the check.
    {"type":"key","key":"c","code":"KeyC","keyCode":66,"modifierSet":0,"location":0}
  ]}
  // No specialized fullMatchDefs here, as any appended deadkeys are automatically 'in context' for rules.
};

var DEADKEY_TEST_5 = {
  id: 5,
  // Match condition for rule
  rule: ['a', 'b', 'b', 'a'],
  // Start of context relative to cursor
  n: 5,
  ln: 4,
  // Resulting context map
  contextCache: ['a', 'b', 'b', 'a'],

  baseSequence: { "output": "ab", "inputs": [
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    // The test has an extra character appended that's not part of the check.
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
  ]}
};

var DEADKEY_TEST_6 = {
  id: 6,
  // Match condition for rule
  rule: [{d: 1}, {d: 2}, {d: 0}, {d: 1}, {d: 2}],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: [1, 2, 0, 1, 2],

  baseSequence: { "output": "ab", "inputs": [
    // Testing with an extra deadkey at the start.
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
    {"type":"key","key":"3","code":"Digit3","keyCode":51,"modifierSet":0,"location":0},
    {"type":"key","key":"1","code":"Digit1","keyCode":49,"modifierSet":0,"location":0},
    {"type":"key","key":"2","code":"Digit2","keyCode":50,"modifierSet":0,"location":0},
    {"type":"key","key":"3","code":"Digit3","keyCode":51,"modifierSet":0,"location":0},
  ]}
};

var ANY_CONTEXT_TEST_1 = {
  id: 1,
  // Match condition for rule
  rule: ['c', "a", "b", {c:3}, {c:2}],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: ['c', 'a', 'b', 'b', 'a'],

  baseSequence: { "output": "cabba", "inputs": [
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "cacca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 1: Plain text mismatch with successful context() statements is matching the rule."
  }, {
    sequence: { "output": "cabaa", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 1: mismatched context() rule component is not failing the rule."
  }]
};

var ANY_CONTEXT_TEST_2 = {
  id: 2,
  // Match condition for rule
  rule: ['c', 'a', {a: "bc"}, {c:3}, 'a'],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: ['c', 'a', 'b', 'b', 'a'],

  baseSequence: { "output": "cabba", "inputs": [
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "cacca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 2: Alternate 'any' store character failed to match the rule."
  }, {
    sequence: { "output": "cabca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 2: 'any' and 'context' correspond to mismatching characters, but matched the rule."
  }]
};

var ANY_CONTEXT_TEST_3 = {
  id: 3,
  // Match condition for rule
  rule: ['c', {a: "ac"}, {a: "bc"}, {c:3}, {c:2}],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: ['c', 'a', 'b', 'b', 'a'],

  baseSequence: { "output": "cabba", "inputs": [
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "cacca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3: Alternate 'any' store character failed to match the rule."
  }, {
    sequence: { "output": "ccccc", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3: Alternate 'any' store character failed to match the rule."
  }, {
    sequence: { "output": "cabab", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 3: context() rule component is matching the incorrect any() component."
  }]
};

var ANY_INDEX_TEST_1 = {
  id: 1,
  // Match condition for rule
  rule: ['c', 'a', {a: "bc"}, {i:{s:"bc", o:2}}, 'a'],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: ['c', 'a', 'b', 'b', 'a'],

  baseSequence: { "output": "cabba", "inputs": [
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "cacca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 1: Alternate 'any' store character failed to match the rule."
  }, {
    sequence: { "output": "cabca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 1: 'any' and 'output' correspond to mismatching characters, but matched the rule."
  }]
};

var ANY_INDEX_TEST_2 = {
  id: 2,
  // Match condition for rule
  rule: ['c', {a:"ab"}, {i: {s:"bc", o:1}}, {i:{s:"bc", o:1}}, {i:{s:"ab", o:1}}],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: ['c', 'a', 'b', 'b', 'a'],

  baseSequence: { "output": "cabba", "inputs": [
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "cacca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 2: Mismatch with secondary output store did not fail the rule."
  }, {
    sequence: { "output": "cbccb", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 2: Alternate 'any' store character failed to match the rule."
  }]
};

var ANY_INDEX_TEST_3 = {
  id: 3,
  // Match condition for rule
  rule: ['c', {a:"ab"}, {a:"bc"}, {i:{s:"bc", o:2}}, {i:{s:"ab", o:1}}],
  // Start of context relative to cursor
  n: 5,
  ln: 5,
  // Resulting context map
  contextCache: ['c', 'a', 'b', 'b', 'a'],

  baseSequence: { "output": "cabba", "inputs": [
    {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
    {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
  ]},
  fullMatchDefs: [{
    sequence: { "output": "cacca", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"a","code":"KeyA","keyCode":65,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3a: Error with index() when a rule has multiple any() checks."
  }, {
    sequence: { "output": "cbccb", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3b: Error with index() when a rule has multiple any() checks."
  }, {
    sequence: { "output": "cbbbb", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0}
    ]},
    result: true,
    msg: "Rule 3c: Error with index() when a rule has multiple any() checks."
  }, {
    sequence: { "output": "cbccc", "inputs": [
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"b","code":"KeyB","keyCode":66,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0},
      {"type":"key","key":"c","code":"KeyC","keyCode":67,"modifierSet":0,"location":0}
    ]},
    result: false,
    msg: "Rule 3: index() rule check matched the incorrect any()."
  }]
};

var DEADKEY_RULE_SET = [ DEADKEY_TEST_1, DEADKEY_TEST_2, DEADKEY_TEST_3, DEADKEY_TEST_4, 
  DEADKEY_TEST_5, DEADKEY_TEST_6 
];
var ANY_CONTEXT_RULE_SET = [ ANY_CONTEXT_TEST_1, ANY_CONTEXT_TEST_2, ANY_CONTEXT_TEST_3];
var ANY_INDEX_RULE_SET = [ ANY_INDEX_TEST_1, ANY_INDEX_TEST_2, ANY_INDEX_TEST_3 ];

var FULL_RULE_SET = [].concat(DEADKEY_RULE_SET, ANY_CONTEXT_RULE_SET, ANY_INDEX_RULE_SET);

/*
 *  End definition of isolated rule testing.
 */

describe('Engine', function() {

  before(function(done) {
    this.timeout(10000);

    fixture.setBase('unit_tests/fixtures');
    setupKMW(null, done, 10000);
  });

  beforeEach(function(done) {
    fixture.load("singleInput.html");
    
    window.setTimeout(function() {
      done()
    }, 50);
  });
  
  after(function() {
    teardownKMW();
  });

  afterEach(function() {
    fixture.cleanup();
  });
  
  describe('Keyboard Loading', function() {
    it('Local', function(done) {
      this.timeout(10000);

      var test_callback = function() {
        assert.equal(keyman.getActiveKeyboard(), "Keyboard_lao_2008_basic", "Keyboard not set correctly!");
        keyman.removeKeyboards('lao_2008_basic');
        assert.equal(keyman.getActiveKeyboard(), '', "Keyboard not removed correctly!");
        done();
      }

      loadKeyboardFromJSON("/keyboards/lao_2008_basic.json", test_callback, 10000);
    });
  });

  // Performs basic processing system checks/tests to ensure the sequence testing
  // is based on correct assumptions about the code.
  describe('Processing', function() {
    before(function(done){
      this.timeout = 10000;
      // We use this keyboard here because it defines a few deadkeys for us to work with.
      loadKeyboardFromJSON("/keyboards/test_simple_deadkeys.json", done, 10000);
    });

    beforeEach(function() {
      var inputElem = document.getElementById('singleton');
      inputElem.value = "";
    });

    after(function() {
      keyman.removeKeyboards('test_simple_deadkeys');
      fixture.cleanup();
    });

    // Tests "stage 1" of fullContextMatch - ensuring that a proper context index map is built.
    it('Extended Context Mapping', function() {
      var inputElem = document.getElementById('singleton');
      if(inputElem['kmw_ip']) {
        inputElem = inputElem['kmw_ip'];
      }

      for(var i = 0; i < FULL_RULE_SET.length; i++) {
        var ruleDef = FULL_RULE_SET[i];

        // Prepare the context!
        var ruleSeq = new KMWRecorder.InputTestSequence(ruleDef.baseSequence);
        ruleSeq.simulateSequenceOn(inputElem);

        // Now for the real test!
        var res = keyman.interface._BuildExtendedContext(ruleDef.n, ruleDef.ln, inputElem);

        assert.sameOrderedMembers(res.valContext, ruleDef.contextCache);

        // Cleanup the context!
        window['keyman'].resetContext();
      }
    });

    // Tests deadkey and plain key interactions for `fullContextMatch`.
    it('Deadkey + Plain Text Rules', function() {
      runEngineRuleSet(DEADKEY_RULE_SET, "Deadkeys");
    });

    // Tests any(), context(), and plain key interactions for `fullContextMatch`.
    it('Any + Context Rules', function() {
      runEngineRuleSet(ANY_CONTEXT_RULE_SET);
    });

    // Tests any(), index(), and plain key interactions for `fullContextMatch`.
    it('Any + Index Rules', function() {
      runEngineRuleSet(ANY_INDEX_RULE_SET);
    });

    // TODO:  add a 'resetContext' test!
  })

  // Performs basic processing system checks/tests to ensure the sequence testing
  // is based on correct assumptions about the code.
  describe('Simulation Checks', function() {
    before(function(done){
      this.timeout = 10000;
      loadKeyboardFromJSON("/keyboards/lao_2008_basic.json", done, 10000);
    });

    beforeEach(function() {
      var inputElem = document.getElementById('singleton');
      inputElem.value = "";
    });

    after(function() {
      keyman.removeKeyboards('lao_2008_basic');
      fixture.cleanup();
    });

    it('Simple Keypress', function() {
      var inputElem = document.getElementById('singleton');
      if(inputElem['kmw_ip']) {
        inputElem = inputElem['kmw_ip'];
      }

      var lao_s_key_json = {"type": "key", "key":"s", "code":"KeyS","keyCode":83,"modifierSet":0,"location":0};
      var lao_s_event = new KMWRecorder.PhysicalInputEvent(lao_s_key_json);

      lao_s_event.simulateEventOn(inputElem);

      if(inputElem['base']) {
        inputElem = inputElem['base'];
      }
      assert.equal(inputElem.value, "ຫ");
    });

    it('Simple OSK click', function() {
      var inputElem = document.getElementById('singleton');
      if(inputElem['kmw_ip']) {
        inputElem = inputElem['kmw_ip'];
      }

      var lao_s_osk_json = {"type": "osk", "keyID": 'shift-K_S'};
      var lao_s_event = new KMWRecorder.OSKInputEvent(lao_s_osk_json);

      lao_s_event.simulateEventOn(inputElem);

      if(inputElem['base']) {
        inputElem = inputElem['base'];
      }
      assert.equal(inputElem.value, ";");
    });
  })

  describe('Sequence Simulation Checks', function() {
    this.timeout(10000);

    it('Keyboard simulation', function(done) {
      runKeyboardTestFromJSON('/engine_tests/basic_lao_simulation.json', {usingOSK: false}, done, assert.equal, 10000);
    });

    it('OSK simulation', function(done) {
      runKeyboardTestFromJSON('/engine_tests/basic_lao_simulation.json', {usingOSK: true}, done, assert.equal, 10000);
    })
  });
});