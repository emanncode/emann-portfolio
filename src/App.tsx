import Navbar from "./components/global/Navbar"
import HeroSection from "./components/sections/HeroSection"
import AnimatedCursor from 'react-animated-cursor'
import Particles from './components/ui/Particles';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={7}
        outerSize={36}
        innerScale={1}
        outerScale={2.2}
        color='245, 240, 232'
        outerStyle={{
          border: '1.5px solid rgba(201, 107, 90, 0.6)',
          backgroundColor: 'transparent',
        }}
        innerStyle={{
          backgroundColor: 'rgba(245, 240, 232, 0.9)',
        }}
        outerAlpha={0}
      />

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}>
        <Particles
          particleColors={['#F5F0E8', '#C96B5A']}
          particleCount={400}
          particleSpread={14}
          speed={0.15}
          particleBaseSize={80}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className='relative' style={{ zIndex: 1 }}>
        <Navbar />
        <HeroSection />
      </div>
    </>
  )
}

export default App
