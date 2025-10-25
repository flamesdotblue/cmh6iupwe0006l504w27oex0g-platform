import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Journey from './components/Journey';
import CommunityAndFooter from './components/CommunityAndFooter';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#162c45] text-white selection:bg-[#e6543f]/30 selection:text-white">
      <Hero />
      <ValueProps />
      <Journey />
      <CommunityAndFooter />
    </div>
  );
}

export default App;
