import './App.css'
import MainInterface from './components/MainInterface'
import Scene3D from './components/Scene3D';
import { MusicPlayerProvider } from './managers/contextMusic';
import { MeshProvider } from './store/ContextBoard';

function App() {
	return (
		<>
			<MeshProvider>
				<MusicPlayerProvider>
					<MainInterface />
					<Scene3D />
				</MusicPlayerProvider>
			</MeshProvider>
		</>
	)
};

export default App;
