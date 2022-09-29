// async function fun() {
// 	console.log('Atualizou')
// 	const res = await fetch('http://localhost:3000/api/products', {
// 		method: 'POST',
// 		mode: 'cors',
// 		cache: 'no-cache',
// 		headers: {
// 			'Content-Type': 'application/json'
// 		},
// 		body: {
// 			'prod_name': "random",
// 			'description': "random",
// 			'category': "random",
// 			'price': "random",
// 			'prod_date': "random",
// 			'body': "random",
// 		}
// 	}
// 	return ()
// 	).then(res => {
// 		console.log(res);
// 	})
// }

async function fun(url = '', data = {}) {
  // Default options are marked with *

//   data = {
// 	destinationAddress: "random",
// 	duedate: "random",
// 	body: "random",
//   }
  console.log(JSON.stringify(data));
	// debugger;
  jsonData = JSON.stringify(data);
	
  const response = await fetch(url, {
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors', // no-cors, *cors, same-origin
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	// credentials: 'same-origin', // include, *same-origin, omit
			// headers: {
			//   'Content-Type': 'application/json',
			//   'Access-Control-Allow-Origin': 'http://localhost:3000'
			//   // 'Content-Type': 'application/x-www-form-urlencoded',
			// },
	redirect: 'follow', // manual, *follow, error
	referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
	body: jsonData // body data type must match "Content-Type" header
  });
//   debugger;
  return response.json(); // parses JSON response into native JavaScript objects
}

function postData(url)
{
	d = {
		destinationAddress: "random",
		dueDate: "2022-09-22",
		body: "random"
	};
	fun(url, d).then((data) => {
		console.log(data); // JSON data parsed by `data.json()` call
	});
}



// form = document.getElementById("form");

// form.addEventListener("sumbit", (e) => {

// 	prodName = document.getElementById("prodName");
// 	category = document.getElementById("category");
// 	description = document.getElementById("description");
// 	price = document.getElementById("price");
// 	img = document.getElementById("image");

// 	e.preventDefault();
// })

container = document.getElementById("container");
console.log(container);
async function addProduct() {

	products = await fetch("http://localhost:3000/api/products", {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	}).then(res => res.json()).then(data => {
		console.log(data);
		value = data;
	});

	// jsonProd = products.json();
	// console.log(jsonProd);

	for (let obj of value)
	{
		let card = `
		<div class="card">
			<div class="box">
				<img src=${obj['img']} alt=${obj['prod_name']}>
				<h3>${obj['prod_name']}</h3>
			</div>
		</div>
		`
		console.log(container);
		container.innerHTML += card;
	}
}


addProduct();
