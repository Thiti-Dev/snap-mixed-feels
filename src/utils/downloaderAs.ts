import Axios from "axios";

export function downloadAs(url:string, name:string) {
    Axios.get(url, {
      headers: {
        "Content-Type": "application/octet-stream"
      },
      responseType: "blob"
    })
      .then(response => {
        const a = document.createElement("a");
        const url = window.URL.createObjectURL(response.data);
        a.href = url;
        a.download = name;
        a.click();
      })
      .catch(err => {
        console.log("error", err);
      });
  };