export function formatPhoneNumberX(phoneNumber: string) {
  let cleaned = ("" + phoneNumber).replace(/\D/g, "");
  let formatted = "+" + cleaned;

  if (formatted.startsWith("+55")) {
    formatted = formatted.replace(/(\+55)(\d{2})(\d{5})(\d{4})/, "$1 ($2) $3-$4");
  }

  return formatted;
}
