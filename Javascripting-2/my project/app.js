const showPage = (pageId) => {
  // Get all the page elements except repo-details
  const pages = document.querySelectorAll('.page');
  // Hide all the pages except repo-details
  pages.forEach((page) => page.classList.remove('show'));
  // Show the requested page
  const page = document.getElementById(pageId);
  page.classList.add('show');
  // Update the URL
  history.pushState(null, null, '#' + pageId);
};

// Add event listeners to the navigation links
const links = document.querySelectorAll('nav a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    // Get the target page ID
    const pageId = link.getAttribute('href').substr(1);
    // Show the target page
    showPage(pageId);
  });
});

// Add event listener to the back button
window.addEventListener('popstate', () => {
  // Get the current URL fragment
  const pageId = location.hash.substr(1);
  // Show the corresponding page
  showPage(pageId);
});
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const actualUrl = `https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))`;
// const endPoint = proxyUrl + actualUrl;
// console.log(endPoint);
// const accessToken =
//   'AQWLpnvx7bdW6a1-_suIYGu1c5uRHCA9p5FZ8-epr4McW4Lyc2donyVNOeotUx82ZaShZTB8dVakE5b8sT9KJcsk-9I-Cx07PBaB9bvmHqsnCvOHDtlfEdEqQ5lsnoXf8zZOJtV9LVq2z3DO8RMWhtUv4_YNDjg9uWqw76udjKqPiantmJgElB_AxhYbg1ytXCWxVJ-H-GUX8Z6GIBiWDdpLjEuFQcQqKWshneNOoJO1zATH_UmBAF8mmLsNWaFz3ySyJXyT9PDLCF2z9aBCaFBuuxDk_1_sZVqYb7MJMauom-xMHaLwEzWdw5Rcd9AAqhFtF_ZEWuoPJNqV3w-NCovsF34sTQ';

// const fetchProfileData = async () => {
//   const response = await fetch(`${endPoint}`, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       'cache-control': 'no-cache',
//       'X-Restli-Protocol-Version': '2.0.0',
//     },
//   });
//   const data = await response.json();
//   console.log(data);
//   // Extract the relevant fields from the JSON response
//   const firstName = data.localizedFirstName;
//   const lastName = data.localizedLastName;
//   const profileImage = data.profilePicture.displayImage;
//   const img = document.createElement('img');
//   img.src = profileImage;

//   // Create a template string to display the fields
//   const template = `
//     <h2>First Name:${firstName}</h2>
//     <h2>Last Name:${lastName}</h2>
//     <img>${profileImage}</img>
//   `;

//   // Set the content of the about page to the template string
//   const aboutPage = document.getElementById('personal-info');
//   aboutPage.innerHTML = template;
// };
// console.log(fetchProfileData());

// // fetch(endPoint)
// //   .then((response) => response.text())
// //   .then((text) => {
// //     console.log('Raw response:', text);
// //     return JSON.parse(text);
// //   })
// //   .then((data) => console.log(data))
// //   .catch((error) => console.log(error));
