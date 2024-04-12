async function readData(reader: any): Promise<any> {
  const { value, done } = await reader.read();
}
