console.log("index.js working!");

// event listener for buttons
const inputs = document.querySelectorAll("input[type='button']");

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    // console.log(`input #${input.id}`);
    window.location.href = `./message/${input.id}`;
  });
});
