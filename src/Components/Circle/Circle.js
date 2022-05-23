import { useRef, useEffect } from "react";
import Draw from "./Draw.js"
import Update from "./Update.js";

import { exampleControlState } from 'jotaiStore.js';
import { useAtom } from 'jotai'

export default function Circle() {

  const ref = useRef()
  const didMountRef = useRef(false);

  console.log(useAtom(exampleControlState))

  useEffect(() => {
    Draw(ref.current)
  }, []) // [] implies code will run only once => similar to didMount

  useEffect(() => {
    if (didMountRef.current){ return Update(ref.current)} // Prevents run on initial render 
    didMountRef.current = true;
  }) // NO [] implies code will run on *every* render => similar to didUpdate

  return (
    <svg
      ref={ref}
    />
  )
  
}

