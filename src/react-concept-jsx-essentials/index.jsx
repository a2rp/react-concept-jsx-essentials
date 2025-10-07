import React, { useMemo, useState } from "react";
import { Styled } from "./styled";

/**
 * JSX Essentials - Deep Guide (Beginner → Advanced)
 * Everything renders on a single page with short theory + live demos.
 */

const nowLabel = () => new Date().toLocaleString();
const sum = (a, b) => a + b;
const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

function Badge({ tone = "info", children }) {
    return <Styled.Badge data-tone={tone}>{children}</Styled.Badge>;
}

function Code({ children }) {
    return (
        <Styled.Code>
            <code>{children}</code>
        </Styled.Code>
    );
}

export default function JSXEssentials() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(true);
    const [clicked, setClicked] = useState(0);

    // Lists & keys demo
    const seed = useMemo(
        () => [
            { id: "a1", name: "Aisha" },
            { id: "b2", name: "Bala" },
            { id: "c3", name: "Charu" },
        ],
        []
    );
    const [people, setPeople] = useState(seed);
    const [notesGood, setNotesGood] = useState({}); // id-based notes
    const [notesBad, setNotesBad] = useState({}); // index-based notes (anti-pattern)

    const isEven = count % 2 === 0;

    // HTML injection demo
    const htmlString = `Hello <em>world</em> & welcome!`;
    const dangerously = { __html: htmlString };

    return (
        <Styled.Page>
            <Styled.Title>JSX Essentials - Definitions, Syntax & Demos</Styled.Title>
            <Styled.Subtitle>
                JSX is a syntax that compiles to <code>React.createElement</code>. It's not HTML, it's JavaScript with markup
                sugar. Below: rules, patterns, and gotchas-from basics to advanced.
            </Styled.Subtitle>

            {/* 1) What is JSX? */}
            <Styled.Section>
                <Styled.H3>1) What is JSX?</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Definition</Styled.H4>
                        <p>
                            JSX lets you write elements like <code>{`<div />`}</code> directly in JavaScript. A build step (Babel/Vite)
                            turns it into <code>React.createElement</code> calls. JSX expressions evaluate to values.
                        </p>
                        <Code>{`// JSX is just an expression (can be assigned, returned, etc.)
const title = <h1>Hello JSX</h1>;
function App(){ 
  return <div>{title}</div>; 
}`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>JS inside {"{}"} braces</Styled.H4>
                        <p>Anything inside braces is normal JS: values, function calls, expressions.</p>
                        <ul>
                            <li>Now: <strong>{nowLabel()}</strong></li>
                            <li>Sum: <code>sum(2,3)</code> → <strong>{sum(2, 3)}</strong></li>
                            <li>Template: <strong>{`Hello ${"JSX"}`}</strong></li>
                        </ul>
                        <Code>{`<p>Time: {new Date().toLocaleString()}</p>
<p>Total: {sum(a, b)}</p>`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>

            {/* 2) Attributes, props, events */}
            <Styled.Section>
                <Styled.H3>2) Attributes, Props & Events</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Attribute naming</Styled.H4>
                        <p>JSX uses camelCase DOM props (because it's JS, not HTML):</p>
                        <ul>
                            <li><code>className</code> instead of <code>class</code></li>
                            <li><code>htmlFor</code> instead of <code>for</code></li>
                            <li><code>tabIndex</code> instead of <code>tabindex</code></li>
                        </ul>
                        <label htmlFor="em">Email:</label>{" "}
                        <input id="em" placeholder="className, htmlFor, tabIndex…" />
                        <Code>{`<div className="box" tabIndex={0}>Focus me</div>
<label htmlFor="em">Email</label><input id="em" />`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Boolean, string & number props</Styled.H4>
                        <p>Booleans without value mean <code>true</code>; strings use quotes; numbers use {"{}"}.</p>
                        <Code>{`<input disabled />                 // disabled={true}
<MyBtn size="lg" padding={12} rounded />  // string, number, boolean
// Order matters with spread; last prop wins:
<MyBtn {...props} size="sm" />`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Events are camelCase</Styled.H4>
                        <p>
                            Pass a function, not a function call. If you need arguments, wrap in an arrow function. See the live
                            counter:
                        </p>
                        <Styled.BtnRow>
                            <Styled.Button onClick={() => setClicked((n) => n + 1)}>Click me</Styled.Button>
                            <span>Clicked: <Badge tone="success">{clicked}</Badge></span>
                        </Styled.BtnRow>
                        <Code>{`function handle(){ console.log('clicked'); }
<button onClick={handle} />   // correct
<button onClick={handle()} /> // wrong (calls immediately)`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Inline <code>style</code> object</Styled.H4>
                        <p>Use an object with camelCased properties.</p>
                        <Code>{`const box = { padding: 12, backgroundColor: '#111318', borderRadius: 12 };
<div style={box}>Styled via the style prop</div>`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>

            {/* 3) Conditional rendering */}
            <Styled.Section>
                <Styled.H3>3) Conditional rendering</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Ternary, &&, null</Styled.H4>
                        <p>Count: <Badge tone={isEven ? "success" : "danger"}>{count}</Badge> - {isEven ? "Even" : "Odd"}</p>
                        <p>{count > 5 && "Rendered only when count > 5 (&& short-circuit)"}</p>
                        <Styled.BtnRow>
                            <Styled.Button onClick={() => setCount((n) => n + 1)}>Increment</Styled.Button>
                            <Styled.Button onClick={() => setCount(0)} data-variant="ghost">Reset</Styled.Button>
                        </Styled.BtnRow>
                        <Styled.Note>
                            <strong>Gotcha:</strong> <code>0 && "text"</code> renders <code>0</code> (falsy but not empty).
                        </Styled.Note>
                        <Code>{`{flag ? <A/> : <B/>}
{isReady && <Spinner/>}
{return null} // render nothing`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Guarded toggles</Styled.H4>
                        <p>Toggle below shows classic conditional blocks.</p>
                        <Styled.BtnRow>
                            <Styled.Button onClick={() => setToggle((t) => !t)}>
                                {toggle ? "Hide" : "Show"} message
                            </Styled.Button>
                        </Styled.BtnRow>
                        {toggle ? <p>Visible because <code>toggle === true</code>.</p> : null}
                        <Code>{`{toggle ? <p>Visible</p> : null}`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>

            {/* 4) Fragments */}
            <Styled.Section>
                <Styled.H3>4) Fragments (group without extra DOM)</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Short vs long syntax</Styled.H4>
                        <>
                            <Badge>Fragment one</Badge>{" "}
                            <Badge tone="warning">Fragment two</Badge>{" "}
                            <Badge tone="success">Fragment three</Badge>
                        </>
                        <Styled.Small>
                            Use <code>&lt;&gt;…&lt;/&gt;</code> or <code>&lt;React.Fragment&gt;</code>. Only the long form accepts{" "}
                            <code>key</code>.
                        </Styled.Small>
                        <Code>{`<> <Item/> <Item/> </>
// For lists where each fragment needs a key:
<React.Fragment key={row.id}>
  <Cell/> <Cell/>
</React.Fragment>`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Returning arrays (advanced)</Styled.H4>
                        <p>A component can return an array of elements-each needs a key.</p>
                        <Code>{`function Trio(){
  return [1,2,3].map(n => <span key={n}>{n} </span>);
}`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>

            {/* 5) Lists & Keys */}
            <Styled.Section>
                <Styled.H3>5) Lists & Keys (reconciliation)</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>✅ Stable keys (use id)</Styled.H4>
                        <Styled.Small>Type notes, then Shuffle/Add/Remove - the right input keeps the right text.</Styled.Small>
                        {people.map((p) => (
                            <PersonRow
                                key={p.id}
                                name={p.name}
                                note={notesGood[p.id] ?? ""}
                                onChange={(v) => setNotesGood((m) => ({ ...m, [p.id]: v }))}
                            />
                        ))}
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>❌ Index keys (anti-pattern for dynamic lists)</Styled.H4>
                        <Styled.Small>Same UI, but keyed by array index. After reorder/remove, inputs appear to “move”.</Styled.Small>
                        {people.map((p, index) => (
                            <PersonRow
                                key={index}
                                name={p.name}
                                note={notesBad[index] ?? ""}
                                onChange={(v) => setNotesBad((m) => ({ ...m, [index]: v }))}
                            />
                        ))}
                    </Styled.Card>
                </Styled.Row>

                <Styled.BtnRow>
                    <Styled.Button onClick={() => setPeople((l) => shuffle(l))}>Shuffle</Styled.Button>
                    <Styled.Button
                        onClick={() => setPeople((l) => [...l, { id: crypto.randomUUID().slice(0, 4), name: `New ${l.length + 1}` }])}
                    >
                        Add
                    </Styled.Button>
                    <Styled.Button data-variant="danger" onClick={() => setPeople((l) => l.slice(0, -1))} disabled={people.length === 0}>
                        Remove last
                    </Styled.Button>
                </Styled.BtnRow>
                <Styled.Note>
                    <strong>Rule:</strong> keys must be a stable identity (DB id, uuid). Index keys confuse React's diff when
                    items reorder/insert/remove.
                </Styled.Note>
                <Code>{`// Good
items.map(item => <Row key={item.id} {...item} />)

// Risky (reorder/insert/remove)
items.map((item, i) => <Row key={i} {...item} />)`}</Code>
            </Styled.Section>

            {/* 6) Children & composition */}
            <Styled.Section>
                <Styled.H3>6) Children & Composition</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Children prop</Styled.H4>
                        <Card>
                            <Badge>Header</Badge>
                            <p>This content is passed via <code>props.children</code>.</p>
                            <Styled.Button data-variant="ghost">Action</Styled.Button>
                        </Card>
                        <Code>{`function Card({ children }){ return <div className="card">{children}</div> }`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Function as child (render prop)</Styled.H4>
                        <Counter>
                            {(value, inc) => (
                                <>
                                    <p>Counter value: <Badge tone="success">{value}</Badge></p>
                                    <Styled.Button onClick={inc}>Increment</Styled.Button>
                                </>
                            )}
                        </Counter>
                        <Styled.Small>Parent owns state; child decides rendering shape.</Styled.Small>
                        <Code>{`<Counter>{(value, inc) => <UI value={value} inc={inc} />}</Counter>`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>

            {/* 7) dangerouslySetInnerHTML */}
            <Styled.Section>
                <Styled.H3>7) Raw HTML (dangerous; sanitize!)</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Escaped by default</Styled.H4>
                        <p>Plain text: <code>{htmlString}</code></p>
                        <Code>{`<p>{htmlString}</p> // safely escaped`}</Code>
                    </Styled.Card>
                    <Styled.Card>
                        <Styled.H4>Opt-in raw HTML</Styled.H4>
                        <p dangerouslySetInnerHTML={dangerously} />
                        <Styled.Note tone="danger">
                            Use only with trusted, sanitized content (to avoid XSS).
                        </Styled.Note>
                        <Code>{`<p dangerouslySetInnerHTML={{ __html: html }} />`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>

            {/* 8) Comments, falsey, reserved props */}
            <Styled.Section>
                <Styled.H3>8) Comments, falsey values & special props</Styled.H3>
                <Styled.Row>
                    <Styled.Card>
                        <Styled.H4>Comments in JSX</Styled.H4>
                        <p>Use block comments inside braces.</p>
                        <Code>{`{/* comment inside JSX */}`}</Code>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Falsey rendering rules</Styled.H4>
                        <ul>
                            <li><code>false</code>, <code>null</code>, <code>undefined</code> render nothing</li>
                            <li><code>0</code> renders <strong>0</strong></li>
                            <li>Arrays of nodes render all: <code>{`[<A/>, " ", <B/>]`}</code></li>
                        </ul>
                    </Styled.Card>

                    <Styled.Card>
                        <Styled.H4>Special props</Styled.H4>
                        <p><code>key</code> and <code>ref</code> are reserved; they don't appear in <code>props</code>.</p>
                        <Code>{`function Item(props){ console.log(props.key); // undefined }`}</Code>
                    </Styled.Card>
                </Styled.Row>
            </Styled.Section>
        </Styled.Page>
    );
}

/* ---------- Supporting demo components ---------- */

function PersonRow({ name, note, onChange }) {
    return (
        <Styled.RowItem>
            <span>{name}</span>
            <input
                value={note}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type a note; now shuffle/reorder the list"
            />
        </Styled.RowItem>
    );
}

function Card({ children }) {
    return <Styled.Panel>{children}</Styled.Panel>;
}

function Counter({ children }) {
    const [value, setValue] = useState(0);
    return <div>{children(value, () => setValue((v) => v + 1))}</div>;
}
