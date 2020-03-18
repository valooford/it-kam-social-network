export function required(value) {
  if (!value || value === "") return "This field is required";
}

export function maxLength(length) {
  return (value) => value.length > length ? `Maximum number of characters is ${length}`: undefined;
}