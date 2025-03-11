/*  
  Fetch the JSON data
  used as replacement text in html page
  see details in readme
*/

fetch('./data.json').then(async (response) => {
  try {
    const data = await response.json();
    // populate variables
    document.getElementById('page-title').textContent = data.title;
    document.getElementById('company').textContent = data.company;
    document.getElementById('owner').textContent =
      data.forename + ' ' + data.surname;
    document.getElementById('domain').textContent = data.domain;
    document.getElementById('page-Heading').textContent = data.heading;
    document.getElementById('street').textContent = data.street;
    document.getElementById('zipcode').textContent = data.zipcode;
    document.getElementById('city').textContent = data.city;
    document.getElementById('phone').textContent = data.phone;
    document.getElementById('email').textContent = data.email;
    document.getElementById('fax').textContent = data.fax;

    const dateElement = document.createElement('p');
    dateElement.textContent = 'Last Edit Date: ' + data.date;
    // Append the elements to the "dateDisplay" div
    date.appendChild(dateElement);

    const addressElement = document.createElement('p');
    addressElement.textContent =
      'Postal address: ' + data.street + ', ' + data.zipcode + ', ' + data.city;
    // Append the elements to the "addressDisplay" div
    address.appendChild(addressElement);

    console.log('response data?', data);
  } catch (error) {
    console.log('Error happened here!');
    console.error(error);
  }
});

function showDetails(customer) {
  let customerType = customer.getAttribute('data-customer-type');
  alert('The ' + customer.innerHTML + ' is a ' + customerType + '.');
}
