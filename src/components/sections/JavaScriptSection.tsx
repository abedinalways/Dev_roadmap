import SectionHeader from '@/components/sections/SectionHeader';
import BilingualBlock from '@/components/sections/BilingualBlock';
import CodeBlock from '@/components/ui/CodeBlock';
import InterviewBox from '@/components/sections/InterviewBox';
import InfoBox from '@/components/sections/InfoBox';

const closuresCode = `// CLOSURES — সবচেয়ে জরুরি concept
function createCounter() {
  let count = 0; // private variable
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
console.log(counter.getCount()); // 2

// EVENT Loop
console.log('1');          // Synchronous

setTimeout(() => {
  console.log('2');       // Macrotask queue
}, 0);

Promise.resolve().then(() => {
  console.log('3');       // Microtask queue
});

console.log('4');          // Synchronous
// Output: 1, 4, 3, 2`;

const thisKeywordCode = `const user = {
  name: 'Rahim',
  greet: function() {
    console.log(\`Hello, \${this.name}\`); // this = user
  },
  greetArrow: () => {
    console.log(\`Hello, \${this.name}\`); // this = global
  }
};

// call() — this manually set
function introduce(greeting, punctuation) {
  return \`\${greeting}, I am \${this.name}\${punctuation}\`;
}
introduce.call({ name: 'Karim' }, 'Hello', '!');

// bind() — new function, this permanently bound
const boundFn = introduce.bind({ name: 'Nadia' });
boundFn('Hey', '!');`;

export default function JavaScriptSection() {
  return (
    <div className="max-w-4xl">
      <SectionHeader
        number="03"
        title="Advanced JavaScript"
        titleBn="JavaScript এর গভীরে — Senior এর জন্য অবশ্যই জানতে হবে"
        icon="⚡"
      />

      <div className="mb-8">
        <BilingualBlock
          titleBn="JavaScript Core Concepts"
          contentBn="Senior developer হতে হলে JavaScript এর ভেতরের mechanics বুঝতে হবে। Event Loop কীভাবে কাজ করে, Closure কেন হয়, Prototype chain কী, Async/Await এর পেছনে Promise কীভাবে কাজ করে — এই সব জানতে হবে।"
          titleEn="JavaScript Core Concepts"
          contentEn="JavaScript mastery at a senior level means understanding the runtime — how the Call Stack, Web APIs, Callback Queue, and Event Loop work together. It means knowing why closures work, how prototypal inheritance differs from class-based inheritance."
          tag="Must Know"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="closures-and-scope.js"
          language="JavaScript"
          code={closuresCode}
        />
      </div>

      <div className="mb-8">
        <BilingualBlock
          titleBn="this, bind, call, apply — Senior Trap!"
          contentBn="this keyword JavaScript এর সবচেয়ে confusing জিনিসগুলোর একটি। this এর value নির্ভর করে function কীভাবে call হয়েছে তার উপর। Arrow function এ this লেক্সিক্যালি bind হয়।"
          titleEn="this, bind, call, apply — Senior Trap!"
          contentEn="this is one of the most misunderstood concepts. In regular functions, this depends on how the function is invoked. Arrow functions don't have their own this — they inherit it from the enclosing lexical scope."
          tag="Interview Hot"
        />
      </div>

      <div className="mb-8">
        <CodeBlock
          title="this-keyword.js"
          language="JavaScript"
          code={thisKeywordCode}
        />
      </div>

      <div className="mb-8">
        <InfoBox
          type="info"
          title="Interview Tip"
          content="Event Loop সম্পর্কে জিজ্ঞেস করলে বলো: Call Stack → Web APIs → Callback Queue (Macrotask) এবং Microtask Queue → Event Loop সিদ্ধান্ত নেয় কোনটা আগে execute হবে। Microtasks (Promises) সবসময় Macrotasks (setTimeout) এর আগে চলে।"
          contentBn="এই answer টা দিলে interviewer impressed হবেই। এটা মুখস্থ না রেখে বুঝে রাখো।"
        />
      </div>

      <InterviewBox
        title="JavaScript Interview Questions"
        questions={[
          {
            question: 'What is the difference between let, const, and var?',
            answer: 'var is function-scoped, hoisted, can be redeclared. let is block-scoped, not hoisted, can be reassigned. const is block-scoped, not hoisted, cannot be reassigned (but objects can be mutated).',
            answerBn: 'var function-scoped, hoisted, redeclare করা যায়। let block-scoped, not hoisted, reassign করা যায়। const block-scoped, not hoisted, reassign করা যায় না।',
          },
          {
            question: 'Explain closures with a practical example.',
            answer: 'A closure is a function that remembers its outer scope variables. Practical use: data privacy, function factories, event handlers that need access to outer variables.',
            answerBn: 'Closure হলো একটি function যেটি তার outer scope variables মনে রাখে। Practical use: data privacy, function factories, event handlers।',
          },
        ]}
      />
    </div>
  );
}
