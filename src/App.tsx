import './App.css'
import MainInterface from './components/MainInterface'
import Scene3D from './components/Scene3D';
import { MeshProvider } from './store/ContextBoard';

function App() {
	return (
		<>
			<MeshProvider>
				<MainInterface />
				<Scene3D />
			</MeshProvider>
		</>
	)
};

export default App;
