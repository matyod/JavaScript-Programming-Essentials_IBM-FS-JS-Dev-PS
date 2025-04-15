/*
### Practice task
1. In this task you need to create one more text area to ask users to share their experience with the product as well and show the result along with other details after clicking on **Submit Feedback** button.
2. To complete this task, you can use `<textarea>` tag in html file and give `id='userExperience'` as attribute for this tag.
3. Then access the details entered by user in javaScript file by accessing the input of this textarea using `document.getElementById('userExperience')` and store its value in one variable.
4. Then show the output after button is clicked with other user's entered details.
*/

function submitFeedback() {
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const job = document.getElementById('job').value;
  const designation = document.getElementById('designation').value;
  const productType = document.getElementById('productType').value;
  const feedbackText = document.getElementById('feedbackText').value;
  const userExperienceText = document.getElementById('userExperienceText').value;

  document.getElementById('userName').textContent = username;
  document.getElementById('userAge').textContent = age;
  document.getElementById('userEmail').textContent = email;
  document.getElementById('userJob').textContent = job;
  document.getElementById('userDesignation').textContent = designation;
  document.getElementById('userProductChoice').textContent = productType;
  document.getElementById('userFeedback').textContent = feedbackText;
  document.getElementById('userExperience').textContent = userExperienceText;

  document.getElementById('userInfo').style.display = 'block';

  alert("Thank you for your valuable feedback");
}

const submitButton = document.getElementById('submitBtn');

submitButton.addEventListener('click', submitFeedback);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    submitFeedback();
  }
});



