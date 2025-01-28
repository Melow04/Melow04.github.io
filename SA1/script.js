const toggleBtn = document.getElementById("toggleBtn");
  const info = document.querySelector(".info");
  const rightsec = document.querySelector(".rightsec");
  const skill = document.querySelector(".skill");

  const body = document.body;
  const main = document.querySelector("main");
  const img = document.querySelector("img");

  let currentSet = 1;

  const sets = {
    1: {
      background: "rgb(246, 235, 225)",
      image: "assets/me.jpg",
    },
    2: {
      background: "rgb(162, 119, 197)",
      image: "assets/me-set2.png",
    },
    3: {
      background: "rgb(231, 142, 130)",
      image: "assets/me-set3.jpg",
    },
  };

  toggleBtn.addEventListener("click", () => {
    info.classList.remove(`set${currentSet}`);
    rightsec.classList.remove(`set${currentSet}`);
    skill.classList.remove(`set${currentSet}`);
    body.classList.remove(`set${currentSet}`);
    main.classList.remove(`set${currentSet}`);

    currentSet = currentSet === 3 ? 1 : currentSet + 1;

    info.classList.add(`set${currentSet}`);
    rightsec.classList.add(`set${currentSet}`);
    skill.classList.add(`set${currentSet}`);

    body.classList.add(`set${currentSet}`);
    main.classList.add(`set${currentSet}`);

    main.style.backgroundColor = sets[currentSet].background;

    img.src = sets[currentSet].image;
  });