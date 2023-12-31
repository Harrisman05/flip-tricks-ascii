import getFramesNum from './getFramesNum';

const getTrickFrameNames = async (trickWithStancePath: string): Promise<string[]> => {
  const fileCount = await getFramesNum(trickWithStancePath);

  const frameFileName = `${trickWithStancePath.split('/')[3]}_frame-`;
  const frameNameTemplate = `${trickWithStancePath}/${frameFileName}`;

  const frameNames = [];

  for (let i = 1; i <= fileCount; i++) {
    frameNames.push(`${frameNameTemplate}${i}.txt`);
  }

  return frameNames;
};

export default getTrickFrameNames;
