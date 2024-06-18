import { atom, useAtomValue, useSetAtom } from 'jotai';
import React from 'react'

const countAtom = atom(0)

const Counter = () => {
  const setCount = useSetAtom(countAtom)
  const count = useAtomValue(countAtom)

  return (
    <>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  )
}


// --------------------------------------------------------------------------

const switchAtom = atom(false)

const SetTrueButton = () => {
  const setCount = useSetAtom(switchAtom)
  const setTrue = () => setCount(true)

  return (
    <div>
      <button onClick={setTrue}>Set True</button>
    </div>
  )
}


const SetFalseButton = () => {
  const setCount = useSetAtom(switchAtom)
  const setFalse = () => setCount(false)

  return (
    <div>
      <button onClick={setFalse}>Set False</button>
    </div>
  )
}

export { Counter, SetTrueButton, SetFalseButton };