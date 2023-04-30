// function to nav links smooth navigation

const navLink = document.querySelectorAll('nav ul li a');
navLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// fetching gitdata

const fetchGithubRepos = async () => {
  const response = await fetch(
    'https://api.github.com/users/saima-khan1/repos'
  );
  const data = await response.json();
  console.log(data);
  const repoContainer = document.querySelector('#work');

  // create a new div element for each repo and append it to the repoContainer
  data.map((repo) => {
    const newRepoDiv = document.createElement('div');
    newRepoDiv.innerHTML = `
      <h2>My Git Repo Details</h2>
      <ul>
                <li>Repo Name: ${repo.name}</li>
                <li>Owner Name: ${repo.owner.login}</li>
                <li>Description: ${repo.description}</li>
                <li>Language: ${repo.language}</li>
                <li>Created At: ${repo.created_at}</li>
                <li>Updated At: ${repo.updated_at}</li>
                <li>Repo URL: <a href="${repo.html_url}" target="_blank">${repo.html_url}</a></li>
                <li>Clone URL: <a href="${repo.clone_url}" target="_blank">${repo.clone_url}</a></li>
            </ul>`;
    repoContainer.appendChild(newRepoDiv);
  });
};

fetchGithubRepos();

/*Post method funtion for contact form */
const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const endPiont = 'https://formspree.io/f/mlekzeyp';

  const response = await fetch(endPiont, {
    method: 'POST',

    mode: 'no-cors',

    body: formData,

    headers: {
      Accept: 'application/json',
    },
  });

  console.log(response);

  alert('Thank you for your message.');

  form.reset();
});
