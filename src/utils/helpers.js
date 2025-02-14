export function setButtonText(
  submitButton,
  isLoading,
  loadingText = "Saving...",
  defaultText = "Save"
) {
  if (isLoading) {
    submitButton.textContent = loadingText;
    submitButton.setAttribute("disabled", true);
  } else {
    submitButton.textContent = defaultText;
    submitButton.removeAttribute("disabled");
  }
}
