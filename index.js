// For loop: counts from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("For loop count:", i);
}

/*
   Parameters:
   - let i = 1         => Start at 1
   - i <= 5            => Run the loop while i is less than or equal to 5
   - i++               => Increase i by 1 each time the loop runs
  */

// While loop: counts from 1 to 5
let j = 1;

while (j <= 5) {
  console.log("While loop count:", j);
  j++; // Increment j to avoid an infinite loop
}

/*
 Parameters:
 - j = 1             => Start at 1
 - j <= 5            => Keep looping while j is less than or equal to 5
 - j++               => Increase j by 1 in each loop iteration
*/
//for loop
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz"); // Multiples of both 3 and 5
  } else if (i % 3 === 0) {
    console.log("Fizz"); // Multiples of 3 only
  } else if (i % 5 === 0) {
    console.log("Buzz"); // Multiples of 5 only
  } else {
    console.log(i); // All other numbers
  }
}

for (let i = 10; i <= 10; i++) {
  console.log(i);
}

const adding = (Num1, Num2) => {
  return Num1 * Num2;
};

console.log(adding(4, 4) + " adding");

const multiply = (num, percent) => {
  var One = (num * percent) / 100;
  return One;
};

console.log(multiply(12000, 10));

// 1. Reverse a String

function reverse(str) {
  return str.split("").reverse().join("");
}

// 2. Check for Palindrome

function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// 3. Find Max Number in Array

function findMax(arr) {
  return Math.max(...arr);
}

// 4. Remove Duplicates from Array

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

//STOPPED HERE
// 5. Count Occurrences of Each Word

function wordCount(str) {
  return str.split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
}

// 6. Check if Two Strings are Anagrams

function isAnagram(a, b) {
  return a.split("").sort().join("") === b.split("").sort().join("");
}

// 7. FizzBuzz

for (let i = 1; i <= 100; i++) {
  console.log(
    i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i
  );
}

// 8. Sum All Numbers in Array

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// 9. Flatten Nested Array

function flatten(arr) {
  return arr.flat(Infinity);
}

// 10. Capitalize Each Word

function capitalize(str) {
  return str
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}

// 11. Create Counter with useState

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
// 12. Fetch Data with useEffect

useEffect(() => {
  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);

// 13. Form Handling

const [form, setForm] = useState({ name: "" });
<input onChange={(e) => setForm({ ...form, name: e.target.value })} />;

// 15. Conditional Rendering

{
  isLoggedIn ? <Dashboard /> : <Login />;
}
// 16. Props Destructuring

const User = ({ name, age }) => (
  <p>
    {name} - {age}
  </p>
);
// 17. Reusable Button Component

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;
// 18. React Context API (Theme, Auth, etc.)

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

// 19. Map Over Data

users.map((user) => <li key={user.id}>{user.name}</li>);

// 20. Display Loading State

{
  loading ? <p>Loading...</p> : <UserList />;
}
// ✅ Express/MongoDB Challenges (10)
// 21. Simple Express Route

app.get("/api", (req, res) => res.send("API running"));

// 22. CRUD – Create User

app.post("/users", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

// 23. CRUD – Read All Users

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 24. CRUD – Update User

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});
// 25. CRUD – Delete User

app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});
// 26. Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
// 28. Error Handling Middleware

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
// 29. Authentication Middleware (JWT example)

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
// 30. Protect Routes with Auth Middleware

app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard" });
});

function reverseTwo(word) {
  return word.split("").reverse().join("");
}
