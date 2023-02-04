/**
* Cookies
**/

function supports_html5_storage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}

/**
 * Crie um cookie ou LocalStore Simples
 * @param  {string} name Nomde usado para o Cookie ou LocalStorage
 * @param  {string} value Valor usado para o Cookie ou LocalStorage
 * @param  {number} duration Quantidade de segundos que o cookie pode durar, se nÃ£o informado dura 1 ano
 */
function createStoregeOrCookie(name, value, duration) {
  if (!duration) duration = 60 * 60 * 24 * 365; // 1 Ano
  if (supports_html5_storage !== false) {
    return (localStorage["" + name + ""] = "" + value + "");
  } else {
    return createCookie("" + name + "", "" + value + "", duration);
  }
}

/**
 * Verifica se existe um cookie ou LocalStorage e retorna seu valor
 * @param {*} item
 */
function checkLStoregeOrCookie(item) {
  if (supports_html5_storage !== false) {
    var item_checked = localStorage.getItem(item);
    return item_checked;
  } else {
    var item_checked = getCookie(item);
    return item_checked;
  }
}

function createCookie(name, value, min) {
  if (min) {
    var date = new Date();
    date.setTime(date.getTime() + (min * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  } else
    var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(cookieName) {
  var name = cookieName + '=';
  var cookies = document.cookie.split(';'); // Transforma uma string em array
  for (var i = 0; i < cookies.length; i++) {
    var ca = cookies[i];
    while (ca.charAt(0) == ' ') {
      ca = ca.substring(1);
    }
    if (ca.indexOf(name) == 0) {
      return ca.substring(name.length, ca.length);
    }
  }
  return "";
}