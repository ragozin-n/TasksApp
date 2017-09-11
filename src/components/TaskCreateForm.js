import React, {Component} from 'react';
import {connect} from 'react-redux';
import {taskUpdate, taskCreate} from '../actions';
import {Card, CardSection, Button} from './common';
import TaskForm from './TaskForm';

class TaskCreateForm extends Component {
	componentWillMount() {
		//
	}

	handleCreateButton = () => {
		const {name, count, priority} = this.props;
		this.props.taskCreate({name, count, priority: priority || 'high'});
	}

	render() {
		return (
			<Card>
				<TaskForm {...this.props}/>
				<CardSection>
					<Button
						onPress={this.handleCreateButton}
					>
						Submit
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = ({taskForm}) => {
	const {name, count, priority} = taskForm;
	return {name, count, priority};
};

export default connect(mapStateToProps, {
	taskUpdate,
	taskCreate
})(TaskCreateForm);
