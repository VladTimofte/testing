function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function getObjectKeys(obj) {
  return Object.keys(obj);
}

function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const mockUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

async function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockUsers);
    }, 1000);
  });
}

describe("My first Karma test", function () {
  it("should be true", function () {
    expect(true).toEqual(true);
  });
});

describe("Math functions", () => {
  it("should multiply two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(0, 5)).toBe(0);
  });

  it("should divide two numbers", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
    expect(() => divide(1, 0)).toThrowError("Cannot divide by zero");
  });
});

describe("String manipulation functions", () => {
  it("should reverse a string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("")).toBe("");
  });

  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("world")).toBe("World");
    expect(capitalizeFirstLetter("")).toBe("");
  });
});

describe("Array utility functions", () => {
  it("should find the maximum value in an array", () => {
    expect(findMax([1, 2, 3, 4, 5])).toBe(5);
    expect(findMax([-1, -2, -3])).toBe(-1);
    expect(findMax([0])).toBe(0);
  });

  it("should find the minimum value in an array", () => {
    expect(findMin([1, 2, 3, 4, 5])).toBe(1);
    expect(findMin([-1, -2, -3])).toBe(-3);
    expect(findMin([0])).toBe(0);
  });
});

describe("Object manipulation functions", () => {
  it("should get the keys of an object", () => {
    expect(getObjectKeys({ a: 1, b: 2 })).toEqual(["a", "b"]);
    expect(getObjectKeys({})).toEqual([]);
  });

  it("should merge two objects", () => {
    expect(mergeObjects({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    expect(mergeObjects({}, { a: 1 })).toEqual({ a: 1 });
  });
});

describe('Async functions', () => {

  it('should fetch users', async () => {
    const users = await fetchUsers();
    expect(users.length).toBe(3);
    expect(users[0].name).toBe('Alice');
    expect(users[1].name).toBe('Bob');
  });

  it('should fetch users and contain specific user', async () => {
    const users = await fetchUsers();
    const userNames = users.map(user => user.name);
    expect(userNames).toContain('Charlie');
  });

});
