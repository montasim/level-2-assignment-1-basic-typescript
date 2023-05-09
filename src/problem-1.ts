const logFunction = (logMessage: string, logRepetition: number = 3): void => {
  for (let i: number = 1; i <= logRepetition; i++) {
    console.log(logMessage);
  }
};

logFunction('Hello world', 5);
logFunction('Testing log function');
