const repoContainer = document.getElementById('repo-container');
const repoDetails = document.getElementById('repo-details');

async function fetchGithubRepos() {
  try {
    const response = await fetch(
      'https://api.github.com/users/saima-khan1/repos'
    );
    const data = await response.json();
    console.log(data);
    data.forEach((repo) => {
      const gitAvatar = document.createElement('img');
      gitAvatar.src = repo.owner.avatar_url;
      //gitAvatar.width = '60';
      //gitAvatar.height = '60';
      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.style = 'font-size: 20px';
      repoLink.target = '_blank';
      repoLink.textContent = ` Click here to check my Git repo -->${repo.name}`;
      repoContainer.appendChild(gitAvatar);
      repoContainer.appendChild(repoLink);
      repoContainer.appendChild(document.createElement('br'));
    });
  } catch (error) {
    console.error(error);
  }
}

async function showRepoDetails(repoName) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/saima-khan1/${repoName}`
    );
    const data = await response.json();

    repoDetails.innerHTML = `
<h2>${repoName}</h2>
<ul>
<li>Full Name: ${data.full_name}</li>
<li>Description: ${data.description}</li>
<li>Language: ${data.language}</li>
<li>Created At: ${data.created_at}</li>
<li>Updated At: ${data.updated_at}</li>
<li>Homepage: <a href="${data.homepage}" target="_blank">${data.homepage}</a></li>
</ul>
    `;
  } catch (error) {
    console.error(error);
  }
}

fetchGithubRepos();
