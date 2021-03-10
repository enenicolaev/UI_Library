

import $ from "../core";

$.prototype.get = async function(url, responseFormat = "json") {
   let res = await fetch(url);

   if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, status ${res.status}`);
   }

   switch (responseFormat) {
      case "json":
         return await res.json();

      case "text":
         return await res.text();

      case "blob":
         return await res.blob();
   }
}

$.prototype.post = async function(url, data, responseFormat = "text") {
   let res = await fetch(url, {
      method: "POST",
      body: data,
   });

   if (!res.ok) {
      throw new Error(`Couldn't fetch ${url}, status ${res.status}`);
   }

   switch (responseFormat) {
      case "json":
         return await res.json();

      case "text":
         return await res.text();

      case "blob":
         return await res.blob();
   }
}