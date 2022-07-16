function renderPopup(name, data) {
  const item = data.stock.find((item) => item.title === name);
  return `
  <div class="popup-body">
    <div class="pupup-img">
      <img src="/img/trucks/${item.image}" alt="${item.title}" />
    </div>
    <button type="button" class="btn-close" aria-label="Close"></button>
    <h4 class="popup-title">
      ${item.title}
    </h4>
    <ul class="pupup-info-list list-group">
      <li class="list-group-item list-group-item-secondary">
        <span>Price</span><span>${item.price} ${item.price_currency}</span>
      </li>
      <li class="list-group-item"><span>Make</span><span>${item.make}</span></li>
      <li class="list-group-item list-group-item-secondary">
        <span>Model</span> <span>${item.model}</span>
      </li>
      <li class="list-group-item"><span class="type">Type</span><span>${item.type}</span></li>
      <li class="list-group-item list-group-item-secondary">
        <span>Year</span> <span>${item.year}</span>
      </li>
      <li class="list-group-item"><span>Mileage</span><span>${item.mileage} ${item.mileage_measure}</span></li>
      <li class="list-group-item list-group-item-secondary">
        <span>Axle configuration</span><span>${item.axle_configuration}</span>
      </li>
      <li class="list-group-item"><span>Power</span><span>${item.power} ${item.power_measure}</span></li>
      <li class="list-group-item list-group-item-secondary">
        <span>Payload</span><span>${item.payload}</span>
      </li>
      <li class="list-group-item"><span>Gross weight</span> <span>${item.gross_weight}</span></li>
    </ul>
  </div>`;
}
