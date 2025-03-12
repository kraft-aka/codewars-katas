function htmlEndTagByStartTag(startTag) {
  let tag = startTag.replace(/[<>]/g, "").split(" ")[0];
  return "</" + tag + ">";
}
