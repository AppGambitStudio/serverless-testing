const { spawn } = require('child_process');

let slsOfflineProcess;

const finishLoading = () =>
  new Promise((resolve, reject) => {
    slsOfflineProcess.stdout.on('data', data => {
      if (data.includes('server ready')) {
        console.log(data.toString().trim());
        console.log(`Serverless: Offline started with PID : ${slsOfflineProcess.pid}`);
        resolve('ok');
      }

      if (data.includes('Address already in use')) {
        reject(data.toString().trim());
      }
    });

    slsOfflineProcess.stderr.on('data', errData => {
      console.log(`Error starting Serverless Offline:\n${errData}`);
      reject(errData);
    });
  });

function startSlsOffline() {
  const cmdArr = 'offline --stage dev'.split(' ');
  slsOfflineProcess = spawn('sls', cmdArr, { shell: true, cwd: process.cwd() });

  slsOfflineProcess.stdout.pipe(process.stdout);

  return finishLoading();
}

function stopSlsOffline() {
  slsOfflineProcess.stdin.write('q\n');
  slsOfflineProcess.stdin.pause();
  slsOfflineProcess.kill();

  console.log('Serverless Offline stopped');
}

module.exports = {
  stopSlsOffline,
  startSlsOffline
};