let socialsCard = false;
let socials = null;

function socialLinks() {
  if (socialsCard) {
    socials.style.opacity = "0";
    socialsCard = false;
  } else {
    if (!socials) {
      socials = document.createElement("div");
      const arrow = document.createElement("div");

      socials.innerHTML =
        "<p> SHARE </p>" +
        "<img src='icon-facebook.svg'>" +
        "<img src='icon-twitter.svg'>" +
        "<img src='icon-pinterest.svg'>";

      socials.style.backgroundColor = "#49556b";
      socials.style.borderRadius = "10px";
      socials.style.height = "50px";
      socials.style.width = "225px";
      socials.style.display = "flex";
      socials.style.justifyContent = "space-evenly";
      socials.style.alignItems = "center";
      socials.style.color = "#bcc8d5";
      socials.style.fontSize = "11px";
      socials.style.fontWeight = "200";
      socials.style.letterSpacing = "5px";
      socials.style.paddingLeft = "8px";
      socials.style.paddingRight = "8px";
      socials.style.opacity = "1";
      socials.style.transition = "opacity 0.5s ease";
      socials.style.position = "absolute";
      socials.style.marginLeft = "-105px";
      socials.style.marginTop = "-100px";

      arrow.style.backgroundColor = "#49556b";
      arrow.style.width = "20px";
      arrow.style.height = "20px";
      arrow.style.bottom = "-9px";
      arrow.style.transform = "rotate(45deg)";
      arrow.style.marginTop = "-100px";
      arrow.style.position = "absolute";

      document.querySelector(".sharecontainer").appendChild(socials);
      socials.append(arrow);
    } else {
      socials.style.opacity = "1";
    }
    socialsCard = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const share = document.querySelector(".share");
  share.addEventListener("click", socialLinks);
});
