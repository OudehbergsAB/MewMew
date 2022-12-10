const params = new URLSearchParams(window.location.search);
const origin = params.get("origin");

if (origin == "login") {
  let storedUsers = localStorage.users;
  if (storedUsers === undefined) {
    window.history.go(-1);
  }

  const users = JSON.parse(storedUsers);

  const email = params.get("email");
  const password = params.get("password");

  if (users.some((u) => u.email == email && u.password == password)) {
    location.href = "./../feed/index.html";
  } else {
    window.history.go(-1);
  }
}

if (origin == "signup") {
  let storedUsers = localStorage.users;
  if (storedUsers === undefined) {
    storedUsers = "[]";
  }

  const users = JSON.parse(storedUsers);

  const email = params.get("email");
  const password = params.get("password");

  if (users.every((u) => u.email != email)) {
    users.push({
      email,
      password,
    });
    localStorage.users = JSON.stringify(users);
    location.href = "./../feed/index.html";
  } else {
    window.history.go(-1);
  }
}
