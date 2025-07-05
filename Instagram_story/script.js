let arr = [
  {
    dp: "https://plus.unsplash.com/premium_photo-1669065123832-5c43e8f80f46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwZHB8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1542452376175-82b6fb643412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1656792213776-a900d686f2de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwZHB8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1553617554-adef761d4bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbiUyMHN0b3J5fGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1578472577660-6f4a47a6660d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwZHB8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1537384183138-745912986ce1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1lbiUyMHN0b3J5fGVufDB8fDB8fHww",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1666298860111-2c40530315da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1lbiUyMGRwfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1598291234998-8f09be2ac4d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwc3Rvcnl8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1575561684178-82bcbf845de5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbiUyMGRwfGVufDB8fDB8fHww",
    story:
      "https://images.unsplash.com/photo-1541284249430-534171b90445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVuJTIwc3Rvcnl8ZW58MHx8MHx8fDA%3D",
  },

];

let storys = "";
arr.forEach(function (e, i) {
  storys += `<div class="story">
                <img id="${i}" src="${e.dp}" alt="">
            </div>`;
});

let storybox = document.querySelector(".storybox");

storybox.innerHTML = storys;

let fullstory = document.querySelector(".fullstory");


storybox.addEventListener("click", function (dets) {

  fullstory.style.display = "block";
  fullstory.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    fullstory.style.display = "none";
  }, 2000);
});
