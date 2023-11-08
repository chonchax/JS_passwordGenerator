import readlineSync from "readline-sync";

export function prompt(question) {
  // readlineSync.question returns the user's input once they hit enter
  const answer = readlineSync.question(question);

  return answer;
}
