import {
  EXIT_FAILURE,
  EXIT_SUCCESS,
  ERROR_FTA_SCORE,
  WARNING_FTA_SCORE,
  PADDING_DEFAULT,
} from './constants.js';
import path from 'path';
import fs from 'fs';
import {
  execSync,
} from 'child_process';

const platform = process.platform;
const architecture = process.arch;

// eslint-disable-next-line complexity
const getBinaryPath = () => {
  const targetDirectory = path.join(
    process.cwd(),
    'node_modules',
    'fta-cli',
    'binaries',
  );

  switch (platform) {
    case 'win32':
      if (architecture === 'x64') {
        return path.join(targetDirectory, 'x86_64-pc-windows-msvc', 'fta.exe',);
      }
      if (architecture === 'arm64') {
        return path.join(
          targetDirectory,
          'aarch64-pc-windows-msvc',
          'fta.exe',
        );
      }
      break;
    case 'darwin':
      if (architecture === 'x64') {
        return path.join(targetDirectory, 'x86_64-apple-darwin', 'fta',);
      } else if (architecture === 'arm64') {
        return path.join(targetDirectory, 'aarch64-apple-darwin', 'fta',);
      }
      break;
    case 'linux':
      if (architecture === 'x64') {
        return path.join(targetDirectory, 'x86_64-unknown-linux-musl', 'fta',);
      } else if (architecture === 'arm64') {
        return path.join(targetDirectory, 'aarch64-unknown-linux-musl', 'fta',);
      } else if (architecture === 'arm') {
        return path.join(targetDirectory, 'arm-unknown-linux-musleabi', 'fta',);
      }
      break;
    default:
      throw new Error('Unsupported platform: ' + platform,);
  }

  throw new Error('Binary not found for the current platform',);
};

const setUnixPerms = (binaryPath,) => {
  if (platform === 'darwin' || platform === 'linux') {
    try {
      fs.chmodSync(binaryPath, '755',);
    } catch (e) {
      //eslint-disable-next-line no-console
      console.warn('Could not chmod fta binary: ', e,);
    }
  }
};

const binary = getBinaryPath();
setUnixPerms(binary,);
const output = JSON.parse(execSync(
  `${ binary } ${ process.cwd() } --json`,
  {
    encoding: 'utf8',
    stdio: 'pipe',
  },
).toString(),);

let hardToMaintain = false;
let maxLength = 0;
let maxScore = 0;
let maxAfter = 0;

for (const file of output) {
  file.name = `/${ file.file_name }`;
  maxLength = maxLength > file.name.length ? maxLength : file.name.length;
  maxScore = maxScore > `${ file.fta_score }`.split('.',).shift().length
    ? maxScore
    : `${ file.fta_score }`.split('.',).shift().length;
  maxAfter = maxAfter > `${ file.fta_score }`.split('.',).pop().length
    ? maxScore
    : `${ file.fta_score }`.split('.',).pop().length;
}

for (const file of output) {
  const padding = new Array(maxLength - file.name.length + PADDING_DEFAULT,)
    .fill(' ',)
    .join('',);
  const before = new Array(
    maxScore
    - `${ file.fta_score }`.split('.',).shift().length
    + PADDING_DEFAULT,
  )
    .fill(' ',)
    .join('',);
  const after = new Array(
    maxAfter
    - `${ file.fta_score }`.split('.',).pop().length
    + PADDING_DEFAULT,
  )
    .fill('0',)
    .join('',);
  const message = [
    `${ file.name }${ padding }`,
    `${ before }${ file.fta_score }${ after.replace(/0$/u, ' ',) }`,
    ` ${ file.assessment }`,
  ].join('|',);
  if (file.fta_score > ERROR_FTA_SCORE) {
    hardToMaintain = true;
    //eslint-disable-next-line no-console
    console.error(message,);
  } else if (file.fta_score > WARNING_FTA_SCORE) {
    //eslint-disable-next-line no-console
    console.warn(message,);
  } else {
    //eslint-disable-next-line no-console
    console.log(message,);
  }
}

process.exit(hardToMaintain ? EXIT_FAILURE : EXIT_SUCCESS,);
