<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A : `{}`

<i>In this code, where  assign an empty object to a variable. That's means thit empty object is assigned to the greeting variable and when it  greeting log in the console, it will display an empty object {} .</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i> In this sum function we pass 2 argument. This sum fuction are addition 2 peramiter value, which is define as a, b. But there One is number and anther one is string, that's , this two value will be concatenate , not addition. And Final output will be string "12". </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i> In this question, declared a food variable  using few emoji. And next line again declared info object and this info has an perperty his is contain our food variable first index item. Next line , again accsess this favoriteFood property and set a value. and closole log food. But nothing is affected on food variable. Food variable are same. </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>In this sayHi function received an name argument.We call the fuction but we don't pass any value for this argument , that's why it's console me default value of undefine. That's why it will be outpur : Hi there, undefine </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer:  C: 3

<i>In this code, nums will be fetched and every time count will increase 1 . But in first time , when nums will fetch then num will be 0, which is falsy value, that's nothing will be added, but next every fetch or loop ,frequently every time 1 will be increase. LIke this this loop will be run 3 time and every time 1 increase in count variable. and finally count will be reached in 3. answer will be 3. </i>

</p>
</details>
