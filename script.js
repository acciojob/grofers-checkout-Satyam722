const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1. Get all prices
  const priceList = document.querySelectorAll(".price"); // test uses .price
  let total = 0;

  priceList.forEach((price) => {
    total += Number(price.textContent);
  });

  // 2. Create the new row and cell
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  // IMPORTANT: test expects #ans
  cell.id = "ans";
  cell.textContent = total;

  // Make it full-width (if table has 2 cols)
  cell.setAttribute("colspan", "2");

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
