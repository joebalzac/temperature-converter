const inputOne = document.querySelector('#input-one');
const inputTwo = document.querySelector('#input-two');
const selectOne = document.querySelector('#select-one');
const selectTwo = document.querySelector('#select-two');
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');
const tempForm = document.querySelector('#temp-form');

const convertCelsius = ((inputOne.value - 32) * 5) / 9;
const convertFahrenheit = (inputTwo.value * 9) / 5 + 32;
const convertKelvinCelsius = inputOne.value - 273.15;
const convertKelvinFahrenheit = ((inputOne.value - 273.15) * 9) / 5 + 32;

const formReset = () => {
	inputOne.value = '';
	inputTwo.value = '';

	selectOne.value = 'fahrenheit';
	selectTwo.value = 'celsius';
};

const calculateResults = () => {
	console.log('Calculating...');

	if (selectOne.value === 'fahrenheit' && selectTwo.value === 'celsius') {
		inputTwo.value = convertCelsius.toFixed(2);
	} else if (
		selectOne.value === 'celsius' &&
		selectTwo.value === 'fahrenheit'
	) {
		inputTwo.value = convertFahrenheit.toFixed(2);
	} else if (selectOne.value === 'kelvin' && selectTwo.value === 'celsius') {
		inputTwo.value = convertKelvinCelsius.toFixed(2);
	} else if (
		selectOne.value === 'kelvin' &&
		selectTwo.value === 'fahrenheit'
	) {
		inputTwo.value = convertKelvinFahrenheit.toFixed(2);
	} else {
		showError('Please input numbers');
	}
};

inputOne.addEventListener('keyup', () => {
	calculateResults();
	setTimeout(formReset, 3000);
});

// selectOne.addEventListener('change', () => {
// 	if ((selectOne.selectedIndex = '0')) {
// 		selectTwo.selectedIndex = '1';
// 	} else if ((selectOne.selectedIndex = '1')) {
// 		selectTwo.selectedIndex = '2';
// 	} else if ((selectOne.selectedIndex = '2')) {
// 		selectTwo.selectedIndex = '0';
// 	}
// });

function showError(error) {
	const errorMessage = document.createElement('div');
	errorMessage.appendChild(document.createTextNode(error));
	errorMessage.className =
		'error-message text-red-500 font-bold capitilize text-center mb-5';
	card.insertBefore(errorMessage, heading);

	setTimeout(clearError, 3000, formReset, 4000);
}
