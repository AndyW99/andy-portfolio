function importAll(r) {
  return r.keys().reduce((acc, item) => {
    const folder = item.split("/")[1];
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(r(item));
    return acc;
  }, {});
}

// Importăm toate imaginile
const images = importAll(
  require.context("../../assets/img/portfolio", true, /\.webp$/i)
);

// Generăm PortfolioData
const PortfolioData = Object.entries(images).map(
  ([folder, folderImages], index) => {
    return {
      id: index + 1,
      title: folder.replace(/_/g, " "),
      images: folderImages,
      delayAnimation: "200",
    };
  }
);

export default PortfolioData;
