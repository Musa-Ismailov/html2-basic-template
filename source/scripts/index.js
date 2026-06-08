const sliderElement = document.querySelector('.catalog__slider');
const minValueElement = document.querySelector('.catalog__value--min');
const maxValueElement = document.querySelector('.catalog__value--max');

if (sliderElement.noUiSlider) {
  sliderElement.noUiSlider.destroy();
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1000,
  },
  start: [0, 900],
  step: 1,
  connect: true,
});

sliderElement.noUiSlider.on('update', (values) => {

  minValueElement.value = Math.round(values[0]);
  maxValueElement.value = Math.round(values[1]);
});
