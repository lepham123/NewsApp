import React, { PureComponent } from 'react';
import { StatusBar, StyleSheet, Platform, Text, View } from 'react-native';
//import TopBarTextExample from './screen/TopBarTextExample';
import TopBarTextExample from './app/screen/ScrollViewsExample';
//import DemoListView from './app/screen/DemoListView';

export default class App extends PureComponent<> {
	render() {
		const backgroundColor = '#222';
		const appbarElevation = 4;
		const borderBottomWidth = Platform.OS === 'ios' ? StyleSheet.hairlineWidth : 0;
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />
				<View style={[styles.statusbar, backgroundColor ? { backgroundColor } : null]} />
				<View
					style={[
						styles.appbar,
						backgroundColor ? { backgroundColor } : null,
						appbarElevation ? { elevation: appbarElevation, borderBottomWidth } : null,
					]}
				/>
				<TopBarTextExample />
				{/* <DemoListView /> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	statusbar: {
		backgroundColor: '#222',
		height: Platform.OS === 'ios' ? 20 : 25,
	},
	appbar: {
		flexDirection: 'row',
		alignItems: 'center',
		height: Platform.OS === 'ios' ? 44 : 56,
		backgroundColor: '#222',
		borderBottomColor: 'rgba(0, 0, 0, 0.1)',
	},
	title: {
		flex: 1,
		margin: 16,
		textAlign: Platform.OS === 'ios' ? 'center' : 'left',
		fontSize: Platform.OS === 'ios' ? 20 : 18,
		color: '#fff',
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		width: 56,
		padding: Platform.OS === 'ios' ? 12 : 16,
	},
	touchable: {
		padding: 16,
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: 'rgba(0, 0, 0, .06)',
	},
	item: {
		fontSize: 16,
		color: '#333',
	},
});
