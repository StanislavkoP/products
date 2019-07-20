export const getItemFromLocalStorage  = (nameItem) => localStorage.getItem(nameItem);
export const setItemToLocalStorage  = (nameItem, value) => localStorage.setItem(nameItem, value);
export const removeItemFromLocalStorage  = (nameItem) => localStorage.removeItem(nameItem);