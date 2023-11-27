// console.log("this is my script");

let result = {
  "tag": "",
  "free": true,
  "role": false,
  "user": "gauravdurge35",
  "email": "gauravdurge35@gmail.com",
  "score": 0.64,
  "state": "deliverable",
  "domain": "gmail.com",
  "reason": "valid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": true,
  "did_you_mean": "",
  "format_valid": true
}

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("ckik")
  key = "ema_live_oIdJD1pRwjSghA0i0IYVnV1eIPDvVgR89O1UDZ5k"
  let email = document.getElementById("username").value

  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``
  for (key of Object.keys(result)) {
    str = str + `<div>${key}: ${result[key]}</div>`
  }

  console.log(str)
  resultCont.innerHTML = str
})



