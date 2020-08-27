let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

//Write code under this line
const mood = { mood: "happy" };
const moodUser = { ...user, ...mood };
console.log(moodUser);
const {
  age,
  hobby,
  name,
  premium,
  time: timeUser = (user["full time"] = true),
} = user;
console.log(age, hobby, name, premium, user["full time"]);

const keys = Object.keys(user);
// Write code under this line
for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}

console.log(message);
/*
'age : 20
hobby : skydiving
name : Mango
premium : false
mood : happy
"full time" : true
' */
