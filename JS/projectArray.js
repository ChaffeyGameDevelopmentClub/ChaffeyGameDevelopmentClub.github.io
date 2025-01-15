//Copy's a template to allow a dynamic amount of elements
async function getProjects() {
  try {
    const response = await fetch("../JS/json/projects.json");
    const projectArray = await response.json();
    console.log("projectArray");
    const container = document.getElementById("ProjectCont");
    projectArray.forEach((project) => {
      //Math to center remaining links
      const amount = projectArray.length;
      console.log(amount);
      //Link box
      const linkCont = document.createElement("a");
      //linkCont.href = project.Link;
      linkCont.className = "cardProject";
      //Used for buttons
      linkCont.id = project.Name;
      //Link
      linkCont.href = project.Link;
      //Img
      const img = document.createElement("img");
      img.src = project.Img;
      img.className = "center";
      //H2
      const h2 = document.createElement("h2");
      h2.innerHTML = project.Name;
      //P
      const p = document.createElement("p");
      p.innerHTML = project.Dec;
      //Appending
      linkCont.appendChild(img);
      linkCont.appendChild(h2);
      linkCont.appendChild(p);
      //Appending
      container.appendChild(linkCont);

      linkCont.onclick = () => expandProject(project);
    });
  } catch (error) {
    console.error("Error Loading Products: ", error);
  }
}

//Clicking on a project
function expandProject(project) {
  console.log(project.Name);

  //Expand element
  const linkCont = document.getElementById(project.Name);
  if (linkCont.classList.contains("gridSpan")) {
    //return to normal
    linkCont.classList.remove("gridSpan");
  }
  else {
    //expand
    //linkCont.classList.add("gridSpan")
    //Adding new content
  }


}


//run on load
getProjects();


