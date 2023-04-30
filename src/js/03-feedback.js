import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

const inputText = throttle(() => {
  const email = refs.email.value;
  const message = refs.textarea.value;
  const feedbackFormState = { email, message };
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

refs.email.addEventListener('input', inputText);
refs.textarea.addEventListener('input', inputText);
refs.form.addEventListener('submit', onFormSubmit);

const savedFeedbackFormState = localStorage.getItem('feedback-form-state');
if (savedFeedbackFormState) {
  const { email, message } = JSON.parse(savedFeedbackFormState);
  refs.email.value = email;
  refs.textarea.value = message;
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = refs.email.value;
  const message = refs.textarea.value;
  const feedbackFormState = { email, message };
  refs.email.value = '';
  refs.textarea.value = '';
  localStorage.removeItem('feedback-form-state');

  console.log(feedbackFormState);
}
