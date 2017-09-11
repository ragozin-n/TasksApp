import React from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TasksList from './components/TasksList';
import TaskCreateForm from './components/TaskCreateForm';
import TaskEditForm from './components/TaskEditForm';

const RouterComponent = () => {
	// React/jsx-no-bind rule
	handleRightClick = () => {
		Actions.createTask();
	};

	return (
		<Router>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene
						key="login"
						component={LoginForm}
						title="👋 Login 👋"
						initial
					/>
				</Scene>

				<Scene key="main">
					<Scene
						key="tasks"
						rightTitle="➕ Add"
						onRight={handleRightClick}
						component={TasksList}
						title="🏆 TASKS 🏆"
						backTitle=" "
						initial
					/>

					<Scene
						key="createTask"
						component={TaskCreateForm}
						title="🆕 Create 🆕"
					/>

					<Scene
						key="editTask"
						component={TaskEditForm}
						title="✏️ Edit ✏️"
					/>
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;
