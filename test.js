let savedResolve, savedReject;

const myPromise = new Promise((resolve, reject) => {
  savedResolve = resolve;
  savedReject = reject;
});

// savedResolve("Ami resolve hoye geci");

myPromise
  .then((value) => console.log("Promise Resolved", value))
  .catch((err) => console.log("Promise Rejected", err));

setTimeout(() => {
  savedReject("error occured");
}, 3000);
