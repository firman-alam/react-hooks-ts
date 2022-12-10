import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
  useMemo,
  useRef,
} from 'react';

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log('mounting');
    console.log('Users: ', users);

    return () => {
      console.log('unmounting');
    };
  }, [users]);

  // this event just example, we are not using it
  // useCallback is a hook to memoize function
  const addTwo = useCallback(
    (e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
      setCount((prev) => prev + 2);
    },
    []
  );

  // memoize expensive calculations
  const result = useMemo<number>(() => fib(myNum), [myNum]);

  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type='text' ref={inputRef} />
    </div>
  );
}

export default App;
