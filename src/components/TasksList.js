import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import {tasksFetch} from '../actions';
import _ from 'lodash';
import ListItem from './ListItem';

class TasksList extends Component {
	componentWillMount() {
		this.props.tasksFetch();
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({tasks}) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(tasks);
	}

	renderRow(task) {
		return <ListItem task={task}/>;
	}

	render() {
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => {
	const tasks = _.map(state.tasks, (val, uid) => {
		return {...val, uid};
	});

	return {tasks};
};

export default connect(mapStateToProps, {tasksFetch})(TasksList);
