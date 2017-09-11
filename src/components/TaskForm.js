import React, {Component} from 'react';
import {View, Slider, Text, Picker} from 'react-native';
import {CardSection, Input} from '../components/common';
import {connect} from 'react-redux';
import {taskUpdate} from '../actions';

class TaskForm extends Component {
	render() {
		const {labelStyle, sliderStyle} = styles;

		return (
			<View>
				<CardSection>
					<Input
						label="Name:"
						placeholder="Buy milk"
						value={this.props.name}
						onChangeText={value => this.props.taskUpdate({prop: 'name', value})}
					/>
				</CardSection>

				<CardSection style={{flexDirection: 'column', justifyContent: 'center'}}>
					<Text style={labelStyle}>{this.props.count}</Text>

					<Slider
						style={sliderStyle}
						minimumValue={0}
						maximumValue={50}
						step={1}
						value={this.props.count}
						onValueChange={value => this.props.taskUpdate({prop: 'count', value})}
					/>
				</CardSection>

				<CardSection style={{flexDirection: 'column', justifyContent: 'center'}}>

					<Text style={labelStyle}>Choose priority: </Text>

					<Picker
						onValueChange={value => this.props.taskUpdate({prop: 'priority', value})}
						selectedValue={this.props.priority}
					>
						<Picker.Item label="High" value="high"/>
						<Picker.Item label="Middle" value="mid"/>
						<Picker.Item label="Low" value="low"/>
					</Picker>
				</CardSection>
			</View>
		);
	}
}

const styles = {
	labelStyle: {
		fontSize: 30,
		fontWeight: '300',
		textAlign: 'center'
	},
	sliderStyle: {
		minWidth: 100,
		margin: 10
	}
};

const mapStateToProps = ({taskForm}) => {
	const {name, count, priority} = taskForm;
	return {name, count, priority};
};

export default connect(mapStateToProps, {taskUpdate})(TaskForm);
