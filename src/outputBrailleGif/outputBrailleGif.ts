#!/usr/bin/env node

import getTrickWithStanceFileNames from './fs/getTrickWithStanceFilesNames';
import outputFramesSequentially from './fs/outputFramesSequentially';

const outputBrailleGif = async (): Promise<void> => {
  const trickWithStancePath = `output/${process.env.INPUT_GIF}`;
  const frameNames = await getTrickWithStanceFileNames(trickWithStancePath);
  outputFramesSequentially(frameNames);
};

outputBrailleGif();
