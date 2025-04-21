const resultDiv = document.getElementById('result');
let intervalTest;

const actions = {
  alertBtn: () => window.alert("This is an alert!"),
  openWindowBtn: () => window.open(
    "https://example.com",
    "popupWindow",
    "width=500,height=400,resizable=yes,scrollbars=yes,left=500"
  ),
  navigateBackBtn: () => window.history.back(),
  changeURLBtn: () => window.location.assign("https://www.google.com"),
  // OR
  // changeURLBtn: () => location.href = "https://www.google.com",
  reloadPageBtn: () => window.location.reload(),
  showWindowSizeBtn: () => console.log(`Window height: ${window.innerHeight},\nWindow width: ${window.innerWidth}`),
  showScreenAvailSizeBtn: () => console.log(`Screen avail height: ${window.screen.availHeight},\nScreen avail width: ${window.screen.availWidth}`),
  showScreenSizeBtn: () => console.log(`Screen height: ${window.screen.height},\nScreen width: ${window.screen.width}`),
  showUserAgentBtn: () => console.log(window.navigator.userAgent),
  showLangBtn: () => console.log(window.navigator.language),
  checkOnlineStatusBtn: () => console.log(window.navigator.onLine),
  getInputBtn: () => {
    let userInput = window.prompt("Input something");
    console.log(`User input: ${userInput}`);
  },
  confirmBtn: () => {
    let userConfirm = window.confirm("Are you sure?");
    console.log(`User confirmation: ${userConfirm}`);
  },
  startIntervalBtn: () => {
    intervalTest = setInterval(() => {
      console.log("interval in action");
    }, 1000);
  },
  stopIntervalBtn: () => {
    clearInterval(intervalTest);
    console.log("Interval cleared");
  },
}

for (const [id, handler] of Object.entries(actions)) {
  // console.log(`typeof: ${typeof(handler)}`);
  const btn = document.getElementById(id);

  if (btn) {
    if (typeof (handler) !== "function") {
      console.warn(`No event handler provided for ${id}`);
    } else {
      btn.addEventListener('click', handler);
    }
  } else {
    console.warn(`No element found with id ${id}`);
  }
}