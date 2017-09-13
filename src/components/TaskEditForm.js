import React, {Component} from 'react';
import _ from 'lodash';
import TaskForm from './TaskForm';
import {connect} from 'react-redux';
import {Card, CardSection, Button, ConfirmModal} from './common';
import {taskUpdate, taskSave, taskDelete} from '../actions';

class TaskEditForm extends Component {
	state = {showModal: false};

	componentWillMount() {
		_.each(this.props.task, (value, prop) => {
			this.props.taskUpdate({prop, value});
		});
	}

	handleSaveButton = () => {
		const {name, count, priority} = this.props;
		this.props.taskSave({name, count, priority, uid: this.props.task.uid});
	}

	handleModalAccept = () => {
		const {uid} = this.props.task;
		this.props.taskDelete({uid});
		this.setState({showModal: !this.state.showModal});
	}

	render() {
		return (
			<Card>
				<TaskForm/>
				<CardSection>
					<Button onPress={this.handleSaveButton}>
						Save Changes
					</Button>
				</CardSection>

				<CardSection>
					<Button onPress={() => this.setState({showModal: !this.state.showModal})}>
						Delete task
					</Button>
				</CardSection>

				<ConfirmModal
					visible={this.state.showModal}
					onAccept={this.handleModalAccept}
					onReject={() => this.setState({showModal: !this.state.showModal})}
				>
					Are you sure you want to delete this task?
				</ConfirmModal>
			</Card>
		);
	}
}

const mapStateToProps = state => {
	const {name, count, priority} = state.taskForm;
	return {name, count, priority};
};

export default connect(mapStateToProps, {taskUpdate, taskSave, taskDelete})(TaskEditForm);
