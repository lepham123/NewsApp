import { dispatcher } from '../dispatcher/AppDispatcher';
import AppConstants from '../constant/AppConstants';

const initFeed = () => {
	dispatcher({ type: AppConstants.INIT_FEED });
};

const addFeed = () => {
	dispatcher({ type: AppConstants.ADD_FEED });
};

const removeFeed = feed => {
	dispatcher({ type: AppConstants.REMOVE_FEED, data: feed });
};

export { initFeed, addFeed, removeFeed };
