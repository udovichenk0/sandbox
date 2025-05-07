const fsp = require('node:fs/promises');
const os = require('node:os');
(async () => {

  const file = await fsp.open('./t.txt');

  const size = (await file.stat()).size;

  const threadsCount = os.cpus().length;

  const chunkSize = Math.floor(size / threadsCount);
  const chunkOffsets = [];
  const MAX_LINE_LENGTH = 100 + 1 + 4 + 1;
  let offset = 0;
  const bufFindNl = Buffer.alloc(MAX_LINE_LENGTH);

  while (true) {
    console.log(bufFindNl)
    offset += chunkSize;
    console.log(size)
    console.log(offset)
    if (offset >= size) {
      console.log("leave")
      chunkOffsets.push(size);
      break;
    }

    await file.read(bufFindNl, 0, MAX_LINE_LENGTH, offset);

    console.log(bufFindNl)
    const nlPos = bufFindNl.indexOf(10);
    console.log(nlPos)

    if (nlPos === -1) {
      chunkOffsets.push(size);
      break;
    } else {
      offset += nlPos + 1;
      chunkOffsets.push(offset);
    }
  }
  file.close() 
  console.log(chunkOffsets)
})()