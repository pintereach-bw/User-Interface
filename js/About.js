// TODO: Refactor.
/*
    Need to target .team-card-details and .team-card-image,
    otherwise container will bug out when clicking on the links
*/

class Container {
  constructor(props) {
    // Get the DOM element of the .team container
    this.props = props;
    console.log("this.props: ", this.props);
  }
}

// Get the whole team container
const teamContainer = document.querySelectorAll(".team");
teamContainer.forEach(container => {
  new Container(container);
});

// This is bugged
teamContainer.forEach(member => {
  const memberBio = member.querySelector(".team-card-bio");
  member.addEventListener("click", event => {
    event.stopPropagation();
    memberBio.classList.toggle("active");
  });
});
