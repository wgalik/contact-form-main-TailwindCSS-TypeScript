const checkbox = document.getElementById("checkbox") as HTMLInputElement;
const checkboxError = document.getElementById(
  "checkbox-error",
) as HTMLSpanElement;
const errorMessages =
  document.querySelectorAll<HTMLSpanElement>(".error-message");
const inputErrorMessages = document.querySelectorAll<HTMLSpanElement>(
  ".input-error-message",
);
const fieldsetInputs =
  document.querySelectorAll<HTMLInputElement>(".fieldset-input");
const form = document.querySelector("form") as HTMLFormElement;
const fieldsetInputError = document.getElementById(
  "fieldset-input-error",
) as HTMLSpanElement;
const inputs = document.querySelectorAll<HTMLInputElement>(".input");
const emailInput = [...inputs].find(
  (input) => input.id === "email",
) as HTMLInputElement;
const invalidEmailError = document.getElementById(
  "invalid-email-error",
) as HTMLSpanElement;
const popup = document.getElementById("popup") as HTMLDivElement;
const regex = /^[^@]+@[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,}$/;

const validation = () => {
  const isRadioChecked: number = [...fieldsetInputs].findIndex(
    (input) => input.checked,
  );

  inputs?.forEach((input) => {
    const id: string = `${input.id}-error`;

    if (!input.value.trim() || input.value.trim().length < 2) {
      input.setAttribute("aria-invalid", "true");
      inputErrorMessages.forEach((span) => {
        if (span.id === id) span.removeAttribute("hidden");
      });
    }
  });

  if (emailInput.value.trim().length >= 2 && !regex.test(emailInput.value)) {
    invalidEmailError.removeAttribute("hidden");
    emailInput.setAttribute("aria-describedby", "invalid-email-error");
    emailInput.setAttribute("aria-invalid", "true");
  }

  if (isRadioChecked < 0) {
    fieldsetInputError.removeAttribute("hidden");
    fieldsetInputs.forEach((input) =>
      input.setAttribute("aria-invalid", "true"),
    );
  }

  if (!checkbox.checked) {
    checkboxError.removeAttribute("hidden");
    checkbox.setAttribute("aria-invalid", "true");
  }

  showPopup();
};

const showPopup = () => {
  const isError = [...errorMessages].some(
    (errorMessage) => !errorMessage.hidden,
  );

  if (!isError) popup.removeAttribute("hidden");
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMessages.forEach((span) => span.setAttribute("hidden", "true"));
  const ariaInvalid = document
    .querySelectorAll("*[aria-invalid='true']")
    .forEach((input) => input.removeAttribute("aria-invalid"));
  validation();
});
