import {useState} from 'react'
import styled from "styled-components";

const Flex = styled.div`
    background: red;
    width: 64px;
    height: 64px;
`

function AppC() {
    const [count, setCount] = useState(0)
    const a = true;
    return (
        <>
            {a ? <div>1</div> : <div>2</div>}
        <Flex>야호</Flex>
        <div>

        <a href="https://vite.dev" target="_blank">
    <img src="/vite.svg" className="logo" alt="Vite logo"/>
        </a>
        <a href="https://reactjs.org" target="_blank">
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
    </button>
    <p>
    Edit <code>src/App.tsx</code> and save to test HMR
    </p>
    </div>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p>
    </>
)
}

export default AppC
