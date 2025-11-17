// import { CatmullRomLine, CubicBezierLine, Line, MeshReflectorMaterial, OrbitControls, Outlines, QuadraticBezierLine, RoundedBox, Sparkles, Stage, Stars, TransformControls } from '@react-three/drei'
import { OrbitControls, Stars } from '@react-three/drei'
// import { useRef} from 'react'
// import { FakeGlowMaterial } from './components/FakeGlowMaterial'
// import { AdditiveBlending, Color, DoubleSide } from "three";
import { DoubleSide } from "three";
// import { useFrame } from '@react-three/fiber';

const Solar = () => {

    // const cubeRef:any = useRef(null)
    // const mercuryRef = useRef();

    // useFrame((state, delta) => {
        
    //     const time = state.clock.elapsedTime
        

    //     //mercuryRef.current.position.z = Math.cos(time)
    //     //mercuryRef.current.position.y = Math.sin(time)

    //     //mercuryRef.current.position.x = Math.sin(time) + 1
    //     //mercuryRef.current.rotation.y += 0.01

    //     // mercuryRef.current.position.x += delta * 0.2
    //     // mercuryRef.current.position.y += delta * 0.2
    //     // mercuryRef.current.position.z += delta * 0.2

    //     // //mercuryRef.current.rotation.x += delta * 0.2
    //     // mercuryRef.current.rotation.y += Math.PI * 0.5
    //     // sphereMesh.rotation.x = -0.15 * elapsedTime
    // })

    return (
        <>
            <OrbitControls makeDefault/>

            <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
            <ambientLight intensity={ 1.5 } />

            {/* <Sparkles count={100}/> */}
            <Stars radius={100} depth={100} count={1000} factor={3} saturation={0} speed={3} />

            <group>
                <mesh position-x={ 0 } rotation-x={30} rotation-y={50}  >
                    <ringGeometry args={[1.6,1.63,400]}  />
                    <meshStandardMaterial color="white" side={DoubleSide} />
                </mesh>

                <mesh position-x={1.5} position-y={0.5}>
                    <sphereGeometry args={[0.3, 30, 30]}/>
                    <meshStandardMaterial color="#EA9714" side={DoubleSide} />
                </mesh>
            </group>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[2.2,2.23,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[2.8,2.83,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[3.4, 3.43,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[4.0, 4.03,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[4.6, 4.63,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[5.2, 5.23,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[5.8, 5.83,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <mesh  position-x={ 0 } rotation-x={30} rotation-y={50}  >
                <ringGeometry args={[6.4, 6.43,400]}  />
                <meshStandardMaterial color="white" side={DoubleSide} />
            </mesh>

            <group>
                <mesh  >
                    <sphereGeometry />
                    <meshStandardMaterial color="orange"  />
                </mesh>
                {/* <mesh >
                    <sphereGeometry />
                    <FakeGlowMaterial glowColor={'orange'} side={DoubleSide} glowSharpness={100}  />
                </mesh> */}
            </group>

            {/* <TransformControls /> */}

            {/* <mesh ref={cubeRef} position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry  />
                <MeshReflectorMaterial resolution={512} blur={[1000, 1000]} mixBlur={1} mirror={.5}/>
            </mesh> */}
        </>
    )
}

export default Solar