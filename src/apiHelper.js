// get the top giphy stickers to use as items
async function getAPIData() {
  const key = 'ieAImKLCMr3MRyKct42s8BMVBEdSgL0A';
  const limit = 20;

  const response = await fetch(`https://api.giphy.com/v1/stickers/trending?api_key=${key}&limit=${limit}`, { mode: 'cors' });
  const json = await (response.json());
  const itemData = json.data.map((value) => {
    const { title, id } = value;
    const src = value.images.downsized_medium.url;
    const alt = title;
    return {
      title, src, alt, id,
    };
  });
  return Promise.resolve(itemData);
}

export default { getAPIData };
