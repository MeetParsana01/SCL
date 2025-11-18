export function generateFormats(input) {
  const plain = "Input:\n" + input.trim();
  const jsonFmt = JSON.stringify({ content: input }, null, 2);
  const compactJson = JSON.stringify({ c: input }).replace(/\s+/g, "");
  const toon = `🎯 CONTENT:\n${input}`;
  const scl1 = `OBJ:content\nDATA:${input.replace(/\n/g," ")}`;
  const scl2 = `O:C\nD:${input.replace(/\n/g," ")}`;
  return { plain, jsonFmt, compactJson, toon, scl1, scl2 };
}
