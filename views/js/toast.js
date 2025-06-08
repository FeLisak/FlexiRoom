function showToast(message, type) {
  const toast = document.getElementById("toast-notification");
  const toastText = document.getElementById("toast-notification-text");
  const iconClass = type === "success" ? "bi-check2-circle" : "bi-x";
  let iconElem = toast.querySelector(".toast-notification-icon");
  if (!iconElem) {
    iconElem = document.createElement("i");
    iconElem.className = "bi toast-notification-icon";
    toast.prepend(iconElem);
  }
  iconElem.className = `bi ${iconClass} toast-notification-icon`;
  if (toastText) toastText.textContent = message;
  toast.classList.remove("success", "error");
  toast.classList.add(type === "success" ? "success" : "error");
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
