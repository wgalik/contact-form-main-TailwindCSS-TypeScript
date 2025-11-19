const checkbox = document.getElementById("checkbox") as HTMLInputElement;
const checkboxError = document.getElementById(
  "checkbox-error"
) as HTMLSpanElement;
const errorMessages =
  document.querySelectorAll<HTMLSpanElement>(".error-message");
const inputErrorMessages = document.querySelectorAll<HTMLSpanElement>(
  ".input-error-message"
);
const fieldsetInputs =
  document.querySelectorAll<HTMLInputElement>(".fieldset-input");
const form = document.querySelector("form") as HTMLFormElement;
const fieldsetInputError = document.getElementById(
  "fieldset-input-error"
) as HTMLSpanElement;
const inputs = document.querySelectorAll<HTMLInputElement>(".input");
const email = [...inputs].filter((input) => input.id === "email");
const invalidEmailError = document.getElementById(
  "invalid-email-error"
) as HTMLSpanElement;
const popup = document.getElementById("popup") as HTMLDivElement;
const regex = /^[^@]+@[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,}$/;

const validation = () => {
  const isRadioChecked = [...fieldsetInputs].findIndex(
    (input) => input.checked
  );

  inputs?.forEach((input) => {
    const id: string = `${input.id}-error`;

    if (!input.value.trim() || input.value.trim().length < 2)
      inputErrorMessages.forEach((span) => {
        if (span.id === id) span.removeAttribute("hidden");
      });
  });

  if (email[0].value.trim().length >= 2 && !regex.test(email[0].value))
    invalidEmailError.removeAttribute("hidden");
  if (isRadioChecked < 0) fieldsetInputError.removeAttribute("hidden");
  if (!checkbox.checked) checkboxError.removeAttribute("hidden");
  showPopup();
};

const showPopup = () => {
  const isError = [...errorMessages].some(
    (errorMessage) => !errorMessage.hidden
  );
  if (!isError) popup.removeAttribute("hidden");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMessages.forEach((span) => span.setAttribute("hidden", "hidden"));
  validation();
});
