import moment from "moment";

export const convertObjKey = (dataForm: any) => {
  return {};
};

export const FomatDate = (date: any) => {
  if (date) return date.format("DD/MM/YYYY");
  return "";
};

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const htmlToPlainText = (html: string) => {
  if (html) {
    return html
      .replace(/<style([\s\S]*?)<\/style>/gi, " ")
      .replace(/<script([\s\S]*?)<\/script>/gi, " ")
      .replace(/(<(?:.|\n)*?>)/gm, " ")
      .replace(/\s+/gm, " ")
      .replace("&nbsp;", " ")
      .replace("&nbsp;", " ");
  }
  return "";
};

export function abbreviateNumber(number: number) {
  if (number >= 1e6) {
    return "+ " + (number / 1e6).toFixed(0) + "tr";
  }
  return number.toString();
}

export function splitString(text: string) {
  if (!text) return [];
  return text.split(",");
}

export function joinArrayToString(arr: Array<string>) {
  if (!arr.length) return "";
  return arr.join(",");
}

// export function convertToDate(dateTime) {
//     const current_time = new Date(dateTime)
//     current_time.setHours(0,0,0,0)
//     return moment(current_time, "YYYY-MM-DD");
// }

export const formatPath = (path:string, ...params:any) => {
    if (!path) return path;

    let match = path.match(/:[a-z][a-z\d_]*\??/gi);
    if (!match) return path;

    match
      .map(param => param.replace(/\?$/, ''))
      .filter((value, index, self) => self.indexOf(value) === index)
      .map((param, index) => path = path.replace(
        new RegExp(param + '\\??', 'gi'),
        (params[index] ?? '').toString()
      ));

    return path;
}

export const trueTypeOf = (obj:any) => Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()

export const getQueryString = (init:any) => {
  const params = new URLSearchParams();
  Object.keys(init).map((k) => {
    const type = trueTypeOf(init[k]);
    switch (type) {
      case 'object':
        // params
        break;
      case 'string':
      case 'number':
        params.append(k,init[k].toString())
        break;
      case 'array':
        init[k].map((item:any)=>{
          params.append(k,item)
        })
        break;
      default:
        break;
    }
    return k;
  })
  return params.toString()
}

// Scroll
export const scrollTo = (top = 0, left = 0, behavior: any = "smooth") => {
  window.scrollTo({ top, left, behavior });
};

// local stroge
export const getLocalItem = (name: string) => {
  if (typeof window !== "undefined") {
    let data = localStorage.getItem(name) ?? "";
    try {
      data = JSON.parse(data);
    } catch (e) {
      return {};
    }
    return data;
  }
  return {};
};

export const getUserLocal = () => {
  let user = getLocalItem("user");
  if (user) return user;
  return {};
};

export const removeLocalItem = (name: string) => {
  localStorage.removeItem(name);
};

export const setLocalItem = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const covertQuerySearch = (object: Object) => {
  if (!object) return "";
  const filteredParams = Object.entries(object)
    .filter(([key, value]) => value !== "")
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return `?${filteredParams}`;
};
