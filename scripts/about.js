const date = new Date();
const year = date.getFullYear();
const modifiedDate = document.lastModified;

document.querySelector('.copyright').innerHTML = `Copyright ${year} | Ryker B Swensen`
document.querySelector('.modified').innerHTML = `Last Modified: ${modifiedDate}`