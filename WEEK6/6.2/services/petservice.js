// This acts like a fake database for now
const Pets = [
  { id: 1, name: 'Bella', type: 'Dog', breed: 'Labrador Retriever', age: 3 },
  { id: 2, name: 'Max', type: 'Cat', breed: 'Siamese', age: 2 },
  { id: 3, name: 'Charlie', type: 'Dog', breed: 'Beagle', age: 4 },
  { id: 4, name: 'Luna', type: 'Rabbit', breed: 'Dutch', age: 1 },
  { id: 5, name: 'Coco', type: 'Bird', breed: 'Cockatiel', age: 5 }
];  
  // Service function to get all food items
  const getAllPets = () => {
    return Pets;
  };
  
  module.exports = {
    getAllPets
  };
  