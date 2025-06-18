const time = async (ms) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
const fetchuserdetails = async (userdetails) => {
  console.log(userdetails);
  await time(3000);
  return `https//sampleimage.com/${userdetails}`;
};

const downlaodimage = async (imageurl) => {
  console.log(imageurl);
  await time(3000);
  return `https//imagerender.com/${imageurl}`;
};

const showimage = async (image) => {
  await time(3000);
  console.log(image);
};
const run = async () => {
  const imageurl = await fetchuserdetails("john");
  const image = await downlaodimage(imageurl);
  await showimage(image);
};

run();
