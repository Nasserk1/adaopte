SELECT animals.*, b.name as breed, shelters.name as shelter, shelters.address, types.name as type FROM animals 
JOIN breeds as b ON animals.breed_id = b.id
JOIN shelters ON animals.shelter_id = shelters.id
JOIN types ON b.type_id = types.id
WHERE gender = "male"