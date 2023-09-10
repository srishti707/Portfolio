let c = document.querySelector(".container");
let d = document.querySelector(".hamburger");
let panels = document.querySelectorAll(".panel");
let contents=document.querySelectorAll(".content");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActive();
    
    panel.classList.add("active");
    panel.classList.remove("not-active");
    panel.querySelector(".heading").classList.remove("vert");
    panel.querySelector(".heading").classList.add("horiz");
    panel.querySelector(".content").classList.add("show-content");
  });
});

const removeActive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.classList.add("not-active");
    panel.querySelector(".content").classList.remove("show-content");
    panel.querySelector(".heading").classList.add("vert");
    panel.querySelector(".heading").classList.remove("horiz");
    
    
  });
};


panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeactive();
    panel.classList.add("active");
    panel.contents.style.display = "flex";
  });
});

const removeactive = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
    panel.contents.style.display = "none";
  });
};


d.addEventListener("click", () => {
  c.classList.toggle("showNavigation");
});

let info = document.querySelector(".info");
let features = document.querySelector(".feature");

let infoSentence = "I'm a\xa0";
let featureText = ["Student", "Developer", "Coder", "Student"];
let panelss = document.querySelectorAll(".panelt"); //3 panels

const typer = async (text, delay) => {
  //i'm a => i,',m, ,a
  let arr = text.split("");

  let i = 0;
  // accessing of elements in array
  while (i < arr.length) {
    //adding characters to info span one by one
    info.innerHTML += arr[i];
    await waitFunction(delay);
    i++;
  }
};

const featureTyper = async (text, delay) => {
  let arr = text.split("");
  let i = 0;
  while (i < arr.length) {
    features.innerHTML += arr[i];
    await waitFunction(delay);
    i++;
  }
};

const deleter = async (delay) => {
  let text = features.innerHTML;

  let arr = text.split("");

  let i = arr.length;
  while (i > 0) {
    await waitFunction(delay);
    arr.pop();

    features.innerHTML = arr.join("");

    i--;
  }
};

const waitFunction = async (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

const runFunction = async (arr) => {
  await typer(infoSentence, 400);

  let i = 0;

  while (i < arr.length) {
    await featureTyper(featureText[i], 200);
    await waitFunction(400);
    await deleter(200);
    i++;
    if (i == arr.length) {
      i = 0;
    }
  }
};

runFunction(featureText);
