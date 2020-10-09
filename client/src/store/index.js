import { configureStore } from '@reduxjs/toolkit';

import settings from "../containers/Setting/settingsReducer";
import counter from "../containers/Home/counterReducer"

export default configureStore({
  reducer: {
    settings: settings,
    counter: counter,
  },
});
