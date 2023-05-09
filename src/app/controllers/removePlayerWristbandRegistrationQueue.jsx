export default (appRef) => ({
  removePlayerWristbandRegistrationQueue: async (queue, player) =>
    new Promise((resolve, reject) => {
      if (player?.wristband?.pairing) {
        appRef.current
          .toggleWristbandPairing(queue, player)
          .then((newQueue) =>
            resolve(newQueue.filter((p) => p.username !== player.username))
          )
          .catch(reject);
      } else {
        resolve(queue.filter((p) => p.username !== player.username));
      }
    }),
});
