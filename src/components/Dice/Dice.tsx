import { FunctionComponent, useEffect, useState } from "react";
import "./Dice.css"

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const getRandomSign = () => {
  return Math.random() < 0.5 ? 1 : -1;
}

const getRandomRotations = (min: number, max: number) => {
  return getRandomInt(min, max) * getRandomSign()
}

const rotate = { x: 0, y: 0, z: 0 }

const Dice: FunctionComponent = () => {
  const [style, setStyle] = useState<{transform: string}>({transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg)`})

  useEffect(() => {
    const roll = (event: MessageEvent) => {
      if (event.data !== "roll") return
      const xRotations = getRandomRotations(4, 12)
      const yRotations = getRandomRotations(4, 12)
      const zRotations = getRandomRotations(1, 3)
      rotate.x += (xRotations * 90)
      rotate.y += (yRotations * 90)
      rotate.z += (zRotations * 360)
      setStyle({transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg)`})
    }
    window.addEventListener("message", roll)
    return () => {
      window.removeEventListener("message", roll)
    }
  }, [])

  return (
    <div className="scene">
      <div className="cube animate" style={style}>
        <div className="cube__face cube__face--front" />
        <div className="cube__face cube__face--back" />
        <div className="cube__face cube__face--right" />
        <div className="cube__face cube__face--left" />
        <div className="cube__face cube__face--top" />
        <div className="cube__face cube__face--bottom" />
      </div>
    </div>
  )
}

export default Dice