const inventory = []

function findProductIndex (productName) {
  const lowerCaseName = productName.toLowerCase();
  return inventory.findIndex(product => product.name.toLowerCase() === lowerCaseName);
}

function addProduct (product) {
  const normalizedName = product.name.toLowerCase();
  const productIndex = findProductIndex(normalizedName);

  if (productIndex !== -1) {
    inventory[productIndex].quantity += product.quantity;
    console.log(`${inventory[productIndex].name} quantity updated`);
    return true;
  }

  inventory.push({ name: normalizedName, quantity: product.quantity });
  console.log(`${normalizedName} added to inventory`);
  return true;
}

function removeProduct (name, quantity) {
  const normalizedName = name.toLowerCase();
  const productIndex = findProductIndex(normalizedName);

  if (productIndex === -1) {
    console.log(`${normalizedName} not found`);
    return false;
  } else if (inventory[productIndex].quantity < quantity) {
    console.log(`Not enough ${normalizedName} available, remaining pieces: ${inventory[productIndex].quantity}`);
    return false;
  } else {
    inventory[productIndex].quantity -= quantity;
    console.log(`Remaining ${normalizedName} pieces: ${inventory[productIndex].quantity}`);

    if (inventory[productIndex].quantity === 0) {
      inventory.splice(productIndex, 1);
    }

    return true;
  }
}
