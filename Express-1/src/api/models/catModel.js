const catItems = [
  {cat_id: 1, name: "whiskers", weight: 4.5 },
  {cat_id: 2, name: "Felix", weight: 5.2 }

];
const getCatsFromModel = () => catItems;
const getCatByIdFromModel = (id) => catItems.find((cat) => cat.cat_id === id );
const addCatToModel = (catData) =>{
  const newCat = {
    cat_id: catItems.length ? catItems[catItems.length - 1].cat_id + 1 : 1,
    ...catData
  };
  catItems.push(newCat);
  return newCat;
};
export {getCatsFromModel, getCatByIdFromModel, addCatToModel };

