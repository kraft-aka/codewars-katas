//Computer problem series #1: Fill the Hard Disk Drive

function save(sizes, hd) {
  let space = 0;
  let files = 0;
  for (let i = 0; i < sizes.length; i++) {
    if (space + sizes[i] <= hd) {
      space += sizes[i];
      files++;
    } else if (sizes[i] === 0) {
      files++;
    } else {
      break;
    }
  }
  return files;
}
