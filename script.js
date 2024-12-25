function rolldice(){
  const textBox = document.getElementById("textBox").value;
  const diceResult = document.getElementById("diceResult");
  const imageResult = document.getElementById("imageResult");
  const values = [];
  const images = [];

  for (let i = 0; i < textBox; i++) {
    const value = Math.floor(Math.random() * 6) +1;
    values.push(value);
    images.push(`<img src = "/dice_images/Dice-${value}.png" alt="Dice ${value}">`);
  }
  diceResult.textContent = `dice: ${values.join(', ')}`;
  imageResult.innerHTML = images.join('');
}