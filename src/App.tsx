import './App.css'
import Experience from './components/Experience';
import MainInterface from './components/MainInterface'
import Scene3D from './components/Scene3D';
import { MeshProvider } from './store/ContextBoard';

function App() {
	//zustland
	return (
		<>
			<>
			</>
			<MeshProvider>
				<MainInterface />
				<Scene3D />
			</MeshProvider>
		</>
	)
};

export default App;
