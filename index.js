// const frederick = {
//     name: 'Frederick Douglas',
//     canRead: false,
//     canWrite: false
// };

// function selfEducate() {
//     frederick.canRead = true;
//     frederick.canWrite = true;
//     return frederick;
// }

// selfEducate();
// console.log(frederick)

// const selfEducate = person => {
//     person.canRead = true;
//     person.canWrite = true;
//     return person;
// };

// console.log(selfEducate(frederick));
// console.log(frederick);

// const selfEducate = person => ({ 
//     ...person,
//     name: 'Sabyr',
//     canRead: true,
//     canWrite: true
// });

// console.log(selfEducate(frederick));
// console.log(frederick);

// function Header(text) {
//     let h1 = document.createElement("h1");
//     h1.innerText = text;
//     document.body.appendChild(h1);
// }

// Header("Header () cause side effects");

// const Header = props => <h1>{props.title}</h1>;

// const schools = ["Yourtown", "Washington & Liberty", "Wakefield"]

// console.log(schools.join(", "));

// const wSchools = schools.filter(school => school[0] === "W");

// console.log(wSchools);

// const cutSchool = (cut, list) => list.filter(school => school !== cut);

// console.log(cutSchool("Washington & Liberty", schools).join(", "));
// console.log(schools);

// const highSchools = schools.map(school => `${school} High School`);

// console.log(highSchools.join("\n"));
// console.log(schools.join("\n"))

// const highSchools = schools.map(school => ({ name: school}));

// console.log(highSchools);

// let schools = [
//     { name: "Yorktown" },
//     { name: "Stratford" },
//     { name: "Washington & Liberty" },
//     { name: "Wakefield" }
//    ];
// let updatedSchools = editName("Stratford", "HB Woodlawn", schools);

// console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
// console.log(schools[1]); // { name: "Stratford" }

// const editName = (oldName, name, arr) => 
//     arr.map(item => {
//         if (item.name === oldName) {
//             return {
//                 ...item,
//                 name
//             };
//         } else {
//             return item;
//         }
//     });

// const editName = (oldName, name, arr) =>
//     arr.map(item => (item.name === oldName ? { ...item, name} : item));

// const schools = {
//     Yourktown: 10,
//     "Washigton & Liberty": 2,
//     Wakefield: 5
// };

// const schoolArray = Object.keys(schools).map(key => ({
//     name: key,
//     wins: schools[key]
// }));

// console.log(schoolArray)

// const ages = [21, 18, 42, 40, 64, 63, 34];
// 
// const maxAge = ages.reduce((max, age) => {
//     console.log(`${age} > ${max} = ${age > max}`);
//     if (age > max) {
//         return age;
//     } else {
//         return max;
//     }
// }, 0);

// console.log(maxAge)

// const max = ages.reduce(( max, value) => (value > max ? value: max), 0);

// const colors = [
//     {
//     id: "xekare",
//     title: "rad red",
//     rating: 3
//     },
//     {
//     id: "jbwsof",
//     title: "big blue",
//     rating: 2
//     },
//     {
//     id: "prigbj",
//     title: "grizzly grey",
//     rating: 5
//     },
//     {
//     id: "ryhbhsl",
//     title: "banana",
//     rating: 1
//     }
//    ];

// const hashColors = colors.reduce((hash, { id, title, rating }) => {
//     hash[id] = { title, rating };
//     return hash;
// }, {})

// console.log(hashColors)

// const invokeIf = (condition, fnTrue, fnFalse) => 
//     condition ? fnTrue() : fnFalse();

// const showWelcome = () => console.log("Welcome!!!");

// const showUnauthorized = () => console.log("Unauthorized!!!");

// invokeIf(true, showWelcome, showUnauthorized);
// invokeIf(false, showWelcome, showUnauthorized);

// const userLogs = userName => message => 
//     console.log(`${userName} -> ${message}`);

// const log = userLogs("grandpa23");

// log("attempted to load 20 fake members");

// getFakeMembers(20).then(
//     members => log(`successfully loaded ${members.length} members`),
//     error => log("encountered an error loading members")
// );

// const countdown = (value, fn) => {
//     fn(value);
//     return value > 0 ? countdown(value - 1, fn) : value;
// };

// countdown(10, value => console.log(value));

// const countdown = (value, fn, delay = 1000) => {
//     fn(value);
//     return value > 0
//         ? setTimeout(() => countdown(value - 1, fn, delay), delay)
//         : value;
// };

// const log = value => console.log(value);
// countdown(10, log);

// const dan = {
//     type: "person",
//     data: {
//         gender: "male",
//         info: {
//             id: 22,
//             fullname: {
//                 first: "Dan",
//                 last: "Deacon"
//             }
//         }
//     }
// };

// deepPick("type", dan);
// deepPick("data.info.fullname.first", dan);

// const deepPick = (fields, object = {}) => {
//     const [first, ...remaining] = fields.split(".");
//     return remaining.length
//         ? deepPick(remaining.join(".", object[first]))
//         : object[first];
// };

// const template = "hh:mm:ss tt";
// const clockTime = template
//     .replace("hh", "03")
//     .replace("mm", "33")
//     .replace("ss", "33")
//     .replace("tt", "PM")

// console.log(clockTime);\

// const both = date => appendAMPM(civilianHours(date));

// const both = compose(
//     civilianHours,
//     appendAMPM
// );

// both(new Date());

// const compose = (...fns) => args => 
//     fns.reduce((composed, f) => f(composed), arg);

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? 'PM' : 'AM'
});

const display = target => time => target(time);

const formatClock = format => time =>
    format
        .replace("hh", time.hours)
        .replace("mm", time.minutes)
        .replace('ss', time.seconds)
        .replace("tt", time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    key: clockTime[key] < 10 ? "0" + clockTime[key] : clockTime[key]
});

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: clockTime.hours >= 12 ? "PM" : "AM"
   });

const convertToCivilianTime = clockTime => 
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
    prependZero("hours"),
    prependZero("minutes"),
    prependZero("seconds")
    )(civilianTime);

const compose = (...fns) => arg =>
fns.reduce((composed, f) => f(composed), arg);

const startTicking = () =>
    setInterval(
    compose(
    clear,
    getCurrentTime,
    serializeClockTime,
    convertToCivilianTime,
    doubleDigits,
    formatClock("hh:mm:ss tt"),
    display(log)
    ),
    oneSecond()
    );

startTicking();