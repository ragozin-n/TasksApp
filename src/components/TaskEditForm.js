import React, {Component} from 'react';
import _ from 'lodash';
import TaskForm from './TaskForm';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import {taskUpdate, taskSave} from '../actions';

class TaskEditForm extends Component {
	componentWillMount() {
		_.each(this.props.task, (value, prop) => {
			this.props.taskUpdate({prop, value});
		});
	}

	handleButtonPress = () => {
		const {name, count, priority} = this.props;
		this.props.taskSave({name, count, priority, uid: this.props.task.uid});
	}

	render() {
		return (
			<Card>
				<TaskForm/>
				<CardSection>
					<Button onPress={this.handleButtonPress}>
						Save Changes
					</Button>
				</CardSection>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {name, count, priority} = state.taskForm;
	return {name, count, priority};
};

export default connect(mapStateToProps, {taskUpdate, taskSave})(TaskEditForm);
