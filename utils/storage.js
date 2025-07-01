const getData = (event, form) => {
  event.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData.entries());
  return data;
};

const savedData = (event, item, form) => {
  const data = getData(event, form);
  localStorage.setItem(item, JSON.stringify(data));
  window.alert("Informacion guardada con exito");
};

export { savedData }