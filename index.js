describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  });
  function shout(string) {
    return string.toUpperCase();
  }
  // logShout(string)
  // takes a string argument and logs it in all caps using console.log()
  function whisper(string) {
    return string.toLowerCase();
  }

// 2) logShout(string)
// takes a string argument and logs it in all caps using console.log()
function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // 3) logWhisper(string)
  // takes a string argument and logs it in all lowercase using console.log()
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  //sayHiToHeadphonedRoommate(string)
  //return "I can't hear you!" if "string" is lowercase
  //return YES INDEED!"if string is uppercase"
  // return "I would love to!" if string is "Let's have dinner together"
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}

