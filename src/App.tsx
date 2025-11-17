// import { useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Solar from './Solar'

function App() {

	return (
		<Canvas
			camera={ {
				// fov: 45,
				// near: 0.1,
				// far: 200,
				// position: [ - 4, 3, 6 ]
			} }
		>
			<color args={[ '#020617']} attach='background'/>
			<Solar />
		</Canvas>
	)
}

export default App
