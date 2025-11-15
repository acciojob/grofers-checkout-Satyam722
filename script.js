const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // 1️⃣ Get all prices
  const priceList = document.querySelectorAll(".prices");

  // 2️⃣ Calculate total
  let total = 0;
  priceList.forEach((price) => {
    total += Number(price.textContent);
  });

  // 3️⃣ Create new row
  const table = document.querySelector("table");
  const row = document.createElement("tr");
  const cell = document.createElement("td");

  // rowspan = full width of table
  cell.setAttribute("colspan", "2");
  cell.textContent = `Total Price = ${total}`;

  row.appendChild(cell);
  table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);


